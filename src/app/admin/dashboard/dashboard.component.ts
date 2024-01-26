import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminAuthService } from '../../services/admin-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {


  constructor(public auth: AdminAuthService,public route:Router){
    

  }

  ngOnInit(): void {
    this.auth.checkUser().subscribe((user)=>{
      if(!user){
    this.route.navigate(['/']);
      }
       })
  }

  signOut (){
    alert("");
    this.auth.signOut();
  }

}
