using System;
using System.Collections.Generic;

namespace Wchter.Entities.WchterData
{
    public partial class Tag
    {
        public int TagId { get; set; }
        public string UserId { get; set; }
        public string Tag1 { get; set; }
        public bool? Status { get; set; }

        public virtual RUserUserType User { get; set; }
    }
}
