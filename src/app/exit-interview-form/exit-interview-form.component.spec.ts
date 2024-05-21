import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExitInterviewFormComponent } from './exit-interview-form.component';

describe('ExitInterviewFormComponent', () => {
  let component: ExitInterviewFormComponent;
  let fixture: ComponentFixture<ExitInterviewFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExitInterviewFormComponent]
    });
    fixture = TestBed.createComponent(ExitInterviewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
