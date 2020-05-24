using System;
using System.Collections.Generic;

namespace Wchter.Entities.WchterData
{
    public partial class Device
    {
        public int DeviceId { get; set; }
        public string Description { get; set; }
        public int ClassroomId { get; set; }
        public bool? Status { get; set; }

        public virtual Classroom Classroom { get; set; }
    }
}
