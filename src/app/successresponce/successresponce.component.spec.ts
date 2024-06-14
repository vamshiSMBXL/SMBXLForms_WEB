import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessresponceComponent } from './successresponce.component';

describe('SuccessresponceComponent', () => {
  let component: SuccessresponceComponent;
  let fixture: ComponentFixture<SuccessresponceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuccessresponceComponent]
    });
    fixture = TestBed.createComponent(SuccessresponceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
