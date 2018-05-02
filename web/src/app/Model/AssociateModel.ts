export class AssociateModel{
    AssociateID: number;
    Name:string;
    Email:string;
    Mobile:number;
    Sex:string;
    Pic:string;
    StatusGreen:boolean;
    StatusBlue:boolean;
    StatusRed:boolean;
    Level1:boolean;
    Level2:boolean;
    Level3:boolean;
    Remark:string;
    Strength:string;
    Weakness:string;
    constructor(associate_id:number,name:string ,email:string ,mobile:number
        ,sex:string,pic:string,status_green:boolean,status_blue:boolean
        ,status_red:boolean,level1:boolean,level2:boolean,level3:boolean
        ,remark:string,strength:string,weakness:string)

    {
        this.AssociateID=associate_id;
        this.Name=name
        this.Email=email;
        this.Mobile=mobile
        this.Sex=sex;
        this.Pic=pic
        this.StatusGreen=status_green;
        this.StatusBlue=status_blue
        this.StatusRed=status_red;
        this.Level1=level1
        this.Level2=level2;
        this.Level3=level3
        this.Remark=remark;
        this.Strength=strength
        this.Weakness=weakness
    }
}