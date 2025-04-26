import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../Services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-candidate',
  standalone:true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './verify-candidate.component.html',
  styleUrl: './verify-candidate.component.css'
})
export class VerifyCandidateComponent {
  verifyCandidateForm: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService, private router: Router) {
    this.verifyCandidateForm = this.fb.group({
      CandidateName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/)]], // Only letters and spaces
      CandidateEmail: ['', [Validators.required, Validators.email]],
      CandidateResume: ['', Validators.required],
      LinkedInProfile: ['', [Validators.required, Validators.pattern(/^(https?:\/\/)?(www\.)?linkedin\.com\/in\/[A-z0-9_-]+\/?$/)]], // Valid LinkedIn URL
    });
  }

  verifyCandidate() {
    if (this.verifyCandidateForm.invalid) {
      this.verifyCandidateForm.markAllAsTouched();
      return;
    }

    const candidateData = this.verifyCandidateForm.value;

    this.apiService.verifyCandidate(candidateData).subscribe({
      next: () => {
        alert('Candidate verified successfully!');
        this.router.navigateByUrl('/dashboard'); // Redirect to appropriate route
      },
      error: (err) => {
        console.error('Candidate verification failed:', err);
        alert('Failed to verify candidate. Please try again.');
      }
    });
  }
}