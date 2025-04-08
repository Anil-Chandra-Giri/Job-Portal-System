import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { login } from '../Model/login.Model';
import { SignUp } from '../Model/sign-up.Model';

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
}

