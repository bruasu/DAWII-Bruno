import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private _http: HttpClient
  ) { }

  registerUser(date: object): Observable<any>{
    return this._http.post("http://localhost:3000/api/user", date);
  }
  checkLoginUser(login: string): Observable<any>{    
    return this._http.get("http://localhost:3000/api/user/login/"+login);
  }
  checkEmailUser(email: string): Observable<any>{
    return this._http.get("http://localhost:3000/api/user/email/"+email);
  }
  selectUserAllCount(user: string, count: number): Observable<any>{
    return this._http.get(`http://localhost:3000/api/user/list/${user}/${count}`);
  }
  updateUser(date: object): Observable<any>{
    return this._http.put('http://localhost:3000/api/user', date);
  }
  searchUserNameEmailLogin(search: string): Observable<any>{
    return this._http.get('http://localhost:3000/api/user/NameEmailLogin/'+search);
  }
  deleteUser(idUser: number): Observable<any>{
    return this._http.delete('http://localhost:3000/api/user/'+idUser);
  }
}
