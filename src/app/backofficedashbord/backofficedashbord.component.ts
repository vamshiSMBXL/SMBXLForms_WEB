import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Service/service.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-backofficedashbord',
  templateUrl: './backofficedashbord.component.html',
  styleUrls: ['./backofficedashbord.component.css']
})
export class BackofficedashbordComponent implements OnInit{
  constructor(private ce: FormBuilder,private serviceService: ServiceService,private router: Router){}
  allCandidatesInfo: any[] = [];
  selectedCandidate: any | null = null;
  searchTermData: string = '';
  interviewEmail: any[] = [];
  selectedEmails: any[] = [];
  ngOnInit(): void {
    this.getCandidatedetails();
    this.getinterviewer();
  }

getCandidatedetails()
{
  debugger
  this.serviceService.getAllCandidateInfo()
  .subscribe((res => {
    console.log(res);
    res.forEach((element : any) =>
    {
      this.allCandidatesInfo.push(element);
    })
  })
)
}
getinterviewer()
{
  debugger
  this.serviceService.getallinterviewerlist()
  .subscribe((res) => {
    res.forEach((element : any) =>
    {
      this.interviewEmail.push(element);
    })
  })
  console.log(this.interviewEmail);
}
selectCandidate(candidate: any) {
  debugger
  this.selectedCandidate = candidate;
}
clearSelection() {
  this.selectedCandidate = null;
}
  addEmail(event: Event): void {
    debugger
    const input = event.target as HTMLInputElement;
    const email = input.value.trim();
    if (email && !this.selectedEmails.includes(email)) {
      this.selectedEmails.push(email);
      this.searchTermData = '';
    }
    input.value = '';
  } 

  removeEmail(email: string): void {
    this.selectedEmails = this.selectedEmails.filter(e => e !== email);
  }

  getFilteredEmails(): { emailId: string }[] {
    debugger
    return this.interviewEmail.filter(email => !this.selectedEmails.includes(email.emailId));
  }
}

