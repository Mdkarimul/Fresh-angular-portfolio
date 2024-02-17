import { Component } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms'; 
@Component({
  selector: 'app-create-project',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-project.component.html',
  styleUrl: './create-project.component.scss'
})
export class CreateProjectComponent {

constructor(public fb : FormBuilder){}


 createProject  = this.fb.group({
  title : [''],
  description:[''],
  category:[],
  techs : []
 })


}
