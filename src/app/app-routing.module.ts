import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentsComponent } from './students/students.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { HostelsComponent } from './hostels/hostels.component';
import { from } from 'rxjs';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
   {path:"home", component:HomeComponent},
   {path:"students", component:StudentsComponent},
   {path:"subjects", component:SubjectsComponent},
   {path:"hostels", component:HostelsComponent},
   {path:"login", component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } export const
RoutingConponent = [HomeComponent,StudentsComponent,SubjectsComponent,HostelsComponent,LoginComponent];
