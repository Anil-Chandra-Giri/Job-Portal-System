import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LogInComponent } from './Components/log-in/log-in.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { CompanyProfileComponent } from './Components/company-profile/company-profile.component';
import { CandidateProfileComponent } from './Components/candidate-profile/candidate-profile.component';
import { CompanyDashboardComponent } from './Components/company-dashboard/company-dashboard.component';
import { CandidateDashboardComponent } from './Components/candidate-dashboard/candidate-dashboard.component';

export const routes: Routes = [
    {path:'',component:HomeComponent,pathMatch:'full'},
    {path:'log-in',component:LogInComponent,pathMatch:'full'},
    {path:'sign-up',component:SignUpComponent,pathMatch:'full'},
    {path:'company-profile',component:CompanyProfileComponent,pathMatch:'full'},
    {path:'candidate-profile',component:CandidateProfileComponent,pathMatch:'full'},
    {path:'company-dashboard',component:CompanyDashboardComponent,pathMatch:'full'},
    {path:'candidate-dashboard',component:CandidateDashboardComponent,pathMatch:'full'}
];
