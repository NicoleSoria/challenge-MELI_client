import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesObsService {

  private categories$ = new Subject<string[]>();

  categories: string[];
  
  constructor() { }

  toAssingCategories(cats: string[]) {
    this.categories = [];
    this.categories = cats;
    this.categories$.next(this.categories);
  }

  getCategories(): Observable<string[]> {
    return this.categories$.asObservable();
  }

}
