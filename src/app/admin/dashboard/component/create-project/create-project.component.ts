import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl,FormControlName,FormGroup, FormGroupDirective, ReactiveFormsModule, Validators } from '@angular/forms'; 
import { StorageService } from '../../../services/storage.service';
import ValidateForm from '../../../../helpers/validateForm';
import { AlertService } from '../../../../services/alert.service';
@Component({
  selector: 'app-create-project',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-project.component.html',
  styleUrl: './create-project.component.scss'
})
export class CreateProjectComponent implements OnInit {

public img_upload_status: string = "";
public file:File |null = null;
@ViewChild(FormGroupDirective)
private formDir!: FormGroupDirective;

constructor(public fb : FormBuilder,public fileService:StorageService,private alert:AlertService){}


ngOnInit(): void {

}

// Create project form ==================>
 createProject  = this.fb.group({
  title : ['',Validators.required],
  description:['',Validators.required],
  category:['',Validators.required],
  tech_stack: ['',Validators.required]
 })



//  validate form input  ==================>
 get title() {
  return this.createProject.get('title');
}

get description() {
  return this.createProject.get('description');
}

get category() {
  return this.createProject.get('category');
}
get tech_stack() {
  return this.createProject.get('tech_stack');
}

// create new project 
 createNewProject(event:Event){
  event.preventDefault(); 

    
    if(this.createProject.valid){
     
    this.fileService.createProject(this.createProject.value); 
    this.formDir.resetForm();
    }else{
      
      ValidateForm.validateAllFormFields(this.createProject);
      this.alert.showAlert("All fields are required !" ,"Failed");

    }
 }


  fileUploadChange(event:any){
  this.file =  event.target.files[0];
 }

 async uploadFile(event:Event){
  if(this.file){
   await this.fileService.storeFile(this.file);
     this.fileService.uploadSubject.subscribe({
      next : (data)=> { 
        if(data =="image-uploaded"){
         this.createNewProject(event);
        } 
      },
    });
  }else{
    alert("Please select a file !");
  }
 }



}
