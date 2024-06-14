import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JoiningfileComponent } from './Components/joiningfile/joiningfile.component';
import { CandidateInfoFileComponent } from './candidate-info-file/candidate-info-file.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CandateEvaluationComponent } from './candate-evaluation/candate-evaluation.component';
import { InterviewEvaluationformComponent } from './interview-evaluationform/interview-evaluationform.component';
import { CandateEvaluationPreviewComponent } from './candate-evaluation-preview/candate-evaluation-preview.component';
import { LandingpageComponent } from './Components/landingpage/landingpage.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { ExitInterviewFormComponent } from './exit-interview-form/exit-interview-form.component';
import { SuccessresponceComponent } from './successresponce/successresponce.component';
import { FilterPipe } from './Service/filter.pipe';
import { BackofficedashbordComponent } from './backofficedashbord/backofficedashbord.component';
import { CandidateDashbordComponent } from './candidate-dashbord/candidate-dashbord.component';
import { SortEmailsPipe } from './Service/sort-emails.pipe';


const appRoutes: Routes = [
  { path: 'joining', component: JoiningfileComponent },
  { path: 'candidateinfo', component: CandidateInfoFileComponent },
  { path:'candidateEvaluation', component: CandateEvaluationComponent},
  { path:'InterviewEvaluation', component: InterviewEvaluationformComponent},
  { path:'ExitInterview', component: ExitInterviewFormComponent},
  { path:'candidateEvaluationPreview', component: CandateEvaluationPreviewComponent},
  { path:'successresponce', component: SuccessresponceComponent},
  { path:'Landingpage', component: LandingpageComponent}
  
];
@NgModule({
  declarations: [
    AppComponent,    
    CandidateInfoFileComponent,
    JoiningfileComponent,
    CandateEvaluationComponent,
    InterviewEvaluationformComponent,
    CandateEvaluationPreviewComponent,
    LandingpageComponent,
    ExitInterviewFormComponent,
    SuccessresponceComponent,
    FilterPipe,
    BackofficedashbordComponent,
    CandidateDashbordComponent,
    SortEmailsPipe ,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  
    RouterModule.forRoot(appRoutes)
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(router: Router) {

  }
}
