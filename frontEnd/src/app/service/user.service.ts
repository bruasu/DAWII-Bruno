import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private _http: HttpClient
  ) { }

  registerUser(date: object): Observable<any>{
    return this._http.post("/api/user", date);
  }
  checkLoginUser(login: string): Observable<any>{    
    return this._http.get("/api/user/login/"+login);
  }
  checkEmailUser(email: string): Observable<any>{
    return this._http.get("/api/user/email/"+email);
  }
  selectUserAllCount(user: string, count: number): Observable<any>{
    return this._http.get(`/api/user/list/${user}/${count}`);
  }
  updateUser(date: object): Observable<any>{
    return this._http.put('/api/user', date);
  }
  searchUserNameEmailLogin(search: string): Observable<any>{
    return this._http.get('/api/user/NameEmailLogin/'+search);
  }
  deleteUser(idUser: number): Observable<any>{
    return this._http.delete('/api/user/'+idUser);
  }
}
