using SkillTracker.BusinessEntities;
using SkillTracker.BusinessLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace SkillTracker.WebAPI.Controllers
{
    public class AssociateDetailsController : ApiController
    {
        AssociateDetailsBusiness business = new AssociateDetailsBusiness();
        [HttpGet]
        [Route("api/AssociateDetails/GetAssociateSkillDetails")]
        public AssociateSkillsModel GetAssociateSkillDetails(int id)
        {
            return business.GetAssociateSkillDetails(id);
        }
    }
}
