using System;
using System.Collections.Generic;

namespace Wchter.Entities.WchterData
{
    public partial class Career
    {
        public string CareerId { get; set; }
        public string Name { get; set; }
        public byte FacultyId { get; set; }
        public bool? Status { get; set; }

        public virtual Faculty Faculty { get; set; }
    }
}
