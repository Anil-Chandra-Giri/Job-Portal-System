import { Component } from '@angular/core';
import { SignUp } from '../../Model/sign-up.Model';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../Services/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  signupdetails : SignUp = new SignUp();
  ConfirmPassword: string="";
  constructor(private apicallservice:ApiService,private router:Router)
  {}
  signup()
  {
    if (this.signupdetails.Password !== this.ConfirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    this.apicallservice.signup(this.signupdetails).subscribe(
      res => {
      alert('Signup successful');
      this.router.navigate(['log-in']);
    },   err => {
      console.error('Signup failed:', err);  // Log the error for debugging
      if (err.status === 400) {
        alert('Invalid data. Please check your input.');
      } else if (err.status === 500) {
        alert('Server error. Please try again later.');
      } else {
        alert('Signup failed. Please try again.');
      }
    });
    
  }

}
