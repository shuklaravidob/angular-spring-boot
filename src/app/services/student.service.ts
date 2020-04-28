import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Student} from '../models/student.model';

@Injectable({
    providedIn: 'root'
  })
export class StudentService{
    [x: string]: any;
    Studentservice: Student[];

    constructor(private http : HttpClient){}
    private userUrl ='/api/students';
    
   /* public login(user : User) {

        return this.http.post<User>(this.userUrl+'/login',user);

    } */
    public save(student : Student){
      return this.http.post<Student>(this.userUrl,student);
    }
    public getStudents(){
      return this.http.get<Student[]>(this.userUrl);
    }
    public deleteStudent(student : Student){
      const options = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        }),
        body: student
      }
      console.log(options);
      return this.http.delete(this.userUrl,options);
    }
    public update(student : Student){
      return this.http.put<Student>(this.userUrl,student);
    }
  }