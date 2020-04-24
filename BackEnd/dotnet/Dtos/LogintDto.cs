using System.ComponentModel.DataAnnotations;

		namespace w_chter.Dtos
		{
		    public class LoginDto
		    {
		        [Required]
		        public string Username { get; set; }

		        [Required]
		        public string Password { get; set; }
		    }
		}