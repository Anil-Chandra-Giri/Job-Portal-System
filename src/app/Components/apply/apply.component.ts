import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-apply',
  standalone:true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './apply.component.html',
  styleUrl: './apply.component.css'
})
export class ApplyComponent {
  applyForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // Initialize the form with validation
    this.applyForm = this.fb.group({
      FullName: ['', Validators.required],  // Full Name is required
      Email: ['', [Validators.required, Validators.email]],  // Email is required and must be a valid email
      Phone: ['', Validators.required],  // Phone number is required
      Resume: ['', Validators.required],  // Resume file is required
      CoverLetter: ['', Validators.required],  // Cover letter is required
      JobType: ['', Validators.required],  // Job type must be selected
      WorkType: ['', Validators.required]  // Work type must be selected
    });
  }

  // Method to handle form submission
  submitApplication() {
    if (this.applyForm.valid) {
      console.log('Form Submitted', this.applyForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.applyForm.patchValue({
        Resume: file
      });
      this.applyForm.get('Resume')?.markAsTouched();
    }
  }
  
}
