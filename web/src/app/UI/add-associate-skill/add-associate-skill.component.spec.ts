import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAssociateSkillComponent } from './add-associate-skill.component';

describe('AddAssociateSkillComponent', () => {
  let component: AddAssociateSkillComponent;
  let fixture: ComponentFixture<AddAssociateSkillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAssociateSkillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAssociateSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
