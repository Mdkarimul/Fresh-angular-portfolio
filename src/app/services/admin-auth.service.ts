import { Injectable, inject } from '@angular/core';
import { Admin, Login } from '../Model/admin';
import { Firestore, collectionData, collection, doc, getDoc, where, query, getDocs, setDoc } from '@angular/fire/firestore';
import { AlertService } from './alert.service';
import { Auth ,getAuth, authState, createUserWithEmailAndPassword, signInWithEmailAndPassword, User, signOut} from '@angular/fire/auth';
import { throws } from 'assert';
import { environment } from '../../environments/environment';
import { Subject, Subscription } from 'rxjs';
import { LoadingService } from './loading.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {
  private auth :Auth = inject(Auth);
  private  authState$ = authState(this.auth);
  private authStateSubscription!: Subscription;
  firestore: Firestore = inject(Firestore);
  adminCollection = collection(this.firestore, 'admin');
  public btnState  = new Subject<boolean>();

  constructor(public alert:AlertService,public loader : LoadingService,private router:Router) {
     




  }


  

async createAdmin(adminData:Admin){
  console.log(adminData);

  this.loader.showloading();
createUserWithEmailAndPassword(this.auth,adminData.email,adminData.password).then(async (user)=>{

  await setDoc(doc(this.adminCollection),adminData);
  this.alert.showAlert("Admin register successfully !","Success");
  this.loader.hideLoading();
  
}).catch((error)=>{

  const errorCode = error.code;
  const errorMessage = error.message;

  if (errorCode === 'auth/email-already-in-use') {

      this.alert.showAlert("Email already exits","Failed");
      this.loader.hideLoading();

  } else if(errorCode =="auth/weak-password"){

    this.alert.showAlert("Password should be 6 character !","Failed")
     this.loader.hideLoading();
  }
})
  }




  checkUser (){ return this.authState$; }
  
  signOut () {
    signOut(this.auth).then(() => {
      // Sign-out successful.
      this.router.navigate(['/']);
    }).catch((error) => {
      // An error happened.
    });
  }



   loginAdmin(loginData:Login)  {
    this.loader.showloading();
    signInWithEmailAndPassword(this.auth,loginData.email, loginData.password)
    .then((userCredential) => {
      const user = userCredential.user;
      this.loader.hideLoading();
      this.router.navigate(['dashboard']);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode,  errorMessage);
      if(errorCode=="auth/user-not-found"){
        this.alert.showAlert("User not found !","Failed");
        this.loader.hideLoading();
      }else if(errorCode=="auth/wrong-password"){
        this.alert.showAlert("Wrong password !","Failed");
        this.loader.hideLoading();
      }else if(errorCode =="auth/too-many-requests"){
        this.alert.showAlert("Too many attempt try later or reset you password","Failed");
        this.loader.hideLoading();
      }else{
        this.alert.showAlert("Something wrong try again later !","Failed");
        this.loader.hideLoading();
      }

    });
   
  }





 



 





}
