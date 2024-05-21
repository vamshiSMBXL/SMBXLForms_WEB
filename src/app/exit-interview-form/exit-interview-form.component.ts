import { Component, NgModule, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ServiceService } from 'src/app/Service/service.service';
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms'
import { Observable, forkJoin } from 'rxjs';

@Component({
  selector: 'app-exit-interview-form',
  templateUrl: './exit-interview-form.component.html',
  styleUrls: ['./exit-interview-form.component.css']
})
export class ExitInterviewFormComponent {
constructor(private ei: FormBuilder,private servicservice:ServiceService){}
preview : boolean | undefined;
typeofWorkperformeddata : any;
fairnessofworkloaddata : any;
salarydata : any;
workingConditionsdata:any;
toolsandequipmentdata:any;
trainingreciveddata:any;
coworkersdata:any;
supervisionreceiveddata:any;
levelofinputindecisionsdata:any;
typeofworkdata : any;
workingconditionsdata : any;
paydata:any;
managemendata:any;
locationdata:any;
commutedata:any;
gaveusableperformancedata:any;
recognizedaccomplishmentdata:any;
clearlycommunicationdata:any;
treatedyoufairlyrespectfullydata:any;
coachedtraineddevelopeddata:any;
providedleadershipdata:any;
encouragedteamworkdata:any;
resolvedconcernspromptydata:any;
listenedtosuggestionddata:any;
Keptemployeesinformeddata:any;
supportedworklifebalancedata:any;
providedappropriatechallengingdata:any;

ExitInterview=this.ei.group({
  name:[null],
  employeeCode:[null],
  designation:[null],
  startDateWithOrganization:[null],
  dateOfResignation:[null],
  separationDate:[null],
  totalLengthOfService:[null],
  formFillDate:[null],
  signature:[null],
  employeeAnswerList:this.ei.array([

  ])
})
questionObject:any[]=[];
get employeeAnswerList(): FormArray{
  return this.ExitInterview.get('employeeAnswerList') as FormArray;
}
addExitInterviewData(responceData:any)
{
  const responceDataGroup = this.ei.group({
    empCode: [responceData.empCode || null],
    candidateId: [responceData.candidateId || null],
    questionId: [responceData.questionId || null],
    answerId: [responceData.answerId || null],
    answerName: [responceData.answerName || null],
    isActive: [responceData.isActive || true],
    comments: [responceData.comments || null],
    ecType: [responceData.ecType || null],
    createdDate: [responceData.createdDate || null],
    updatedDate: [responceData.updatedDate || null],
    formId: [responceData.formID || 2]
  })
  this.employeeAnswerList.push(responceDataGroup);
}

exitformgetAnswerValues(questionId:number,value:any){
  debugger
  const index = this.questionObject.findIndex(item => (item as any).questionId === questionId);
  if(index>-1){
    this.questionObject[index].answerName = value;
  }else{
    let data ={
      empCode: "", // Add empCode
      candidateId: "",
      questionId: questionId, // Add questionId
      answerId: 0, // Add answerId
      answerName: value, // Add answerName
      isActive: true, // Add isActive
      comments: "", // Add comments
      ecType: "", // Add ecType
      createdDate: "", // Add createdDate
      updatedDate: "",
      formId:5
    }

    this.questionObject.push(data); 
  } 
}
submitExitinterviewform()
{
  debugger
  this.questionObject.forEach(answer => {
    this.addExitInterviewData(answer);
  })
  console.log(this.ExitInterview.value);
  this.servicservice.Exitinterviewform(this.ExitInterview.value)
  .subscribe((res)=>
  {
    
  })
}
getanswerpreview(questionid: any) {
  debugger;
  let answerdata = this.questionObject.filter(item => (item as any).questionId === questionid);
  return answerdata[0].answerName
}
previewfunction() {
  debugger
  this.preview = true;
  this.typeofWorkperformeddata=this.getanswerpreview(1001);
  this.fairnessofworkloaddata = this.getanswerpreview(1002);
  this.salarydata=this.getanswerpreview(1003);
  this.workingConditionsdata=this.getanswerpreview(1004);
  this.toolsandequipmentdata=this.getanswerpreview(1005);
  this.trainingreciveddata = this.getanswerpreview(1006);
  this.coworkersdata = this.getanswerpreview(1007);
  this.supervisionreceiveddata = this.getanswerpreview(1008);
  this.levelofinputindecisionsdata =this.getanswerpreview(1009);
  this.typeofworkdata = this.getanswerpreview(1010);
  this.workingconditionsdata = this.getanswerpreview(1011);
  this.paydata = this.getanswerpreview(1012);
  this.managemendata = this.getanswerpreview(1013);
  this.locationdata = this.getanswerpreview(1014);
  this.commutedata = this.getanswerpreview(1015);
  this.gaveusableperformancedata = this.getanswerpreview(1016);
  this.recognizedaccomplishmentdata = this.getanswerpreview(1017);
  this.clearlycommunicationdata = this.getanswerpreview(1018);
  this.treatedyoufairlyrespectfullydata = this.getanswerpreview(1019);
  this.coachedtraineddevelopeddata = this.getanswerpreview(1020);
  this.providedleadershipdata = this.getanswerpreview(1021);
  this.encouragedteamworkdata = this.getanswerpreview(1022);
  this.resolvedconcernspromptydata = this.getanswerpreview(1023);
  this.listenedtosuggestionddata = this.getanswerpreview(1024);
  this.Keptemployeesinformeddata = this.getanswerpreview(1025);
  this.supportedworklifebalancedata = this.getanswerpreview(1079);
  this.providedappropriatechallengingdata = this.getanswerpreview(1026);
}
editfuction()
{
  debugger;
  this.preview = false;
}
}
