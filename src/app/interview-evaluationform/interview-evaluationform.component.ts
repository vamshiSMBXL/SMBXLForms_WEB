import { Component, NgModule, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ServiceService } from 'src/app/Service/service.service';
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms'
import { Observable, forkJoin } from 'rxjs';

@Component({
  selector: 'app-interview-evaluationform',
  templateUrl: './interview-evaluationform.component.html',
  styleUrls: ['./interview-evaluationform.component.css']
})
export class InterviewEvaluationformComponent implements OnInit {
  constructor(private Ie: FormBuilder, private serviceService: ServiceService) { }

  preview: boolean = false;
  InterviewEvaluation = this.Ie.group({
    date: [],
    statues: [],
    interViewBy: [],
    candidateName: [null],
    interviewer: [null],
    position: [null],
    department: [null],
    totalWorkExperience: [null],
    relevantExperience: [null],
    academicQualifications: [null],
    coursesAndCertifications: [null],
    traniningAndInternship: [null],
    techinalRating: [null],
    personalAccomplishments: [null],
    overallImpression: [null],
    overallEvaluationAndComment: ["helloworld"],
    intervieweeAnswers: this.Ie.array([
      //   this.Ie.group({
      //     empCode: [null], // Add empCode
      //     candidateId: [null],
      //     questionId: [null], // Add questionId
      //     answerId: [0], // Add answerId
      //     answerName: [null], // Add answerName
      //     isActive: [true], // Add isActive
      //     comments: [null], // Add comments
      //     ecType: [null], // Add ecType
      //     createdDate: [null], // Add createdDate
      //     updatedDate: [null]
      //   })
    ])
  })

  get intervieweeAnswers(): FormArray {
    return this.InterviewEvaluation.get('intervieweeAnswers') as FormArray;
  }

  addIntervieweeAnswer(answer: any) {
    const answerGroup = this.Ie.group({
      empCode: [answer.empCode || null],
      candidateId: [answer.candidateId || null],
      questionId: [answer.questionId || null],
      answerId: [answer.answerId || null],
      answerName: [answer.answerName || null],
      isActive: [answer.isActive || true],
      comments: [answer.comments || null],
      ecType: [answer.ecType || null],
      createdDate: [answer.createdDate || null],
      updatedDate: [answer.updatedDate || null],
      formId: [answer.formID || 5]
    });

    this.intervieweeAnswers.push(answerGroup);
  }
  // submitInterviewEvaluationform()
  // {
  //   this.serviceService.InterviewEvaluationForm(this.InterviewEvaluation)
  //   .subscribe((res) => {

  //   })
  questionObject: any[] = [];
  communicationAvg: any[] = [];
  CulturalBehavioralFit: any[] = [];
  LeadershipAvg: any[] = [];
  commFinalTotal: any;
  culterFinalTotal: any;
  leaderFinalTotal: any;
  answervalue: any;
  Status:any;
  ngOnInit(): void {
    // this.getanswerpreview(1039);
    // let data = this.questionObject.filter(item => item.questionId == 1039);

  }


  onQuestionChanges(): void {
    const questionGroup = this.InterviewEvaluation.get('intervieweeAnswers') as FormGroup;
    questionGroup.valueChanges.subscribe(val => {
      // this.updateAnswersArray(val);
    });
  }



  getAnswerValues(questionId: number, value: any) {
    const index = this.questionObject.findIndex(item => (item as any).questionId === questionId);
    if (index > -1) {
      this.questionObject[index].answerName = value;
    } else {
      let data = {
        empCode: "", // Add empCode
        candidateId: "",
        questionId: questionId, // Add questionId
        answerId: "", // Add answerId
        answerName: value, // Add answerName
        isActive: true, // Add isActive
        comments: "", // Add comments
        ecType: "", // Add ecType
        createdDate: "", // Add createdDate
        updatedDate: "",
        formId: 5
      }

      this.questionObject.push(data);
    }
  }
  submitInterviewEvaluationform() {
    debugger
    this.questionObject.forEach(answer => {
      this.addIntervieweeAnswer(answer);
    });

    console.log(this.InterviewEvaluation.value);
    // Get the nested form group
    this.serviceService.InterviewEvaluationForm(this.InterviewEvaluation?.value)
      .subscribe((res) => {

      })
  }

  CandidateAnswersApi() {
    this.serviceService.CandidateResponce(this.questionObject)
      .subscribe((res => {

      }))
  }

  AverageScoreofCommunicatioskills(questionId: number, value: any) {
    const index = this.communicationAvg.findIndex(item => (item as any).questionId === questionId);
    if (index > -1) {
      this.communicationAvg[index].answerName = value;
    } else {
      let data = {
        questionId: questionId, // Add questionId
        answerName: value, // Add answerName
      }

      this.communicationAvg.push(data);
    }
  }
  AverageCulturalOrBehavioralFit(questionId: number, value: any) {
    const index = this.CulturalBehavioralFit.findIndex(item => (item as any).questionId === questionId);
    if (index > -1) {
      this.CulturalBehavioralFit[index].answerName = value;
    } else {
      let data = {
        questionId: questionId, // Add questionId
        answerName: value // Add answerName
      }

      this.CulturalBehavioralFit.push(data);
    }
  }
  AvgLeadership(questionId: number, value: any) {
    const index = this.LeadershipAvg.findIndex(item => (item as any).questionId === questionId);
    if (index > -1) {
      this.LeadershipAvg[index].answerName = value;
    } else {
      let data = {
        questionId: questionId, // Add questionId
        answerName: value, // Add answerName
      }

      this.LeadershipAvg.push(data);
    }
  }
  AverageTotalcommunication(array: any[]) {
    debugger
    let total = 0;
    for (let i = 0; i < array.length; i++) {
      const item = array[i];
      total = total +  Number(item.answerName);
    }
    this.commFinalTotal =(total) / (array.length);
    return this.commFinalTotal
  }
  AverageTotalCulturalBehavioralFit(array: any[]) {
    debugger
    let total = 0;
    for (let i = 0; i < array.length; i++) {
      const item = array[i];
      total = total +  Number(item.answerName);
    }
    this.culterFinalTotal =(total) / (array.length);
    return this.culterFinalTotal
  }
  AverageTotalleadership(array: any[]) {
    debugger
    let total = 0;
    for (let i = 0; i < array.length; i++) {
      const item = array[i];
      total = total +  Number(item.answerName);
    }
    this.leaderFinalTotal =(total) / (array.length);
    return this.leaderFinalTotal
  }

  getanswerpreview(questionid: any) {
    debugger;
    let answerdata = this.questionObject.filter(item => (item as any).questionId === questionid);
    return answerdata[0].answerName
  }
  previewfunction() {
    debugger
    this.preview = true;
    this.Status = this.InterviewEvaluation?.value?.statues;

  }
  editfuction()
{
  debugger;
  this.preview = false;
}
}

