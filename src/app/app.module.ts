import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NewCmpComponent} from './new-cmp/new-cmp.component';
import {AlertModule,ButtonsModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NewCmpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ButtonsModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
