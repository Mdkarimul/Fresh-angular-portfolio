import { Injectable, inject } from '@angular/core';
import { Firestore, collection, doc, setDoc } from '@angular/fire/firestore';
import { uploadBytes , getStorage,ref } from '@angular/fire/storage';
import { AlertService } from '../../services/alert.service';
import { Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class StorageService {

  public uploadSubject = new Subject<string>();

  public storage  = getStorage();
  public storageRef = ref(this.storage,"images");
  firestore: Firestore = inject(Firestore);
  adminCollection = collection(this.firestore, 'projects');

  constructor(private alert:AlertService) { 

  }

  storeFile(file:any){
    uploadBytes(this.storageRef,file).then((snapShot)=>{
      console.log(snapShot);
     this.uploadSubject.next("image-uploaded");
    }).catch((error)=>{
     console.log(error);
    });
  }

  async createProject(projectData:any){

this.adminCollection
await setDoc(doc(this.adminCollection),projectData);
this.alert.showAlert("Admin register successfully !","Success");
// this.loader.hideLoading();
    
  }
}
