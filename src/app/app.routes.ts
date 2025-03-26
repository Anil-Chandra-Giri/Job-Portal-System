import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LogInComponent } from './Components/log-in/log-in.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';

export const routes: Routes = [
    {path:'',component:HomeComponent,pathMatch:'full'},
    {path:'log-in',component:LogInComponent,pathMatch:'full'},
    {path:'sign-up',component:SignUpComponent,pathMatch:'full'}
];
