import { AfterViewInit, Component, NgModule, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, MinLengthValidator, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/Service/service.service';
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms'
import { Route, Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';


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
  preview: boolean = false;
  showPopup: boolean | undefined;
  CollageList: any[] = [];
  filteredCollageList: Observable<any[]> | undefined;
  searchTerm: string = '';
  Yearofpassing: any[] = [];
  workexperienceinyears: any[] = [];
  workexperienceinmonth: any[] = [];
  data= new Date().getFullYear();
  positionList: any[] = [];
  DegreeList: any[] = [];
  DegreeSpecializationList: any[] = [];
  filteredSpecializations: any[] = [];
  statesList: any[] = [];
  statesandcitysList: any[] = [];
  constructor(private fb: FormBuilder,private serviceService: ServiceService,private router: Router) {}
  @NgModule({
    imports: [
      // Other imports...
      FormsModule
    ],
    // Other module properties...
  })
  allowedDomains = [
    'gmail.com', 
    'yahoo.com', 
    'hotmail.com', 
    'outlook.com', 
    'icloud.com', 
    'aol.com', 
    'example.com', 
    'organization.org', 
    'company.com',
    'edu.com', // Educational domains
    'gov.com', // Government domains
    'mil.com' // Military domains
  ]; 

  onOptionsSelected(event:any)
  {
    debugger;
    const selectedDegree = event.target.value;
    this.filteredSpecializations = this.DegreeSpecializationList.filter(degree => degree.degreeId === +selectedDegree);
  }

  ngOnInit()
  {
    this.CandidateInfo = this.fb.group({
      date : [null,Validators.required,Validators.required],
      positionAppliedFor : [null,Validators.required],
      referredBy : [null,Validators.required],
      name : [null,Validators.required,Validators.minLength(2),Validators.maxLength(150)],
      dateOfBirth : [null,Validators.required],
      completeAddress : [null,Validators.required,Validators.minLength(10)],
      mobileNumber : ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      emailId : ['',[Validators.required,Validators.email,this.emailDomainValidator(this.allowedDomains)]],
      martalStatus : [null,Validators.required],
      reasons : [null],
      noticePeriod : [null],
      expectedCTC : [null],
      declarationDate : [null],
      declarationSignature : [null],
      years: [null],
      month: [null],
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
    this.getallPositionlistdata();
    this.getallstatesdata();
    this.getallstatesandcitydata();
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
    this.CandidateInfo?.controls['employmentDetailsData'].value.years    
    this.serviceService.CandidateInfoForm(this.CandidateInfo?.value)
    .subscribe((res) =>{
      if(res === true)
        {
          this.showPopup = true;
        }
    })
  }

  userEducationDetails : any;
  previewbutton()
  {
    debugger;
    this.preview =true;
    this.userEducationDetails = this.CandidateInfo?.value.educationDetails;
  }
  EditButton()
  {
    this.preview = false;
  }
  closePopup()
  {
    this.showPopup = false;
    this.navigateToComponent();
  }
  navigateToComponent(): void {
    this.router.navigate(['/CandidateInfoFile']);
  }
  circles = [1, 2, 3, 4, 5];
  names = ['Personal','Education','Family','Work','Other Details']
  currentStep = 1;
 
  get progressWidth(): number {
    return ((this.currentStep - 1) / (this.circles.length - 1)) * 100;
  }
  emailDomainValidator(domains: string[]): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      const email = control.value;
      if (email) {
        const domain = email.substring(email.lastIndexOf('@') + 1);
        if (!domains.includes(domain)) {
          return { 'invalidDomain': true };
        }
      }
      return null;
    };
  }
  updateSteps(action: string): void {
    debugger
    if (action === 'next' && this.currentStep < this.circles.length) {
      this.currentStep++;
    } else if (action === 'prev' && this.currentStep > 1) {
      this.currentStep--;
    }
     if(this.currentStep === 2)
      {
        if(this.DegreeList.length === 0)
          {
            debugger
            this.getalldegreeListsdata();
          }
        if(this.CollageList.length === 0)
          {
            this.CollageListdate();
          }
        if(this.Yearofpassing.length === 0)
          {
            for(let i=1;i<80;i++)
              {
                this.Yearofpassing.push(this.data - i)
              }
          }
      }
    if(this.currentStep === 3)
      {
        if(this.workexperienceinyears.length === 0)
          {
            for(let i=0; i<51;i++)
              {
                this.workexperienceinyears.push(i);
              }
          }
          if(this.workexperienceinmonth.length === 0)
            {
              for(let i=1;i<13;i++)
                {
                  this.workexperienceinmonth.push(i);
                }
            }
      }
  }
  nextStep(): void {
    if (this.CandidateInfo?.valid) {
      this.updateSteps('next');
    } else {
      this.CandidateInfo?.markAllAsTouched(); // Mark all controls as touched to show validation errors
    }
  }
  // isInvalid(fieldName: string): boolean {
  //   const control = this.emailForm.get(fieldName);
  //   return control && control.invalid && (control.dirty || control.touched);
  // }
  isInvalid(controlName: string): boolean {
    const control = this.CandidateInfo?.get(controlName);
    return !!control && control.invalid && (control.dirty || control.touched);
  }

  validateAndProceed() {
    if (this.CandidateInfo?.valid) {
      this.currentStep++;
    } else {
      this.CandidateInfo?.markAllAsTouched();  // Mark all fields as touched to trigger validation messages
    }
  }

  //collage List data
  CollageListdate()
  {
    debugger
    this.serviceService.getallcollagesData()
    .subscribe((res) =>
    {
      console.log(res);
      res.forEach((elementdata: any) => {
        this.CollageList.push(elementdata);
      });
      // console.log(this.CollageList);
    })
  }

  // Position To Applyed.
 getallPositionlistdata()
 {
  debugger
  this.serviceService.getallpositionlist()
  .subscribe((res) =>
{
  res.forEach((elementdata:any) => {
    this.positionList.push(elementdata);
  })
})
 }
 getalldegreeListsdata()
 {
  debugger
    this.serviceService.getAlldegreeList()
    .subscribe((res) => {
      res.forEach((element : any ) =>{
        this.DegreeList.push(element);
      })
      console.log(this.DegreeList);
    })

    this.serviceService.getAlldegreespecializationlist()
    .subscribe((res) => {
      res.forEach((element : any) => {
        this.DegreeSpecializationList.push(element);
      })
      console.log(this.DegreeSpecializationList);
    })
 }
 getallstatesdata()
 {
  this.serviceService.getAllStatesList()
  .subscribe((res)=>{
    res.forEach((element : any) => {
      this.statesList.push(element);
    })
    console.log(this.statesList)
  }
  )
 }
 getallstatesandcitydata()
 {
  debugger;
  this.serviceService.getAllcitysandstates()
  .subscribe((res) => {
    res.forEach((element : any) => {
      this.statesandcitysList.push(element);
    })
    console.log(this.statesandcitysList);
  })
 }
}
