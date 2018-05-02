using SkillTracker.BusinessEntities;
using SkillTracker.DataAccessLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SkillTracker.BusinessLayer
{
    public class AssociateDetailsBusiness
    {
        AssociateRepository repo = new AssociateRepository();

        public AssociateSkillsModel GetAssociateSkillDetails(int associateId)
        {
            return repo.GetAssociateSkillDetails(associateId);
        }
    }
}
