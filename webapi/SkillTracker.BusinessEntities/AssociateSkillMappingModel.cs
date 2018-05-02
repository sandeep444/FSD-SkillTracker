using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SkillTracker.BusinessEntities
{
   public class AssociateSkillMappingModel
    {
        public int AssociateSkillID { get; set; }
        public int AssociateID { get; set; }
        public int SkillId { get; set; }
        public string SkillName { get; set; }
        public int SkillRate { get; set; }
    }
}
