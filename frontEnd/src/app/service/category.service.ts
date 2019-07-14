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
    return this._http.post('http://localhost:3000/api/category', {"name": category});
  }
  selectCategories(): Observable<any>{
    return this._http.get('http://localhost:3000/api/category');
  }
  updateCategory(id_category: number, name: string): Observable<any>{
    return this._http.put('http://localhost:3000/api/category', {"id_category": id_category, "name": name});
  }
  deleteCategory(id_category: number):Observable<any>{
    return this._http.delete('http://localhost:3000/api/category/'+id_category);
  }
}
