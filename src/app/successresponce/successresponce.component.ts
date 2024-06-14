import { Component, EventEmitter, Output } from '@angular/core';
import { ServiceService } from '../Service/service.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-successresponce',
  templateUrl: './successresponce.component.html',
  styleUrls: ['./successresponce.component.css']
})
export class SuccessresponceComponent {
  constructor(private sr: FormBuilder,private servicservice:ServiceService,private router: Router){}
  sucessresponcebackbutton()
  {
     this.navigateToSecondComponent();
  }
  navigateToSecondComponent(): void {
    debugger
  
    this.router.navigate(['/landingpage']);
   
  }
  @Output() closePopup = new EventEmitter<void>();

  close() {
    this.closePopup.emit();
  }
}
