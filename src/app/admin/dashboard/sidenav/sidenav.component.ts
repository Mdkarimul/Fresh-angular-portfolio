import { Component, OnInit } from '@angular/core';
import { AdminAuthService } from '../../../services/admin-auth.service'; 
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent implements OnInit {

  constructor (public auth: AdminAuthService,public route:Router) {}


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
