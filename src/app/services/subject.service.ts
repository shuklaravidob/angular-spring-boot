import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from '../models/subject.model';

@Injectable({
    providedIn: 'root'
  })
export class SubjectService{

    constructor(private http : HttpClient){}
    private userUrl ='/api/subjects';
    
   /* public login(user : User) {

        return this.http.post<User>(this.userUrl+'/login',user);

    }
    public save(user : User){
      return this.http.post<User>(this.userUrl+'/save',user);
    } */
    public getSubjects(){
      return this.http.get<Subject[]>(this.userUrl);
    }
    /*public deleteUser(user : User){
      return this.http.delete(this.userUrl+'/deleteUser/'+user.id);
    }*/
  }