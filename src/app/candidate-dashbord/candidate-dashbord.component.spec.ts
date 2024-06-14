import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateDashbordComponent } from './candidate-dashbord.component';

describe('CandidateDashbordComponent', () => {
  let component: CandidateDashbordComponent;
  let fixture: ComponentFixture<CandidateDashbordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CandidateDashbordComponent]
    });
    fixture = TestBed.createComponent(CandidateDashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
