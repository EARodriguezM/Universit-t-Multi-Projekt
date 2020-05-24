using System;
using System.Collections.Generic;

namespace Wchter.Entities.WchterData
{
    public partial class UserType
    {
        public UserType()
        {
            RUserUserType = new HashSet<RUserUserType>();
        }

        public byte UserTypeId { get; set; }
        public string Description { get; set; }
        public bool? Status { get; set; }

        public virtual ICollection<RUserUserType> RUserUserType { get; set; }
    }
}
