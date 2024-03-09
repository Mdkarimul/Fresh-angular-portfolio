import { Routes } from '@angular/router';
import { HomeComponent } from './homepage/home/home.component';
import { AboutComponent } from './homepage/about/about.component';
import { PortfolioComponent } from './homepage/portfolio/portfolio.component';
import { ContactComponent } from './homepage/contact/contact.component';

export const routes: Routes = [

    { 
        path: '', component:HomeComponent
   },
   {
     path:'about',component:AboutComponent
   },
   {
     path:'portfolio',component:PortfolioComponent
   },
   {
     path:'contact',component:ContactComponent
   }

  
];
