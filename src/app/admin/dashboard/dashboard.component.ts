import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminAuthService } from '../../services/admin-auth.service';
import { Router } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component';
import { ShowProjectsComponent } from './component/show-projects/show-projects.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,SidenavComponent,HeaderComponent,ShowProjectsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent  {


  constructor(){
    

  }

 

}
