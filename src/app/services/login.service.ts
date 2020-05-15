import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../models/user.model';

@Injectable({
    providedIn: 'root'
  })
  export class UserService{
    [x: string]: any;
    user: User[];
    constructor(private http : HttpClient){}
    private userUrl ='http://localhost:8080/api/users';
    public save(user : User){
        return this.http.post<User>(this.userUrl,user);
      }
      public getUsers(){
        return this.http.get<User[]>(this.userUrl);
      }
      public deleteUser(user : User){
        const options = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json'
          }),
          body: user
        }
        console.log(options);
        return this.http.delete(this.userUrl,options);
      }
      public update(user : User){
        return this.http.put<User>(this.userUrl,user);
      }
    }