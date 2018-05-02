export class AssociateSkillMappingModel{
    AssociateSkillID: number;
    AssociateID: number;
    SkillId: number;
    SkillName:string;
    SkillRate: number;
    constructor(associate_skillID:number,associate_id:number,skill_id:number,
        skill_name:string,skill_rate:number)
    {
        this.AssociateSkillID=associate_skillID;
        this.AssociateID=associate_id
        this.SkillId=skill_id;
        this.SkillName=skill_name
        this.SkillRate=skill_rate;        
    }
}