import { Component, NgModule, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule, Routes } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms'


@Component({
  selector: 'app-candate-evaluation',
  templateUrl: './candate-evaluation.component.html',
  styleUrls: ['./candate-evaluation.component.css']
})
export class CandateEvaluationComponent {
constructor(private ce: FormBuilder,private serviceService: ServiceService,private router: Router){}
OverallEavulationone : any
OverallEavulationtwo : any
selectedRating: number | undefined;
interviewResult: number | undefined;
name : string | null = null
preview : boolean = false;
CandateEvaluateForm :any = this.ce.group({
  candidateName : [null],
  presentDate : [null],
  InterviewerName : [null],
  CommunicationSkillone : [null],
  TechnicalKnowledgeone : [null],
  SimilarIndustryExperienceone : [null],
  AlignmentWithOurBussinessone : [null],
  Attitudeone : [null],
  Presentabilityone : [null],
  TeamPlayerone : [null],
  ProblemSolvingSkillsone : [null],
  LeaderShipone : [null],
  Innovativeone : [null],
  CommunicationSkilltwo : [null],
  TechnicalKnowledgetwo : [null],
  SimilarIndustryExperiencetwo : [null],
  AlignmentWithOurBussinesstwo : [null],
  Attitudetwo : [null],
  Presentabilitytwo : [null],
  TeamPlayertwo : [null],
  ProblemSolvingSkillstwo : [null],
  LeaderShiptwo : [null],
  Innovativetwo : [null],
  OverallEvaluation : [0],
  AreaOfImprovement : [null],
  feedbackObservation : [null],
  Rating : [null],
  CandidateStatues : [null],
  signature : [null],
  date : [null]
})
ratingfunction()
{
  this.preview = true;
  this.selectedRating = this.CandateEvaluateForm.value.Rating;
  this.interviewResult = this.CandateEvaluateForm.value.CandidateStatues;
}
editfuction()
{
  debugger;
  this.preview = false;
}
CalculationOne()
{
  this.OverallEavulationone = this.CandateEvaluateForm?.get('CommunicationSkillone')?.value + this.CandateEvaluateForm?.get('TechnicalKnowledgeone')?.value + this.CandateEvaluateForm?.get('SimilarIndustryExperienceone')?.value + this.CandateEvaluateForm?.get('AlignmentWithOurBussinessone')?.value +this.CandateEvaluateForm?.get('Attitudeone')?.value + this.CandateEvaluateForm?.get('Presentabilityone')?.value + this.CandateEvaluateForm?.get('TeamPlayerone')?.value + this.CandateEvaluateForm?.get('ProblemSolvingSkillsone')?.value + this.CandateEvaluateForm?.get('LeaderShipone')?.value + this.CandateEvaluateForm?.get('Innovativeone')?.value 
}
CalculationTwo()
{
  this.OverallEavulationtwo = this.CandateEvaluateForm?.get('CommunicationSkilltwo')?.value + this.CandateEvaluateForm?.get('TechnicalKnowledgetwo')?.value + this.CandateEvaluateForm?.get('SimilarIndustryExperiencetwo')?.value + this.CandateEvaluateForm?.get('AlignmentWithOurBussinesstwo')?.value +this.CandateEvaluateForm?.get('Attitudetwo')?.value + this.CandateEvaluateForm?.get('Presentabilitytwo')?.value + this.CandateEvaluateForm?.get('TeamPlayertwo')?.value + this.CandateEvaluateForm?.get('ProblemSolvingSkillstwo')?.value + this.CandateEvaluateForm?.get('LeaderShiptwo')?.value + this.CandateEvaluateForm?.get('Innovativetwo')?.value 
}
CandateEveluationsumbmit()
{
  debugger
  console.log(this.CandateEvaluateForm.value)
  this.serviceService.CandidateEvalutionForm(this.CandateEvaluateForm.value)
  .subscribe((res) => {
console.log(res)
  })
  this.navigateToSecondComponent();
}
navigateToSecondComponent(): void {
  debugger

  this.router.navigate(['/candidate-evaluation-preview', this.CandateEvaluateForm.value.candidateName]);
 
}

}
