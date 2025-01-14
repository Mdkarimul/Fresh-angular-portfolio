import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private loadignService = new Subject<boolean>();
  loadingAction$ = this.loadignService as Observable<boolean>

  constructor() { }
  public subject = new Subject<number>();

  showloading (){
    this.loadignService.next(true);
  }
  hideLoading() {
    this.loadignService.next(false);
  }
}
