import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';

import {MatButtonModule} from '@angular/material/button';


import {MatIconModule} from '@angular/material/icon';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { RegistrationformComponent } from './registrationform/registrationform.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes =[
  {path:'registrationform', component: RegistrationformComponent}
];



@NgModule({
  declarations: [
    AppComponent,
    NavigationbarComponent,
    RegistrationformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,


    MatButtonModule,
    MatListModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
