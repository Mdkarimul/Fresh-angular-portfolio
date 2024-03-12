import { Routes } from '@angular/router';
import { HomeComponent } from './homepage/home/home.component';
import { AboutComponent } from './homepage/about/about.component';
import { PortfolioComponent } from './homepage/portfolio/portfolio.component';
import { ContactComponent } from './homepage/contact/contact.component';

export const routes: Routes = [

    { 
        path: '', component:HomeComponent,
        data:{animation:'home'}
   },
   {
     path:'about',component:AboutComponent,
     data:{animation:'about'}
   },
   {
     path:'portfolio',component:PortfolioComponent,
     data:{animation:'portfolio'}
   },
   {
     path:'contact',component:ContactComponent,
     data:{animation:'contact'}
   }

  
];
