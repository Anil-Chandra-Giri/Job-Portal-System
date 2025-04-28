import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../Services/api.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-verify-company',
  standalone:true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './verify-company.component.html',
  styleUrl: './verify-company.component.css'
})
export class VerifyCompanyComponent {
  recruiterSignUpForm: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService, private router: Router) {
    this.recruiterSignUpForm = this.fb.group({
      CompanyName: ['', Validators.required],
      Industry: ['', Validators.required],
      CompanyWebsite: ['', Validators.required],
      CompanyLocation: ['', Validators.required],
      AboutCompany: ['', Validators.required],
      ContactPersonName: ['', Validators.required],
      ContactPhone: ['', [Validators.required]],
      LinkedIn: ['', Validators.required],
      CompanyLogoUrl: ['', Validators.required]
    });
  }

  recruiterSignUp() {
    if (this.recruiterSignUpForm.invalid) {
      this.recruiterSignUpForm.markAllAsTouched();
      return;
    }

    const formData = new FormData();
    Object.entries(this.recruiterSignUpForm.value).forEach(([key, value]) => {
      formData.append(key, value as any);
    });

    this.apiService.verifycompany(formData).subscribe({
      next: () => {
        alert('Company registered successfully!');
        this.router.navigateByUrl('/company-dashboard');
      },
      error: (err) => {
        console.error('Company registration failed:', err);
        alert('Registration failed. Please try again.');
      }
    });
  }
}
