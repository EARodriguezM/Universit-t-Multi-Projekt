using System;
using System.Collections.Generic;

namespace Wchter.Entities.WchterData
{
    public partial class RUserUserType
    {
        public RUserUserType()
        {
            Tag = new HashSet<Tag>();
        }

        public string UserId { get; set; }
        public byte UserTypeId { get; set; }

        public virtual UserType UserType { get; set; }
        public virtual ICollection<Tag> Tag { get; set; }
    }
}
