import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SignUp } from '../Model/signup/sign-up.Model';
import { login } from '../Model/login/login.Model';
import { Postjob } from '../Model/postjob/postjob.Model';
import { VerifyCompany } from '../Model/verifycompany/verify-company.model';
import { Verifycandidate } from '../Model/verifycandidate/verifycandidate.class';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  login(login:login):Observable<any>
  {
    return this.http.post("https://localhost:7086/api/UserAuthentication/LogIn",login);

  }
 
  signup(signup:SignUp):Observable<any>
  {
    return this.http.post("Https://localhost:7086/api/SignUp/Register",signup);

  }

  postjob(postjob:Postjob):Observable<any>{
    return this.http.post("https://localhost:7086/api/JobPosting",postjob,{responseType:'json'})
  }

  verifycompany(verifycompany:VerifyCompany):Observable<any>
  {return this.http.post("https://localhost:7086/api/JobPosting",verifycompany,{responseType:'json'})}

  verifyCandidate(verifycandidate:Verifycandidate):Observable<any>
  {return this.http.post("https://localhost:7086/api/JobPosting",verifycandidate,{responseType:'json'})}

}


