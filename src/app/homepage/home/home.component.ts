import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { animate, state, style, transition, trigger } from '@angular/animations';
import { ServicesComponent } from '../services/services.component';
import { AboutComponent } from '../about/about.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { ContactComponent } from '../contact/contact.component';
import { ClientFeedComponent } from '../client-feed/client-feed.component';

import { RouterLink, RouterOutlet } from '@angular/router';
import { imgSlide,fadeIn,barLine } from '../animation';
import { LoadingService } from '../../services/loading.service';
import { Observable, Subscription } from 'rxjs';
import { NgxTypedWriterModule } from 'ngx-typed-writer';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone:true,
  imports :[ServicesComponent,AboutComponent,PortfolioComponent,ContactComponent,ClientFeedComponent,RouterOutlet,RouterLink,NgxTypedWriterModule],
  animations:[

imgSlide,
fadeIn,
barLine

  ]
})

  export class HomeComponent implements OnInit,AfterViewInit,OnDestroy {

    constructor(private loadingService:LoadingService) {

    }

    private sub: Subscription = new Subscription;
    public writeArr :string[] = ['karimul','index'];
    public index:number = 0;
    public text:string = '';
    public i = 0;

    imgslide :string = 'slideOut';
    fade:string = 'fadeOut';
    line:string = 'out';


    ngOnInit(): void {
    setTimeout(()=>{
   this.imgslide = 'slideIn',
   this.fade = 'fadeIn'
    },100)
    }

   

   




  
    ngAfterViewInit(): void {

     // setInterval(()=>{this.typeWrite()},2000)
  

   this.sub =   this.loadingService.subject.subscribe({
      next : (pos)=>{
        if(pos > 40){
          this.line = 'in'
        }
      }
    })
    }



    ngOnDestroy(){
    this.sub.unsubscribe();
    }


}
