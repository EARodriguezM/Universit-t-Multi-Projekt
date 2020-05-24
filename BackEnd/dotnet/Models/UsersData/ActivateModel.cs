using System.ComponentModel.DataAnnotations;

namespace Wchter.Models.UsersData
{
    public class ActivateModel
    {
        [Required]
        public string Password { get; set; }
        public byte[] ProfilePicture { get; set; }
    }
}