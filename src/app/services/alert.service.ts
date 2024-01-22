import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AlertService {



  constructor(public toaster:ToastrService) { }


  showAlert(message:string,type:string ,errorCode?: number){
    this.toaster.success(message,type);
  }



}
