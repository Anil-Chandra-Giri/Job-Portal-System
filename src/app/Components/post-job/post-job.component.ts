import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../Services/api.service';


@Component({
  selector: 'app-post-job',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css']
})
export class PostJobComponent {
  jobForm: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService, private router: Router) {
    this.jobForm = this.fb.group({
      JobTitle: ['', Validators.required],
      JobType: ['', Validators.required],
      Category: ['', Validators.required],
      Location: ['', Validators.required],
      WorkType: ['', Validators.required],
      Description: ['', Validators.required],
      Responsibilities: ['', Validators.required],
      Requirements: ['', Validators.required],
      SkillsRequired: ['', Validators.required],
      ExperienceRequired: ['', [Validators.required, Validators.min(0)]],
      EducationLevel: ['', Validators.required],
      SalaryRange: ['', Validators.required],
      Deadline: ['', Validators.required]
    });
  }

  postJob() {
    if (this.jobForm.invalid) {
      this.jobForm.markAllAsTouched();
      return;
    }

    const jobData = this.jobForm.value;

    this.apiService.postjob(jobData).subscribe({
      next: () => {
        alert('Job posted successfully!');
        this.router.navigateByUrl('/company-dashboard'); // or any other route
      },
      error: (err) => {
        console.error('Job post failed:', err);
        alert('Failed to post job. Please try again.');
      }
    });
  }
}
