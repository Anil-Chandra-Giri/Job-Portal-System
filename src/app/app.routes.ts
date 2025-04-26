import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LogInComponent } from './Components/log-in/log-in.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { CompanyDashboardComponent } from './Components/company-dashboard/company-dashboard.component';
import { CandidateDashboardComponent } from './Components/candidate-dashboard/candidate-dashboard.component';
import { CompanyJobsComponent } from './Components/company-jobs/company-jobs.component';
import { PostJobComponent } from './Components/post-job/post-job.component';
import { DashboardComponent } from './Components/company-layout/dashboard/dashboard.component';
import { ManageJobsComponent } from './Components/company-layout/manage-jobs/manage-jobs.component';
import { ApplicationsComponent } from './Components/company-layout/applications/applications.component';
import { CandidatesComponent } from './Components/company-layout/candidates/candidates.component';
import { AnalyticsComponent } from './Components/company-layout/analytics/analytics.component';
import { CompanyProfileComponent } from './Components/company-layout/company-profile/company-profile.component';
import { SettingsComponent } from './Components/company-layout/settings/settings.component';
import { CompanyLayoutComponent } from './Components/company-layout/company-layout.component';
import { AppliedJobsComponent } from './Components/candidate-layout/applied-jobs/applied-jobs.component';
import { AvailableJobsComponent } from './Components/candidate-layout/available-jobs/available-jobs.component';
import { CandidateLayoutComponent } from './Components/candidate-layout/candidate-layout.component';
import { CandidateProfileComponent } from './Components/candidate-layout/candidate-profile/candidate-profile.component';
import { ApplyComponent } from './Components/apply/apply.component';
import { VerifyCompanyComponent } from './Components/verify-company/verify-company.component';
import { VerifyCandidateComponent } from './Components/verify-candidate/verify-candidate.component';

export const routes: Routes = [
    {path:'',component:HomeComponent,pathMatch:'full'},
    {path:'log-in',component:LogInComponent,pathMatch:'full'},
    {path:'sign-up',component:SignUpComponent,pathMatch:'full'},
    {path:'company-dashboard',component:CompanyDashboardComponent,pathMatch:'full'},
    {path:'candidate-dashboard',component:CandidateDashboardComponent,pathMatch:'full'},
    {path:"company-jobs",component:CompanyJobsComponent,pathMatch:'full'},
    {path:"post-job",component:PostJobComponent,pathMatch:'full'},
    {path:"apply",component:ApplyComponent,pathMatch:'full'},
    {path:"verify-company",component:VerifyCompanyComponent,pathMatch:'full'},
    {path:"verify-candidate",component:VerifyCandidateComponent,pathMatch:'full'},
    {
        path:'Candidate',
        component:CandidateLayoutComponent,
        children:[
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: CandidateDashboardComponent },
            { path: 'applied-jobs', component: AppliedJobsComponent },
            { path: 'available-jobs', component: AvailableJobsComponent },
            { path: 'Candidate-profile', component:CandidateProfileComponent },
            { path: 'settings', component: SettingsComponent },
        ]

    },
    {
        path:'Company',
        component:CompanyLayoutComponent,
        children:[
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: DashboardComponent },
            { path: 'post-job', component: PostJobComponent },
            { path: 'manage-jobs', component: ManageJobsComponent },
            { path: 'applications', component: ApplicationsComponent },
            { path: 'candidates', component: CandidatesComponent },
            { path: 'analytics', component: AnalyticsComponent },
            { path: 'company-profile', component: CompanyProfileComponent },
            { path: 'settings', component: SettingsComponent },
        ]

    },
];
