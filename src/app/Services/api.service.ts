import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { login } from '../Model/login/login.module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  login(login:login):Observable<any>
  {
    return this.http.post("https://localhost:7204/api/UserAuthentication/LogIn",login);

  }
}
