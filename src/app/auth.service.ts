import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable ,BehaviorSubject } from 'rxjs';
import {jwtDecode} from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  userData= null;

constructor(private _HttpClient:HttpClient , private _Router:Router)
 {
 
  }
decodeuserdata()
{
  let encodedToken=JSON.stringify(localStorage.getItem('userToken'))
  let decodedtoken:any =jwtDecode(encodedToken);
  console.log(decodedtoken);
  this.userData=decodedtoken;
}



  register(userData:object):Observable<any>
  {
return this._HttpClient.post('https://localhost:44385/api/Account/register/student',userData)
  }

  login(userData:object):Observable<any>
  {
return this._HttpClient.post('https://localhost:44385/api/Account/login',userData)
  }

  // inactiveGroup(userData:object):Observable<any>
  // {

  //   return this._HttpClient.get('https://localhost:44385/api/Group/inactive',userData)
  // }

  inactiveGroup(): Observable<string> {
    return this._HttpClient.get<string>('https://localhost:44385/api/Group/inactive'); // Replace with your actual API endpoint
    }
  
  
}
