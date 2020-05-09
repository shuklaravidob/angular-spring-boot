import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule,HttpClient} from '@angular/common/http';
import {NewCmpComponent} from './new-cmp/new-cmp.component';
import {AlertModule,ButtonsModule} from 'ngx-bootstrap';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import {BsDropdownModule} from 'ngx-bootstrap';
import { from } from 'rxjs';
import { HomeComponent } from './home/home.component';
import { AdmissionComponent } from './admission/admission.component'
import { StudentsComponent } from './students/students.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { HostelsComponent } from './hostels/hostels.component';
import { LoginComponent } from './login/login.component';
import { TimetableComponent } from './timetable/timetable.component';
import { LecturerComponent } from './lecturer/lecturer.component';


@NgModule({
  declarations: [
    AppComponent,
    NewCmpComponent,
    HomeComponent,
    LoginComponent,
    StudentsComponent,
    SubjectsComponent,
    HostelsComponent,
    AdmissionComponent,
    TimetableComponent,
    LecturerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonsModule,
    HttpClientModule,
    BsDatepickerModule,
    BsDropdownModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
