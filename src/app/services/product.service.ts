import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private urlBase = environment.urlApi;

  constructor(private _http: HttpClient) { }

  getItems(text) {
    return this._http.get(`${this.urlBase}/api/items?q=${text}`);
  }

  getItem(id) {
    return this._http.get(`${this.urlBase}/api/items/${id}`);
  }

}
