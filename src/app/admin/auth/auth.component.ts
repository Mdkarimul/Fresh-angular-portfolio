import { JsonPipe, NgClass, NgIf } from '@angular/common';
import { Component, OnChanges, OnInit, SimpleChanges, ViewChild, inject } from '@angular/core';
import { EmailValidator, FormBuilder, FormControl, FormGroup, FormGroupDirective, ReactiveFormsModule, Validators } from '@angular/forms';
import { Admin,Login } from '../../Model/admin';
import { AdminAuthService } from '../../services/admin-auth.service';
import { AlertService } from '../../services/alert.service';
import { Observable, Subject } from 'rxjs';
import ValidateForm  from '../../helpers/validateForm';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [NgClass,NgIf,ReactiveFormsModule,JsonPipe],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
 
})
export class AuthComponent implements OnInit  {

  constructor(
    public fb:FormBuilder, 
    public auth:AdminAuthService,
    public alert: AlertService,
    public loader : LoadingService
    ){
  
  }



// FORM TOGGLE ----->>>
  public signupBtnState :boolean  = true;
  public btnText:String = "Signup";
  public loginBtnState : boolean =false;
  public btnState :boolean = false;
  public LoginForm!:FormGroup; 
  public SignupForm!:FormGroup;
  @ViewChild(FormGroupDirective)
  private formDir!: FormGroupDirective;
  public controlLoader : boolean = false;

  //CONTROLL FORM TOGGLE FUNCTIONALITY ===================>>>
  controllBtn (){
    if(this.signupBtnState){
      this.signupBtnState = false;
      this.loginBtnState = true;
      this.btnText = "Login";
      this.formDir.resetForm();
    }else{
      this.btnText = "Signup";
      this.signupBtnState = true;
      this.loginBtnState = false;
      this.formDir.resetForm();
    }
  }


public message :string = "karimul";
public value:string = "close";


ngOnInit(): void {

  // SUBSCRIBE TO LOADER SERVICE
   this.loader.loadingAction$.subscribe({
    next : (result)=>{
     this.controlLoader = result;
    },
   })
  
//LOGIN AND SIGNUP FORM CONTROLS===============>>>>
this.LoginForm = this.fb.group({
  email : ['',[Validators.required,Validators.email]],
  password : ['',[Validators.required,Validators.minLength(6),Validators.maxLength(12)]]
});
this.SignupForm = this.fb.group({
full_name : ['',[Validators.required]],
email : ['',[Validators.required,Validators.email]],
mobile : [,[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
password : ['',[Validators.required,Validators.minLength(6),Validators.maxLength(12)]]
});


}




// FORM VALIDATORS 
get full_name() { return this.SignupForm.get("full_name"); }
get email() { return this.SignupForm.get("email"); }
get mobile() { return this.SignupForm.get("mobile"); }
get password() { return this.SignupForm.get("password"); }


get Lemail() { return this.LoginForm.get("email"); }

get Lpassword() { return this.LoginForm.get("password"); }




  // ADMIN SIGNUP HERE ===>>
  adminSignup(event:Event){
 
    event.preventDefault(); 
    
    if(this.SignupForm.valid){
     
    this.auth.createAdmin(this.SignupForm.value); 
    this.formDir.resetForm();
    }else{
      
      ValidateForm.validateAllFormFields(this.SignupForm);
      this.alert.showAlert("All fields are required !" ,"Failed");

    }
  }

  adminLogin(event:Event){
    event.preventDefault(); 

    if(this.LoginForm.valid){
     
    this.auth.loginAdmin(this.LoginForm.value); 
    if(!this.controlLoader){
      this.formDir.resetForm();
    }
    }else{
      
      ValidateForm.validateAllFormFields(this.LoginForm);
      this.alert.showAlert("All fields are required !" ,"Failed");

    }
  }



}
