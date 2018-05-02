import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {SkillDetailsModel} from '../../Model/SkillDetailsModel'
import {SkillServiceService} from '../../Services/skill-service.service'
import { FormGroup, FormBuilder, Validators , ReactiveFormsModule} from '@angular/forms';
import {DialogModule} from 'primeng/dialog';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';

@Component({
  selector: 'app-skill-details',
  templateUrl: './skill-details.component.html',
  styleUrls: ['./skill-details.component.css']
})
export class SkillDetailsComponent implements OnInit {

  constructor(private _skillservice: SkillServiceService, private _router: Router,private formBuilder: FormBuilder,
    private confirmationService: ConfirmationService) { }

  public skillDetails: SkillDetailsModel[];
  public skillDetail: SkillDetailsModel;
  errorMessage: string;
  filterString: string='';
  reMessage:string;
  form: FormGroup;
  display: boolean = false;

  messageDisplay :string=''
  messageType:string=''

  updateSkillName :string;
  updateSkillId :number;

 updateSkill: SkillDetailsModel;

  ngOnInit() {
    this.form = this.formBuilder.group({
      skillz: [null,Validators.required]
      
    });
    this.ResetPage();
  }
  ResetPage()
  {
    this.getSkillDetails("");
    this.skillDetail =new SkillDetailsModel(0,"")
  }

  getSkillDetails(name:string) {
    this._skillservice.getAllSkills(name)
        .subscribe(
        value => this.skillDetails = value,
        error => this.errorMessage = <any>error);
}

AddSkill(){
  this.skillDetails =[];   
  this._skillservice.AddSkill(this.skillDetail)
        .subscribe(
        value => {this.messageDisplay = value;this.messageType='success';this.getSkillDetails("")},
        error => {this.messageDisplay = <any>error;this.messageType='danger'});
  
}

UpdateSkill()
{ 
  this.updateSkill=new SkillDetailsModel(this.updateSkillId,this.updateSkillName)
  this.display = false;
  this._skillservice.UpdateSkill(this.updateSkill)
        .subscribe(
        value => {this.messageDisplay = value;this.messageType='success';this.getSkillDetails("")},
        error => {this.messageDisplay = <any>error;this.messageType='danger'});
}

DeleteSkill(skill:SkillDetailsModel)
{
  this.confirmationService.confirm({
    message: 'Do you want to remove the skill?',
    accept: () => {
    this._skillservice.DeleteSkill(skill)
          .subscribe(
            value => {this.messageDisplay = value;this.messageType='success';this.getSkillDetails("")},
            error => {this.messageDisplay = <any>error;this.messageType='danger'});
          }
        });
}

showEditSkill(skill:SkillDetailsModel) {
  this.updateSkillName=skill.SkillName;
  this.updateSkillId=skill.SkillId;
  this.display = true;
}

}
