import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
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
    public getHostels(){
      return this.http.get<Hostel[]>(this.userUrl);
    }
    /*public deleteUser(user : User){
      return this.http.delete(this.userUrl+'/deleteUser/'+user.id);
    }*/
  }