import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgxTypedWriterModule } from 'ngx-typed-writer';
import { barLine, skill } from '../animation';
import { Subscription } from 'rxjs';
import { fadeAbout } from '../animation';
import { LoadingService } from '../../services/loading.service';
@Component({

  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  standalone:true,
  imports:[RouterLink,NgxTypedWriterModule],
  animations:[
    skill,
    fadeAbout,
    barLine

  ]

})
export class AboutComponent {
  
  private sub: Subscription = new Subscription;
  constructor(private loadingService:LoadingService){
    this.experienceCount();
    this.projectCount();
    this.clientCount();
  }
  fade:string = 'fadeOut';
  line:string = 'out';
  public experience : number = 0;
  public clients : number = 0;
  public projects : number = 0 ;


  experienceCount() {
 const clear =  setInterval(()=>{
if(this.experience < 5) {
   this.experience++;
}else {
clearInterval(clear);
}
},200);
  }

  projectCount() {
    const clear =  setInterval(()=>{
   if(this.projects < 5) {
      this.projects++;
   }else {
   clearInterval(clear);
   }
   },200);
     }

     clientCount() {
      const clear =  setInterval(()=>{
     if(this.clients < 5) {
        this.clients++;
     }else {
     clearInterval(clear);
     }
     },200);
       }



       ngAfterViewInit(): void {

        // setInterval(()=>{this.typeWrite()},2000)
        this.sub =   this.loadingService.subject.subscribe({
          next : (pos)=>{
            if(pos > 350){
              this.fade = 'fadeIn'
            }
            if(pos > 600){
              this.line = 'in'
            }
          }

        })
       }


}
