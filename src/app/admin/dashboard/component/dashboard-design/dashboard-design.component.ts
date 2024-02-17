import { Component } from '@angular/core';
import { ShowProjectsComponent } from '../show-projects/show-projects.component';
import { ShowSkillsComponent } from '../show-skills/show-skills.component';

@Component({
  selector: 'app-dashboard-design',
  standalone: true,
  imports: [ShowProjectsComponent,ShowSkillsComponent],
  templateUrl: './dashboard-design.component.html',
  styleUrl: './dashboard-design.component.scss'
})
export class DashboardDesignComponent {

}
