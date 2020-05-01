import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Subject} from '../models/subject.model';


@Injectable({
    providedIn: 'root'
  })
export class SubjectService{
    [x: string]: any;
    Subjectservice: Subject[];

    constructor(private http : HttpClient){}
    private userUrl ='/api/subjects';
    
   /* public login(user : User) {

        return this.http.post<User>(this.userUrl+'/login',user);

    }
    public save(user : User){
      return this.http.post<User>(this.userUrl+'/save',user);
    } */
    public save(subject : Subject){
      return this.http.post<Subject>(this.userUrl,subject);
    }
    public getSubjects(){
      return this.http.get<Subject[]>(this.userUrl);
    }
    /*public deleteUser(user : User){
      return this.http.delete(this.userUrl+'/deleteUser/'+user.id);
    }*/
    public deleteSubject(subject : Subject){
      const options = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        }),
        body: subject
      }
      console.log(options);
      return this.http.delete(this.userUrl,options);
    }
    public update(subject : Subject){
      return this.http.put<Subject>(this.userUrl,subject);
    }
  }