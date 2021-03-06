import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

/**
 * Servicio para peticiones relacionadas a productos
 * En este caso este servicio de la llamada a la API para obtener el listado de productos y uno en particular
 */
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private urlBase = environment.urlApi;

  constructor(private _http: HttpClient) { }

  getItems(text: string): Observable<Object> {
    return this._http.get(`${this.urlBase}/api/items?q=${text}`);
  }

  getItem(id: string): Observable<Object> {
    return this._http.get(`${this.urlBase}/api/items/${id}`);
  }

}
