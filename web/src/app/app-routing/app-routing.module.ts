import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from '../UI/dash-board/dash-board.component'
import { SkillDetailsComponent } from '../UI/skill-details/skill-details.component'
import { AddAssociateSkillComponent } from '../UI/add-associate-skill/add-associate-skill.component';
import { UpdateAssociateSkillComponent } from '../UI/update-associate-skill/update-associate-skill.component';


const routes: Routes = [
  {
    path: 'SkillDetails',
    component: SkillDetailsComponent,
  },
  {
    path: 'AddAssociateSkill',
    component: AddAssociateSkillComponent,
  },
  {
    path: 'UpdateAssociateSkill',
    component: UpdateAssociateSkillComponent,
  },
  {
    path: 'DashBoard',
    component: DashBoardComponent,
  },
  {
      path: '',
      component: DashBoardComponent,
  },
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes)
  ],
  exports: [
      RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
