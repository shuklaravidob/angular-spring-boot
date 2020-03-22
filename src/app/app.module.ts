import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NewCmpComponent} from './new-cmp/new-cmp.component';
import {AlertModule,ButtonsModule} from 'ngx-bootstrap';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import {BsDropdownModule} from 'ngx-bootstrap';
import { from } from 'rxjs';
import { HomeComponent } from './home/home.component';
import { StudentsComponent } from './students/students.component';

@NgModule({
  declarations: [
    AppComponent,
    NewCmpComponent,
    HomeComponent,
    StudentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ButtonsModule,
    BsDatepickerModule,
    BsDropdownModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
