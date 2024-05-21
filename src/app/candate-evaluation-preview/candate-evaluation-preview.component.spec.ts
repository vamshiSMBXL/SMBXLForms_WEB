import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandateEvaluationPreviewComponent } from './candate-evaluation-preview.component';

describe('CandateEvaluationPreviewComponent', () => {
  let component: CandateEvaluationPreviewComponent;
  let fixture: ComponentFixture<CandateEvaluationPreviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CandateEvaluationPreviewComponent]
    });
    fixture = TestBed.createComponent(CandateEvaluationPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
