import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

/**
 * Servicio para el manejo del listado de categorias a mostrar, aca utilice obserbables
 */
@Injectable({
  providedIn: 'root'
})
export class CategoriesObsService {

  /**
   * categories$ es un observador, el cual es expuesto con la función getCategories.
   * En este caso lo utilizo para poder centralizar y que sea mas facil la conexión de los componentes,
   * especificamente el componente que muestra las categorias, ya que cambian con cada busqueda que se realiza
  */
  public categories$ = new Subject<string[]>();

  categories: string[];

  constructor() { }

  // this.categories$.next se usa para notificar a los suscriptores los cambios
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
    return this.categories$;
  }

}
