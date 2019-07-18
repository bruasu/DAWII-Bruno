import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutService {

  constructor(
    private _http: HttpClient
  ) { }
  insertProduct(data: object):Observable<any>{
    return this._http.post('http://localhost:3000/api/product', data);
  }
  selectProducts(quantity: number):Observable<any>{
    return this._http.get('http://localhost:3000/api/product/quantity/'+quantity);
  }
  selectProductsCategory(category: string):Observable<any>{
    return this._http.get('http://localhost:3000/api/product/category/'+category);
  }
}
