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

    return this.http.get<any>(`${this.serveiceurl}/CandidateEvalutionFormPreview?name=${name.toString()}`);
  }
  uploadPhoto(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post<any>(this.serveiceurl, formData);
  }
  getallcollagesData():Observable<any>
  {debugger
    return this.http.get<any>(this.serveiceurl+'/GetCollageList');
  }
  getAllCandidateInfo():Observable<any>
  {
    debugger
    return this.http.get<any>(this.serveiceurl+'/GetAllCandidateData');
  }
  getallpositionlist():Observable<any>
  {
    debugger;
    return this.http.get<any>(this.serveiceurl+'/GetAllPositions');
  }
  getallinterviewerlist()
  {
    return this.http.get<any>(this.serveiceurl+'/Interviewerlist');
  }
  getAlldegreeList():Observable<any>
  {
    debugger
    return this.http.get<any>(this.serveiceurl+'/DegreeList');
  }
  getAlldegreespecializationlist() :Observable<any>
  {
    debugger
    return this.http.get<any>(this.serveiceurl+'/DegreeSpecializationList');
  }
  getAllStatesList() : Observable<any>
  {
    return this.http.get<any>(this.serveiceurl+'/ListOfstate');
  }
  getAllcitysandstates() : Observable<any>
  {
    debugger
    return this.http.get<any>(this.serveiceurl+'/ListofCitysandStates');
  }
}
