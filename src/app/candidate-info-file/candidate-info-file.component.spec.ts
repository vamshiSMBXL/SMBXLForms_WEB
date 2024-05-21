import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateInfoFileComponent } from './candidate-info-file.component';

describe('CandidateInfoFileComponent', () => {
  let component: CandidateInfoFileComponent;
  let fixture: ComponentFixture<CandidateInfoFileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CandidateInfoFileComponent]
    });
    fixture = TestBed.createComponent(CandidateInfoFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
