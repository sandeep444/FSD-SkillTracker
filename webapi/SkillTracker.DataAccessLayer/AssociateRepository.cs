using SkillTracker.BusinessEntities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SkillTracker.DataAccessLayer
{
    public class AssociateRepository
    {
        public AssociateSkillsModel GetAssociateSkillDetails(int associateId)
        {
            var model = new AssociateSkillsModel();
            using (var dbContext = new SkillTrackerDBContext())
            {
                if (associateId == 0)
                {
                    model.AssociateDetails = new AssociateModel();
                    model.Skills = dbContext.SkillDetails
                         .Select(x => new AssociateSkillMappingModel()
                         {
                             AssociateSkillID = 0,
                             AssociateID = associateId,
                             SkillId = x.Skill_Id,
                             SkillName = x.Skill_Name,
                             SkillRate = 0
                         })
                    .ToList();
                }
                else  
                {
                    model.AssociateDetails = new AssociateModel();
                    model.Skills = dbContext.SkillDetails
                         .Select(x => new AssociateSkillMappingModel()
                         {
                             AssociateSkillID = 0,
                             AssociateID = associateId,
                             SkillId = x.Skill_Id,
                             SkillName = x.Skill_Name,
                             SkillRate = 0
                         })
                    .ToList();
                }
            }
            return model;
        }
    }
}
