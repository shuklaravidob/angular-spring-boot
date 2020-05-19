import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule , ReactiveFormsModule} from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from '../register/register.component';
import { ResetPasswordComponent } from '../reset-password/reset-password.component';

@NgModule({
  declarations: [RegisterComponent,ResetPasswordComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    RegisterComponent,
    ResetPasswordComponent
  ]
})
export class AuthModule { }
