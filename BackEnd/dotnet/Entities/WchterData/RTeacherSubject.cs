using System;
using System.Collections.Generic;

namespace Wchter.Entities.WchterData
{
    public partial class RTeacherSubject
    {
        public string UserId { get; set; }
        public string SubjectId { get; set; }
        public int SemesterId { get; set; }
        public bool? Status { get; set; }

        public virtual SemesterLog Semester { get; set; }
        public virtual Subject Subject { get; set; }
        public virtual RUserUserType User { get; set; }
    }
}
