import { AfterViewInit, Component, NgModule, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ServiceService } from 'src/app/Service/service.service';
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-candidate-info-file',
  templateUrl: './candidate-info-file.component.html',
  styleUrls: ['./candidate-info-file.component.css']
})
export class CandidateInfoFileComponent implements OnInit{
  formBuilder: any;
  Formarraydata:FormGroup | undefined;
  Formarray:FormArray | undefined;
  CandidateInfo: FormGroup | undefined;
  constructor(private fb: FormBuilder,private serviceService: ServiceService) {}
  @NgModule({
    imports: [
      // Other imports...
      FormsModule
    ],
    // Other module properties...
  })
  ngOnInit()
  {
    this.CandidateInfo = this.fb.group({
      date : [null],
      positionAppliedFor : [null],
      referredBy : [null],
      name : [null],
      dateOfBirth : [null],
      completeAddress : [null],
      mobileNumber : [null],
      emailId : [null],
      martalStatus : [null],
      reasons : [null],
      noticePeriod : [null],
      expectedCTC : [null],
      declarationDate : [null],
      declarationSignature : [null],
      educationDetails: this.fb.array([this.fb.group({
        degree: [null],
        specialization: [null],
        collageOrUniversity: [null],
        yearOfPassing: [null],
        percentage: [null]
      })]),
      familyDetails: this.fb.array([this.fb.group({
        name : [null],
        relationShip : [null],
        dateOfBirth : [null],
        occupation : [null]
      })]),
      professionalReferenceData: this.fb.array([this.fb.group({
        name:[null],
        organisation : [null],
        designation : [null],
        contactNo : [null],
        emailId : [null]
      })]),
      employmentDetailsData : this.fb.array([this.fb.group({
        years:["2"],
        months:["7"],
        organizations:[null],
        designation:[null],
        from:[null],
        to:[null],
        annualCTC:[null],
        reasonForLeaving : [null]
      })])
    });
    this.Formarraydata = this.fb.group({
      Formarray: this.fb.array([]) // Initialize Formarraydata with an empty FormArray
    });
  }
  educationDetails=() => 
    this.CandidateInfo?.get('educationDetails') as FormArray
   
   
   addEducationDetail() {
     debugger
        const details = this.educationDetails();
        if(details)
         {
           details.push(this.fb.group({
             degree: [null],
             specialization: [null],
             collageOrUniversity: [null],
             yearOfPassing: [null],
             percentage: [null]
           }))
         }
   }
   familyDetails=() =>
     this.CandidateInfo?.get('familyDetails') as FormArray
   
   addfamilyDetails()
   {
     debugger
     const familydata = this.familyDetails();
     if(familydata)
       {
         familydata.push(this.fb.group({
           name : [null],
           relationShip : [null],
           dateOfBirth : [null],
           occupation : [null]
         }))
       }
   }
   professionalReferenceData=() => 
     this.CandidateInfo?.get('professionalReferenceData') as FormArray
   
   addprofessionalReferenceData(){
     const professionalreferencedata = this.professionalReferenceData();
     if(professionalreferencedata)
       {
         professionalreferencedata.push(this.fb.group({
           name:[null],
           organisation : [null],
           designation : [null],
           contactNo : [null],
           emailId : [null]
         }))
       }
   }
   
   employmentDetailsData=()=>
     this.CandidateInfo?.get('employmentDetailsData') as FormArray
   
   addemploymentDetails(){
     debugger
     const employementdata = this.employmentDetailsData();
     if(employementdata)
       {
         employementdata.push(this.fb.group({
           years:["3"],
           months:["7"],
           organizations:[null],
           designation:[null],
           from:[null],
           to:[null],
           annualCTC:[null],
           reasonForLeaving : [null]
         }))
       }
   }



  submitCandidateInfoForm()
  {
    debugger
    this.serviceService.CandidateInfoForm(this.CandidateInfo?.value)
    .subscribe((res) =>{
      
    })
  }
}
