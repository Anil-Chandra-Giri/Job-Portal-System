import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../Services/api.service';
import { Router } from '@angular/router';
import { login } from '../../Model/login.Model';

@Component({
  selector: 'app-log-in',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {
  loginDetails: login =new login();
  constructor(private apicallservice:ApiService,private router:Router)
  {}
  login()
  {
    this.apicallservice.login(this.loginDetails).subscribe(
      res=>{
        localStorage.setItem('sessionToken',res.sessionToken);
        alert("Login Successfully");
        this.router.navigateByUrl('candidate-dashboard');
      },
      err=>{
        alert("Please check username and password");
      }
    );
  }

}
