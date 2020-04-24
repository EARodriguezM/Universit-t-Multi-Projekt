using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using w_chter.Models.Wchter_Login;

namespace w_chter.Repositories
{
    public class AuthRepository: IAuthRepository
    {
        private readonly Wchter_LoginContext _context;
        public AuthRepository(Wchter_LoginContext context)
        {
            _context = context;
        }

        public async Task<UserLogin> Login(string username, string password)
        {
            var user = await _context.UserLogin.FirstOrDefaultAsync(x => x.Username == username);
            if (user == null)
                return null;

            if (!VerifyPasswordHash(password, user.Password, user.Salt))
                return null;

            return user;
        }

        private bool VerifyPasswordHash(string password, byte[] passwordHash, byte[] salt)
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512(salt))
            {
                var computeHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                for (int i = 0; i < computeHash.Length; i++)
                {
                    if (computeHash[i] != passwordHash[i]) return false;
                }
            }
            return true;
        }
/*
        public async Task<UserLogin> Register(UserLogin user, string password)
        {
            byte[] passwordHash, salt;
            CreatePasswordHash(password, out passwordHash, out salt);
            user.Password = passwordHash;
            user.Salt = salt;

            await _context.UserLogin.AddAsync(user);
            await _context.SaveChangesAsync();

            return user;
        }
*/
        private void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] salt)
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512())
            {
                salt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }
/*
        public async Task<bool> UserExists(string username)
        {
            if (await _context.UserLogin.AnyAsync(x => x.Username == username))
                return true;
            return false;
        }
*/
    }
}