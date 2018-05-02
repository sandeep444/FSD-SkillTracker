import {AssociateModel} from './AssociateModel'
import {AssociateSkillMappingModel} from './AssociateSkillMappingModel'
export class AssociateSkillsModel{
    AssociateDetails: AssociateModel;
    Skills:AssociateSkillMappingModel[];
    constructor(associate_details:AssociateModel,skills:AssociateSkillMappingModel[])
    {
        this.AssociateDetails=associate_details;
        this.Skills=skills
    }
}