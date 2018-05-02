using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SkillTracker.DataAccessLayer.Entities
{
    public class assocoate_skill
    {
        [Key]
        public int Associate_SkillID { get; set; }
        public int Associate_ID { get; set; }
        public int Skill_Id { get; set; }
        public int Skill_Rate { get; set; }

        [Key, ForeignKey("Associate_ID")]
        public virtual assocoate_details AssocoateDetails { get; set; }
        [Key, ForeignKey("Skill_Id")]
        public virtual assocoate_skill AssocoateSkill { get; set; }
    }
}
