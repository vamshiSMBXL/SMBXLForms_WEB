import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JoiningfileComponent } from './Components/joiningfile/joiningfile.component';
import { CandidateInfoFileComponent } from './candidate-info-file/candidate-info-file.component';
import { CandateEvaluationPreviewComponent } from './candate-evaluation-preview/candate-evaluation-preview.component'; 
import { CandateEvaluationComponent } from './candate-evaluation/candate-evaluation.component';

const routes: Routes = [
  { path: 'candate-evaluation', component: CandateEvaluationComponent },
  { path: 'candidate-evaluation-preview/:param', component: CandateEvaluationPreviewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}) 
export class AppRoutingModule { 
  
}
