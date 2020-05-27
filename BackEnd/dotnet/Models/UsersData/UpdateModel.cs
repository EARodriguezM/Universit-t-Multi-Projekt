namespace Wchter.Models.UsersData
{
    public class UpdateModel
    {
        public string FirstName { get; set; }
        public string SecondName { get; set; }
        public string FirstSurname { get; set; }
        public string SecondSurname { get; set; }
        public string OldPassword { get; set; }
        public string NewPassword { get; set; }
        public string EmailPersonal { get; set; }
        public byte[] ProfilePicture { get; set; }
        public bool? Status { get; set; }
    }
}