import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
  standalone:true,

 
})
export class HeroSectionComponent implements OnInit,AfterViewInit{

  @ViewChild('titleanimate')
  title!: ElementRef<HTMLSpanElement>;
 ngAfterViewInit(): void {

 }

  @HostListener('window:scroll', ['$event'])
  updateValue() {
  
    const pos: number = window.pageYOffset;
    if(pos > 10) {
      console.log(this.title.nativeElement.scrollBy({
        top: 10,
        left:0,
        behavior: "smooth",
      }));
    }
    console.log(pos);
    

    
  
 }


  constructor(){
  
    
   

   
  

  }

  ngOnInit(): void {
  
    }

 


    
  

}
