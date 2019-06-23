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

  registerUser(date: object){
    //console.log(date);
  }
  checkLoginUser(login: string): Observable<any>{    
    return this._http.get("/api/user/login/"+login);
  }
}
