import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewEvaluationformComponent } from './interview-evaluationform.component';

describe('InterviewEvaluationformComponent', () => {
  let component: InterviewEvaluationformComponent;
  let fixture: ComponentFixture<InterviewEvaluationformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterviewEvaluationformComponent]
    });
    fixture = TestBed.createComponent(InterviewEvaluationformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
