import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LogInComponent } from './Components/log-in/log-in.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { CompanyProfileComponent } from './Components/company-profile/company-profile.component';
import { CandidateProfileComponent } from './Components/candidate-profile/candidate-profile.component';
import { CompanyDashboardComponent } from './Components/company-dashboard/company-dashboard.component';
import { CandidateDashboardComponent } from './Components/candidate-dashboard/candidate-dashboard.component';
import { ApplicantListComponent } from './Components/applicant-list/applicant-list.component';
import { CompanyJobsComponent } from './Components/company-jobs/company-jobs.component';
import { AppliedJobsComponent } from './Components/applied-jobs/applied-jobs.component';
import { AvailableJobsComponent } from './Components/available-jobs/available-jobs.component';
import { PostJobComponent } from './Components/post-job/post-job.component';

export const routes: Routes = [
    {path:'',component:HomeComponent,pathMatch:'full'},
    {path:'log-in',component:LogInComponent,pathMatch:'full'},
    {path:'sign-up',component:SignUpComponent,pathMatch:'full'},
    {path:'company-profile',component:CompanyProfileComponent,pathMatch:'full'},
    {path:'candidate-profile',component:CandidateProfileComponent,pathMatch:'full'},
    {path:'company-dashboard',component:CompanyDashboardComponent,pathMatch:'full'},
    {path:'candidate-dashboard',component:CandidateDashboardComponent,pathMatch:'full'},
    {path:"applicant-list",component:ApplicantListComponent,pathMatch:'full'},
    {path:"company-jobs",component:CompanyJobsComponent,pathMatch:'full'},
    {path:"applied-jobs",component:AppliedJobsComponent,pathMatch:'full'},
    {path:"available-jobs",component:AvailableJobsComponent,pathMatch:'full'},
    {path:"post-job",component:PostJobComponent,pathMatch:'full'}
];
