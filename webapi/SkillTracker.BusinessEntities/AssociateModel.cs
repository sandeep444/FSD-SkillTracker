using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SkillTracker.BusinessEntities
{
    public class AssociateModel
    {
        public int AssociateID { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public int Mobile { get; set; }
        public string Sex { get; set; }
        public string Pic { get; set; }
        public bool StatusGreen { get; set; }
        public bool StatusBlue { get; set; }
        public bool StatusRed { get; set; }
        public bool Level1 { get; set; }
        public bool Level2 { get; set; }
        public bool Level3 { get; set; }
        public string Remark { get; set; }
        public string Strength { get; set; }
        public string Weakness { get; set; }
    }
}
