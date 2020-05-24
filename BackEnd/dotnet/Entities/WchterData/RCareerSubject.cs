using System;
using System.Collections.Generic;

namespace Wchter.Entities.WchterData
{
    public partial class RCareerSubject
    {
        public string CareerId { get; set; }
        public string SubjectId { get; set; }
        public bool? Status { get; set; }

        public virtual Career Career { get; set; }
        public virtual Subject Subject { get; set; }
    }
}
