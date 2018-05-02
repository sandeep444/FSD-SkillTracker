import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAssociateSkillComponent } from './update-associate-skill.component';

describe('UpdateAssociateSkillComponent', () => {
  let component: UpdateAssociateSkillComponent;
  let fixture: ComponentFixture<UpdateAssociateSkillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAssociateSkillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAssociateSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
