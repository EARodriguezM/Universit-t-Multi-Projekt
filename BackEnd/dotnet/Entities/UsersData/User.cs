using System;
using System.Collections.Generic;

namespace Wchter.Entities.UsersData
{
    public partial class User
    {
        public string UserId { get; set; }
        public string FirstName { get; set; }
        public string SecondName { get; set; }
        public string FirstSurname { get; set; }
        public string SecondSurname { get; set; }
        public string Username { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public string EmailPersonal { get; set; }
        public byte[] ProfilePicture { get; set; }
        public bool IsActivated { get; set; }
        public bool? Status { get; set; }
    }
}