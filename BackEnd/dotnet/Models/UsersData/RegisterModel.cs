using System.ComponentModel.DataAnnotations;

namespace Wchter.Models.UsersData
{
    public class RegisterModel
    {
        [Required]
        public string UserId { get; set; }
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string SecondName { get; set; }
        [Required]
        public string FirstSurname { get; set; }
        [Required]
        public string SecondSurname { get; set; }
        [Required]
        public string Username { get; set; }
        [Required]
        public string EmailPersonal { get; set; }
    }
}