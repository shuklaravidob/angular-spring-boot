import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  regUrl = "http://localhost:3000/";
  constructor(private _http: HttpClient) { }

  createUser(data){
     return this._http.post(this.regUrl + "users" , data);

  }
}
