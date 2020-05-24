using System;
using System.Collections.Generic;

namespace Wchter.Entities.WchterData
{
    public partial class SemesterLog
    {
        public int SemesterId { get; set; }
        public string Description { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public bool? Status { get; set; }
    }
}
