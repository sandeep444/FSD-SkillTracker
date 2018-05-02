import { Component } from '@angular/core';
import {SkillServiceService} from './Services/skill-service.service'
import {AssociateServiceService} from './Services/associate-service.service'
import {ConfirmationService} from 'primeng/api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[SkillServiceService,ConfirmationService,AssociateServiceService]
})
export class AppComponent {
  title = 'app';
}
