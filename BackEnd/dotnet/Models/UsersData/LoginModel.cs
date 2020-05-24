using System.ComponentModel.DataAnnotations;

namespace Wchter.Models.UsersData
{
    public class LoginModel
    {
        [Required]
        public string Username { get; set; }
        [Required]
        public string Password { get; set; }
    }
}