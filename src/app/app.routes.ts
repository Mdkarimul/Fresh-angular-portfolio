import { Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { HomeComponent } from './homepage/home/home.component';
import { AuthComponent } from './admin/auth/auth.component';
import { ShowProjectsComponent } from './admin/dashboard/component/show-projects/show-projects.component';
import { ShowSkillsComponent } from './admin/dashboard/component/show-skills/show-skills.component';
import { DashboardDesignComponent } from './admin/dashboard/component/dashboard-design/dashboard-design.component';
import { CreateProjectComponent } from './admin/dashboard/component/create-project/create-project.component';

export const routes: Routes = [

    { 
        path: '', component:HomeComponent
   },
   {
        path:"dashboard",
        component:DashboardComponent,
        children : [
          {
               path :"dashboard",
               component:DashboardDesignComponent,
              
          },
          {
               path:"create-project",
               component:CreateProjectComponent
          }
     
        ]
   },
   {
     path: "admin",
     component : AuthComponent
   }
];
