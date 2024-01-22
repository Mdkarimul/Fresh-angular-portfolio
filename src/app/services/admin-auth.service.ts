import { Injectable } from '@angular/core';
import { Admin } from '../Model/admin';
import {  collection ,addDoc,getDocs ,Firestore,query,where, getDoc  } from '@angular/fire/firestore';
import { AlertService } from './alert.service';
import { throws } from 'assert';
@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {

public adminCollection = collection(this.fs,"admin");


  constructor(public fs : Firestore,public alert:AlertService) {
  

 
  }


  

  async createAdmin(adminData:Admin){


 const q = query(this.adminCollection,where("email","==",adminData.email));

 const querySnapshot = await getDocs(q); 

 if(querySnapshot.docs){

    this.alert.showAlert("Admin already registered !","Failed",201);

 }else{

 const docRef = await addDoc(this.adminCollection,{

      adminData

 }).then((data)=>{

  this.alert.showAlert("Admin registered successfully !","Success",200);

 }).catch((error)=>{

  this.alert.showAlert("Failed to register user !","Failed",201);
  
 })
 }




  }



   getAdmin()  {
   
  }





 



 





}
