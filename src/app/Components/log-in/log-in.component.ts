import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../Services/api.service';
import { Router, RouterModule } from '@angular/router';
import { jwtDecode, JwtPayload } from 'jwt-decode';
import { CommonModule } from '@angular/common';

interface CustomJwtPayload extends JwtPayload {
  role: string;
}

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [RouterModule,CommonModule, ReactiveFormsModule],  // Removed FormsModule
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  loginForm: FormGroup;

  private apicallservice = inject(ApiService);
  private router = inject(Router);

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      Username: ['', [Validators.required]],
      Password: ['', [Validators.required]],
    });
  }

  login() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    // Directly using form values from loginForm
    const { Username, Password } = this.loginForm.value;

    this.apicallservice.login({ Username, Password }).subscribe(
      res => {
        if (res.token) {
          localStorage.setItem('jwtToken', res.token);
          console.log(localStorage);
          const role = this.getRoleFromToken();
          console.log(role);

          if (role === 'Employer') {
            this.router.navigateByUrl('company-dashboard');
          } else if (role === 'Candidate') {
            this.router.navigateByUrl('candidate-dashboard');
          }

          alert('Login Successful');
        } else {
          alert('Unexpected server response');
        }
      },
      err => {
        alert('Please check your username and password.');
      }
    );
  }

  getRoleFromToken(): string {
    const token = localStorage.getItem('jwtToken');
    if (!token) {
      this.router.navigateByUrl('login');
      return '';
    }
  
    try {
      const decodedToken: any = jwtDecode(token);
      const role = decodedToken["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
      console.log('Decoded Role:', role);
      return role;
    } catch (error) {
      console.error('Token decoding failed:', error);
      this.router.navigateByUrl('login');
      return '';
    }
  }
}
