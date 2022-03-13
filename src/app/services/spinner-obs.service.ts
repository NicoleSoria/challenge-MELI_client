import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerObsService {
  
  private isLoading$ = new Subject<boolean>();

  constructor() { }

  show() {
    this.isLoading$.next(true);
  }

  hide() {
    this.isLoading$.next(false);
  }

  getValue(): Observable<boolean> {
   return this.isLoading$.asObservable();
  }
}
