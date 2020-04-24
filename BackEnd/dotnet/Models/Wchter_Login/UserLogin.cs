using System;
using System.Collections.Generic;

namespace w_chter.Models.Wchter_Login
{
    public partial class UserLogin
    {
        public string UserLoginId { get; set; }
        public string Username { get; set; }
        public byte[] Password { get; set; }
        public byte[] Salt { get; set; }
        public bool Status { get; set; }
    }
}
