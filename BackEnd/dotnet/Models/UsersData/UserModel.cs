namespace Wchter.Models.UsersData
{
    public class UserModel
    {
        public string FirstName { get; set; }
        public string SecondName { get; set; }
        public string FirstSurname { get; set; }
        public string SecondSurname { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public string EmailPersonal { get; set; }
        public byte[] ProfilePicture { get; set; }
        public bool IsActivated { get; set; }
        public bool Status { get; set; }
    }
}