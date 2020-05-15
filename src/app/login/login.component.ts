import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/login.service';
import { User } from '../models/user.model';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  formdata;
  users : User[];
  userForm: { reset: () => void; };
  formBuilder: any;
  userData : User;
  edit : boolean;
  displayModify : string;
  displaySubmit : string;
  constructor(private userService : UserService, private fromBuilder:FormBuilder, ) { 
    this.edit = true;
    this.displayModify = 'inline';
    this.displaySubmit = 'none';
    this.formdata = new FormGroup({
      userName: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(5)
     ])),
     password: new FormControl("", Validators.compose([
      Validators.required,
      Validators.minLength(3)
   ])),
     rememberMe:new FormControl(""),
     forgotPassword:new FormControl(""),
  });
  }
  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      data => {
        this.users = data;
      }
    )
  }
  
  
  onClickSubmit(data) {
    this.userData = new User();
       this.userData.userId = data.userId;
       this.userData.userName = data.userName;
       console.log('meenal' + this.userData.userName );
       this.userData.password = data.password;
       this.userData.rememberMe = data.rememberMe;
       this.userData.forgotPassword = data.forgotPassword;
       this.userService.save(this.userData).subscribe(
          dataR => {
            alert("Users ID saved successfully : "+dataR.userId+" Name : "+dataR.userName+" "+dataR.password);
            this.ngOnInit();
          }
         
       );
      }
      deleteUser(users : User) : void {
        console.log(users.userId)
        this.userService.deleteUser(users).subscribe(
           data => {
              this.users = this.users.filter(u => u != users);
           } 
        )
      }
      modifyUser() : void {
        console.log("Modify the user");
        this.edit = false;
        this.displayModify = 'none'
        this.displaySubmit = 'inline';
      }
      submitUser(User : User) : void {
        console.log(User.userId)
        this.userService.update(User).subscribe(
          dataR => {
            alert("User saved successfully ID : "+dataR.userId+" Name : "+dataR.userName+" "+dataR.password);
            this.ngOnInit();
          }
       );
      }
    }