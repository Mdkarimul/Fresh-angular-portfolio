import { Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { HomeComponent } from './homepage/home/home.component';

export const routes: Routes = [

    { 
        path: '', component:HomeComponent
   },
   {
        path:"dashboard",
        component:DashboardComponent
   }
];
