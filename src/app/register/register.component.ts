import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   
   alert:boolean =false;
   createUser = new FormGroup({
    userName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')

   })
  constructor(private authService : AuthService) { }


  ngOnInit(): void {
  }
  regUser() {
    console.log(this.createUser.value)
    this.authService.createUser(this.createUser.value).subscribe((result)=>{
    console.log(result , "registered user successfully")
    })    
    this.alert=true
    this.createUser.reset({})
  }
  closeAlert(){
    this.alert=false;
    
  }
}
