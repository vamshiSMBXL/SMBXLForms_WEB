import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandateEvaluationComponent } from './candate-evaluation.component';

describe('CandateEvaluationComponent', () => {
  let component: CandateEvaluationComponent;
  let fixture: ComponentFixture<CandateEvaluationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CandateEvaluationComponent]
    });
    fixture = TestBed.createComponent(CandateEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
