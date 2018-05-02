using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SkillTracker.BusinessEntities
{
    public class AssociateSkillsModel
    {
        public AssociateModel AssociateDetails { get; set; }
        public List<AssociateSkillMappingModel> Skills { get; set; }
    }
}
