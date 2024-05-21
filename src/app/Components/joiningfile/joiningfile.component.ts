import { Component, NgModule, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ServiceService } from 'src/app/Service/service.service';
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-joiningfile',
  templateUrl: './joiningfile.component.html',
  styleUrls: ['./joiningfile.component.css'],  
})
export class JoiningfileComponent implements OnInit{
  formBuilder: any;
  Formarraydata:FormGroup | undefined;
  Formarray:FormArray | undefined;
  joingform: FormGroup | undefined;
  constructor(private fb: FormBuilder,private serviceService: ServiceService) {}

  // ngOnInit(): void {
  //   this.Formarraydata = this.formBuilder.group({
  //     Formarray: this.formBuilder.array([this.joingform.controls['EducationDetails']])
  //   });
  // }
  @NgModule({
    imports: [
      // Other imports...
      FormsModule
    ],
    // Other module properties...
  })
ngOnInit()
{
  this.joingform = this.fb.group({
    empCode : [null],
    name : [null],
    fatherName : [null],
    correspondenceAddress : [null],
    permanentAddress : [null],
    mobileNumber : [null],
    emailId : [null],
    dateofbirth : [null],
    dateofjoining : [null],
    department : [null],
    designation : [null],
    bloodGroup : [null],
    maritalStatus : [null],
    gender : [null],
    age: ["23"],
    adhaarCard: [null],
    uanPf: [null],
    panCardNo: [null],
    passportFlag: [Boolean],
    passportNo: [null],
    placeOfIssue: [null],
    issuedOn: [null],
    validUpto: [null],
    emergencyContactName: [null],
    emergencyContactRelation: [null],
    contactNo: [null],
    existBank: [null],
    accountNumber: [null],
    ifsCcode: [null],
    branch: [null],
    declarationDate: [null],
    declarationPlace: [null],
    declarationSignature: [null],
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
      years:[null],
      months:[null],
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

// Education detaion List data Add Button
 educationDetails=() => 
 this.joingform?.get('educationDetails') as FormArray


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
  this.joingform?.get('familyDetails') as FormArray

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
  this.joingform?.get('professionalReferenceData') as FormArray

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
  this.joingform?.get('employmentDetailsData') as FormArray

addemploymentDetails(){
  debugger
  const employementdata = this.employmentDetailsData();
  if(employementdata)
    {
      employementdata.push(this.fb.group({
        years:[null],
        months:[null],
        organizations:[null],
        designation:[null],
        from:[null],
        to:[null],
        annualCTC:[null],
        reasonForLeaving : [null]
      }))
    }
}
  SubmitJoiningForm()
  {
    debugger
    this.serviceService.AddNewJoining(this.joingform?.value)
        .subscribe((res) => {          
        });
    // this.SubmitEducatindetails()
  }
  // SubmitEducatindetails() {
  //   debugger
  //   if (this.joingform && this.joingform.controls) {
  //     const educationDetailsControl = this.joingform.controls['educationDetails'].value;
  //     if (educationDetailsControl) {
  //       this.serviceService.EducationDetails(educationDetailsControl)
  //         .subscribe((res) => {
  //           // Handle response if needed
  //         });
  //     } else {
  //       console.error('EducationDetails control is not found.');
  //     }
  //   } else {
  //     console.error('joingform or its controls are not initialized properly.');
  //   }
  // }





togglePassportFields() {
  debugger
  var selectedPassportOption = document.querySelector('input[name="passportOption"]:checked') as HTMLInputElement;
  var passportDetailsLabel = document.getElementById('passportDetailsLabel');
  
  if (selectedPassportOption && passportDetailsLabel) {
      var passportFlag = selectedPassportOption.value;
      var passportFields = document.querySelectorAll('.passport-fields input');

      if (passportFlag === '1') {
          passportDetailsLabel.innerText = 'Yes, update details below';
          passportFields.forEach(function(field) {
              (field as HTMLInputElement).disabled = false;
          });
      } else {
          passportDetailsLabel.innerText = 'No, update details below';
          passportFields.forEach(function(field) {
              (field as HTMLInputElement).disabled = true;
          });
      }
  }
}


}
