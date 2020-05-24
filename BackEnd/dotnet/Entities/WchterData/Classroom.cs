using System;
using System.Collections.Generic;

namespace Wchter.Entities.WchterData
{
    public partial class Classroom
    {
        public Classroom()
        {
            Device = new HashSet<Device>();
        }

        public int ClassroomId { get; set; }
        public string Description { get; set; }
        public string Block { get; set; }
        public string Room { get; set; }
        public bool? Status { get; set; }

        public virtual ICollection<Device> Device { get; set; }
    }
}
