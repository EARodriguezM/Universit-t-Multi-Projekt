using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Wchter.Entities.UsersData;
using Wchter.Entities.WchterData;

using Wchter.Helpers;

namespace Wchter.Services.UsersData
{
    public interface IUserService
    {
        User Login(string username, string password);
        IEnumerable<User> GetUsers();
        User GetUser(string userId);
        User Create(User user);
        User Activate(User user, string password);
        bool Update(User userNewInfo, string oldPassword, string newPassword);
        bool Delete(string userId);
    }

    public class UserService : IUserService
    {
        private readonly UsersDataContext _contextUsersData;
        private readonly WchterDataContext _contextWchterData;
        public UserService(UsersDataContext contextUsersData, WchterDataContext contextWchterData)
        {
            _contextUsersData = contextUsersData;
            _contextWchterData = contextWchterData;
        }

        //POST
        public User Login(string username, string password)
        {
            if (string.IsNullOrEmpty(username) || string.IsNullOrEmpty(password))
                return null;

            var user = _contextUsersData.User.SingleOrDefault(x => x.Username == username);

            // check if username exists
            if (user == null)
                return null;

            // check if password is correct
            if (!VerifyPasswordHash(password, user.PasswordHash, user.PasswordSalt))
                return null;

            // authentication successful
            return user;
        }

        //GET
        public IEnumerable<User> GetUsers()
        {
            return _contextUsersData.User;
        }

        //GET
        public User GetUser(string userId)
        {
            return _contextUsersData.User.Find(userId);
        }

        //POST
        public User Create(User user)
        {
            // validation
            if (_contextUsersData.User.Any(x => x.UserId == user.UserId))
                throw new AppException("The user with id \"" + user.UserId + "\" is already exist");

            if (_contextUsersData.User.Any(x => x.Username == user.Username))
                throw new AppException("Username \"" + user.Username + "\" is already taken");

            if (_contextUsersData.User.Any(x => x.EmailPersonal == user.EmailPersonal))
                throw new AppException("Email \"" + user.EmailPersonal + "\" is already taken");

            user.IsActivated = false;
            _contextUsersData.User.Add(user);
            _contextUsersData.SaveChanges();

            return user;
        }

        //PUT
        public User Activate(User user, string password)
        {
            var userToActivate= _contextUsersData.User.Find(user.UserId);

            if (userToActivate == null)
                throw new AppException("User not found");

            if (userToActivate.Status == false)
                throw new AppException("User is disable");

            if (userToActivate.IsActivated == true)
                throw new AppException("User is already activated");

            byte[] passwordHash, passwordSalt;
            CreatePasswordHash(password, out passwordHash, out passwordSalt);

            userToActivate.PasswordHash = passwordHash;
            userToActivate.PasswordSalt = passwordSalt;

            // upload profile picture if it has provided
            if (!string.IsNullOrEmpty(user.ProfilePicture.ToString()))
                userToActivate.ProfilePicture = user.ProfilePicture;

            userToActivate.IsActivated = true;

            _contextUsersData.User.Update(userToActivate);
            _contextUsersData.SaveChanges();

            //  map principal names for return
            user.FirstName = userToActivate.FirstName;
            user.FirstSurname = userToActivate.FirstSurname;
            

            return user;
        }

        //PUT
        public bool Update(User userNewInfo, string oldPassword, string newPassword)
        {
            var userToUpdate = _contextUsersData.User.Find(userNewInfo.UserId);

            if (userToUpdate == null)
                throw new AppException("User not found");
            if (userToUpdate.Status == false)
                throw new AppException("User is disable");

            // update name if it has changed and provided
            if (!string.IsNullOrWhiteSpace(userNewInfo.FirstName) && userNewInfo.FirstName != userToUpdate.FirstName)
                userToUpdate.FirstName = userNewInfo.FirstName;

            if (!string.IsNullOrWhiteSpace(userNewInfo.SecondName) && userNewInfo.SecondName != userToUpdate.SecondName)
                userToUpdate.SecondName = userNewInfo.SecondName;

            if (!string.IsNullOrWhiteSpace(userNewInfo.FirstSurname) && userNewInfo.FirstSurname != userToUpdate.FirstSurname)
                userToUpdate.FirstSurname = userNewInfo.FirstSurname;

            if (!string.IsNullOrWhiteSpace(userNewInfo.SecondSurname) && userNewInfo.SecondSurname != userToUpdate.SecondSurname)
                userToUpdate.SecondSurname = userNewInfo.SecondSurname;

            // update password if provided
            if (!string.IsNullOrWhiteSpace(oldPassword) && !string.IsNullOrWhiteSpace(newPassword))
            {
                if (!VerifyPasswordHash(oldPassword, userToUpdate.PasswordHash, userToUpdate.PasswordSalt))
                {
                    throw new AppException("the old password don't match");
                }
                byte[] passwordHash, passwordSalt;
                CreatePasswordHash(newPassword, out passwordHash, out passwordSalt);

                userToUpdate.PasswordHash = passwordHash;
                userToUpdate.PasswordSalt = passwordSalt;
            }

            // update email if it has changed and provided
            if (!string.IsNullOrWhiteSpace(userNewInfo.EmailPersonal) && userNewInfo.EmailPersonal != userToUpdate.EmailPersonal)
            {
                // throw error if the new email is already exist
                if (_contextUsersData.User.Any(x => x.EmailPersonal == userNewInfo.EmailPersonal))
                    throw new AppException("Email " + userNewInfo.EmailPersonal + " is already exist");

                userToUpdate.EmailPersonal = userNewInfo.EmailPersonal;
            }



            _contextUsersData.User.Update(userToUpdate);
            _contextUsersData.SaveChanges();
            return true;
        }

        //DELETE
        public bool Delete(string userId)
        {
            var user = _contextUsersData.User.Find(userId);
            if (user != null)
            {
                _contextUsersData.User.Remove(user);
                _contextUsersData.SaveChanges();
                return true;
            }
            return false;
        }

        // private helper methods

        private static void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            if (password == null) throw new ArgumentNullException("password");
            if (string.IsNullOrWhiteSpace(password)) throw new ArgumentException("Value cannot be empty or whitespace only string.", "password");

            using (var hmac = new System.Security.Cryptography.HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }

        private static bool VerifyPasswordHash(string password, byte[] storedHash, byte[] storedSalt)
        {
            if (password == null) throw new ArgumentNullException("password");
            if (string.IsNullOrWhiteSpace(password)) throw new ArgumentException("Value cannot be empty or whitespace only string.", "password");
            if (storedHash.Length != 64) throw new ArgumentException("Invalid length of password hash (64 bytes expected).", "passwordHash");
            if (storedSalt.Length != 128) throw new ArgumentException("Invalid length of password salt (128 bytes expected).", "passwordHash");

            using (var hmac = new System.Security.Cryptography.HMACSHA512(storedSalt))
            {
                var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                for (int i = 0; i < computedHash.Length; i++)
                {
                    if (computedHash[i] != storedHash[i]) return false;
                }
            }

            return true;
        }
    }
}