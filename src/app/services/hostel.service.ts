import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Hostel} from '../models/hostel.model';


@Injectable({
    providedIn: 'root'
  })
export class HostelService{

    constructor(private http : HttpClient){}
    private userUrl ='/api/hostels';
    
   /* public login(user : User) {

        return this.http.post<User>(this.userUrl+'/login',user);

    }
   
    public save(user : User){
      return this.http.post<User>(this.userUrl+'/save',user);
    } */
    public save(hostel : Hostel){
      return this.http.post<Hostel>(this.userUrl,hostel);
    }
    public getHostels(){
      return this.http.get<Hostel[]>(this.userUrl);
    }
    /*public deleteUser(user : User){
      return this.http.delete(this.userUrl+'/deleteUser/'+user.id);
    }*/
    public deleteHostel(subject : Hostel){
      const options = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        }),
        body: hostel
      }
      console.log(options);
      return this.http.delete(this.userUrl,options);
    }
    public update(subject : Hostel){
      return this.http.put<Hostel>(this.userUrl,hostel);
    }
  }