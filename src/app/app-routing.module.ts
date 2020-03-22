import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentsComponent } from './students/students.component';
import { from } from 'rxjs';

const routes: Routes = [
   {path:"home", component:HomeComponent},
   {path:"students", component:StudentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } export const
RoutingConponent = [HomeComponent,StudentsComponent];
