import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http: HttpClient) { }

  login(login: string, password: string):Observable<any>{
    
    return this._http.post("http://localhost:3000/api/login", {
      login: login,
      password: password
    });
  }
}
