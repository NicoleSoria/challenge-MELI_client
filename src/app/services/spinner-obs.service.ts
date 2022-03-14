import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerObsService {

  /**
   * isLoading$ es un observador, el cual es expuesto con la función getValue.
   * En este caso lo utilizo para poder centralizar el comportamiento del loading
   */
  private isLoading$ = new Subject<boolean>();

  constructor() { }

  // Cuando hago el .next del subject notifico a los susbriptores el cambio que se realizo
  show() {
    this.isLoading$.next(true);
  }

  hide() {
    this.isLoading$.next(false);
  }

  getValue(): Observable<boolean> {
    return this.isLoading$;
  }
}
