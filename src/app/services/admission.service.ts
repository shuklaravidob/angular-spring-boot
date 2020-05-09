import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Admission} from '../models/admission.model';

@Injectable({
    providedIn: 'root'
  })
export class AdmissionService{
    [x: string]: any;
    Admissionservice: Admission[];

    constructor(private http : HttpClient){}
    private userUrl ='/api/admissions';
    
   /* public login(user : User) {
        return this.http.post<User>(this.userUrl+'/login',user);
    } */
    public save(admission : Admission){
      return this.http.post<Admission>(this.userUrl,admission);
    }
    public getAdmissions(){
      return this.http.get<Admission[]>(this.userUrl);
    }
    public deleteAdmission(admission : Admission){
      const options = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        }),
        body: admission
      }
      console.log(options);
      return this.http.delete(this.userUrl,options);
    }
    public update(admission : Admission){
      return this.http.put<Admission>(this.userUrl,admission);
    }
  }
