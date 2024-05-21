import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient){


  }
  serveiceurl : any="https://localhost:7299/api/Forms"

  AddNewJoining(body:any){
    debugger
    return this.http.post(this.serveiceurl+'/AddNewJoining',body)
  }
  EducationDetails(body:any){
    debugger
    return this.http.post(this.serveiceurl+'/EducationDetails',body)
  }
  CandidateEvalutionForm(body:any)
  {
    environment.serviceURL
    this.serveiceurl
    debugger
    return this.http.post("https://localhost:7299/api/Forms/CandidateEvalutionForm",body)
  }
  CandidateInfoForm(body:any)
  {
    debugger
    return this.http.post(this.serveiceurl+'/CandidateInfo',body)
  }
  InterviewEvaluationForm(body:any)
  {
    debugger
    return this.http.post(this.serveiceurl+'/InterviewEvaluationForm',body)
  }
  CandidateResponce(body:any)
  {
    return this.http.post(this.serveiceurl+'/CandidateResponce',body)
  }
  Exitinterviewform(body:any)
  {
    debugger
    return this.http.post(this.serveiceurl+'/AddExitinterview',body)
  }
  // getcandaditeEvaluationPreview(body:any)
  // {
  //   return this.http.get(this.serveiceurl+'/CandidateEvalutionFormPreview',body);
  // }
  getCandidateEvaluationPreview(name: string): Observable<any> {
    debugger
    let httpParams = new HttpParams().set('name', name);
    console.log(httpParams);

    return this.http.get<any>(`${this.serveiceurl}/CandidateEvalutionFormPreview?name=${name.toString()}`);
  }
}
