import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home/home.component';
import { AboutComponent } from './pages/home/about/about.component';
import { PortfolioComponent } from './pages/home/portfolio/portfolio.component';
import { ContactComponent } from './pages/home/contact/contact.component';
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
