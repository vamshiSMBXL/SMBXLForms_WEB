import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackofficedashbordComponent } from './backofficedashbord.component';

describe('BackofficedashbordComponent', () => {
  let component: BackofficedashbordComponent;
  let fixture: ComponentFixture<BackofficedashbordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackofficedashbordComponent]
    });
    fixture = TestBed.createComponent(BackofficedashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
