import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoiningfileComponent } from './joiningfile.component';

describe('JoiningfileComponent', () => {
  let component: JoiningfileComponent;
  let fixture: ComponentFixture<JoiningfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JoiningfileComponent]
    });
    fixture = TestBed.createComponent(JoiningfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
