import { JsonPipe, NgClass, NgIf } from '@angular/common';
import { Component, OnChanges, SimpleChanges, inject } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Admin } from '../../Model/admin';
import { AdminAuthService } from '../../services/admin-auth.service';
import { AlertService } from '../../services/alert.service';


@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [NgClass,NgIf,ReactiveFormsModule,JsonPipe],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
 
})
export class AuthComponent  {

  constructor(public fb:FormBuilder, public auth:AdminAuthService,public alert: AlertService){
  
  }



// FORM TOGGLE ----->>>
  public signupBtnState :boolean  = true;
  public btnText:String = "Signup";
  public loginBtnState : boolean =false;

  //CONTROLL FORM TOGGLE FUNCTIONALITY ===================>>>
  controllBtn (){
    if(this.signupBtnState){
      this.signupBtnState = false;
      this.loginBtnState = true;
      this.btnText = "Login";
    }else{
      this.btnText = "Signup";
      this.signupBtnState = true;
      this.loginBtnState = false;
    }
  }


public message :string = "karimul";
public value:string = "close";




//LOGIN AND SIGNUP FORM CONTROLS===============>>>>
LoginForm = this.fb.group({
  email :[''],
  password : ['']
});
SignupForm = this.fb.group({
full_name : ['',[Validators.required]],
email : ['',[Validators.required]],
mobile : [,[Validators.required]],
password : ['',[Validators.required]]
});

// FORM VALIDATORS 
get full_name() { return this.SignupForm.get("full_name"); }
get email() { return this.SignupForm.get("email"); }
get mobile() { return this.SignupForm.get("mobile"); }
get password() { return this.SignupForm.get("password"); }

  // ADMIN SIGNUP HERE ===>>
  adminSignup(event:Event){
    event.preventDefault();  
    if(this.SignupForm.status){
      
      this.alert.showAlert("All fields are required !" ,"Failed");


    }else{
      const adminData  : Admin= {
        full_name : this.SignupForm.get("full_name")?.value,
        email : this.SignupForm.get("email")?.value,
        mobile : this.SignupForm.get("mobile")?.value,
        password : this.SignupForm.get("password")?.value
      }
       this.auth.createAdmin(adminData); 
    }
  }

  adminLogin(event:Event){
    event.preventDefault();
    const login_data = this.LoginForm.value;
    console.log(login_data);
  }
}
