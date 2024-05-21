import { Component, NgModule, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ServiceService } from 'src/app/Service/service.service';
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-candate-evaluation-preview',
  templateUrl: './candate-evaluation-preview.component.html',
  styleUrls: ['./candate-evaluation-preview.component.css']
})
export class CandateEvaluationPreviewComponent implements OnInit{
data: any;
name!: string;
param: string | null = null;
selectedRating: number | undefined;
interviewResult: number | undefined;
param1 : string  | undefined
constructor(private cep: FormBuilder,private serviceservice: ServiceService,private route:ActivatedRoute){}
ngOnInit(): void {
  debugger
  this.param = this.route.snapshot.paramMap.get('param');
  const paramStr = this.param ? this.param : '';
  this.serviceservice.getCandidateEvaluationPreview(paramStr).subscribe(
    response => {
      this.data = response;
      this.selectedRating = this.data.rating
      this.interviewResult = this.data.candidateStatues
      console.log(this.data);
    },
    error => {
      console.error('Error fetching data:', error);
    }
  );
}
}
