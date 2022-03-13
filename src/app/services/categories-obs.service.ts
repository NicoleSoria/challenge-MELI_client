import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesObsService {

  private categories$ = new Subject<string[]>();

  categories: string[];
  
  constructor() { }

  toAssingCategories(cats: string[]): void {
    this.categories = [];
    this.categories = cats;
    this.categories$.next(this.categories);
  }

  clearCategories(): void {
    this.categories = [];
    this.categories$.next(this.categories);
  }

  getCategories(): Observable<string[]> {
    return this.categories$.asObservable();
  }

  onClearCategories(): Observable<string[]> {
    return this.categories$.asObservable();
  }

}
