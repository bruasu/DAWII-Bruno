import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private _http: HttpClient
  ) { }
  
  insertCategory(category: string): Observable<any>{
    return this._http.post('/api/category', {"name": category});
  }
  selectCategories(): Observable<any>{
    return this._http.get('/api/category');
  }
  updateCategory(id_category: number, name: string): Observable<any>{
    return this._http.put('/api/category', {"id_category": id_category, "name": name});
  }
}
