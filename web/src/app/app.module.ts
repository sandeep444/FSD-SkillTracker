import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'; 
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { DashBoardComponent } from './UI/dash-board/dash-board.component';
import {RouterModule, Routes} from '@angular/router';  
import { SkillDetailsComponent } from './UI/skill-details/skill-details.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AddAssociateSkillComponent } from './UI/add-associate-skill/add-associate-skill.component';
import { UpdateAssociateSkillComponent } from './UI/update-associate-skill/update-associate-skill.component';
import { SkillFilterPipe } from './Pipes/skill-filter.pipe';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageDisplayComponent } from './UI/message-display/message-display.component';

import {DialogModule} from 'primeng/dialog';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {SliderModule} from 'primeng/slider';

@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent,
    SkillDetailsComponent,
    AddAssociateSkillComponent,
    UpdateAssociateSkillComponent,
    SkillFilterPipe,
    MessageDisplayComponent,    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    DialogModule,
    ConfirmDialogModule,
    SliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
