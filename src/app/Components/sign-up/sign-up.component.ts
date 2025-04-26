import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { ApiService } from '../../Services/api.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  signUpForm: FormGroup;

  constructor(private fb: FormBuilder, private apicallservice: ApiService, private router: Router) {
    this.signUpForm = this.fb.group({
      Username: ['', [Validators.required, Validators.minLength(3)]],
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required, Validators.minLength(6)]],
      ConfirmPassword: ['', Validators.required],
      Role: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });
  }

  // Custom validator to check if passwords match
  passwordMatchValidator: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
    const password = group.get('Password')?.value;
    const confirmPassword = group.get('ConfirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  };

  signup() {
    if (this.signUpForm.invalid) {
      this.signUpForm.markAllAsTouched();
      return;
    }

    const formValue = this.signUpForm.value;
    const signupdetails = {
      Username: formValue.Username,
      Email: formValue.Email,
      Password: formValue.Password,
      Role: formValue.Role
    };

    this.apicallservice.signup(signupdetails).subscribe({
      next: () => {
        alert('Signup successful');
        this.router.navigate(['log-in']);
      },
      error: err => {
        console.error('Signup failed:', err);
        if (err.status === 400) {
          alert('Invalid data. Please check your input.');
        } else if (err.status === 500) {
          alert('Server error. Please try again later.');
        } else {
          alert('Signup failed. Please try again.');
        }
      }
    });
  }
}
