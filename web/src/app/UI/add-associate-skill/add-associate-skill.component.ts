import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AssociateSkillsModel} from '../../Model/AssociateSkillsModel'
import {AssociateServiceService} from '../../Services/associate-service.service'
import { FormGroup, FormBuilder, Validators , ReactiveFormsModule} from '@angular/forms';
import {DialogModule} from 'primeng/dialog';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import {SliderModule} from 'primeng/slider';

@Component({
  selector: 'app-add-associate-skill',
  templateUrl: './add-associate-skill.component.html',
  styleUrls: ['./add-associate-skill.component.css']
})
export class AddAssociateSkillComponent implements OnInit {

  form: FormGroup;
  associateSkill:AssociateSkillsModel;
  errorMessage: string;
  constructor(private _associateservice: AssociateServiceService, private _router: Router,private formBuilder: FormBuilder,
    private confirmationService: ConfirmationService) { }

    ngOnInit() {
      this.form = this.formBuilder.group({
        skillz: [null,Validators.required]        
      });
      this.ResetPage();
    }
    ResetPage()
    {
      this.getAssociateSkillDetails(0);      
    }
    getAssociateSkillDetails(id:number)
    {
      this._associateservice.GetAssociateSkillDetails(id)
      .subscribe(
      value => this.associateSkill = value,
      error => this.errorMessage = <any>error);
    }

}
