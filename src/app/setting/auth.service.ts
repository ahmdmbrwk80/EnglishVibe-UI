import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient ) { }


  register(userData:object):Observable<any>
  {
return this._HttpClient.post('https://localhost:44385/api/Account/register/student',userData)
  }

  login(userData:object):Observable<any>
  {
return this._HttpClient.post('https://localhost:44385/api/Account/login',userData)
  }
}
