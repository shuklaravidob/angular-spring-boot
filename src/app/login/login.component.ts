import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  user:string;
  password:string;
  
  constructor(private router:Router){

  }
   ngOnInit(){

   }  
  loginUser(f: NgForm)
  {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
    if(this.user == "Admin" && this.password =="admin123")
    { 
      this.router.navigate(['home'])
  }
   else{
     alert("please enter valid username and password")
   }
  } 
 }