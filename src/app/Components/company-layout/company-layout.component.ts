import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-company-dashboard',
  imports: [CommonModule,RouterOutlet,SidebarComponent],
  templateUrl: './company-layout.component.html',
  styleUrl: './company-layout.component.css'
})
export class CompanyLayoutComponent {
users :any;
}
