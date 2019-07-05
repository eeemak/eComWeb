import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ConfigActions} from './Components/AdminDashboard/ThemeOptions/store/config.actions';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import { AdminDashboardModule } from './Components/AdminDashboard/admin-dashboard.module';

import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';


import {ForgotPasswordBoxedComponent} from './DemoPages/UserPages/forgot-password-boxed/forgot-password-boxed.component';
import {LoginBoxedComponent} from './DemoPages/UserPages/login-boxed/login-boxed.component';
import {RegisterBoxedComponent} from './DemoPages/UserPages/register-boxed/register-boxed.component';


import { PublicMasterComponent } from './Components/PublicSite/Layout/public-master/public-master.component';
import { LoginComponent } from './Components/AdminDashboard/Auth/login/login.component';
import { RegisterComponent } from './Components/AdminDashboard/Auth/register/register.component';



@NgModule({
  declarations: [

    // LAYOUT

    AppComponent,

    ForgotPasswordBoxedComponent,
    LoginBoxedComponent,
    RegisterBoxedComponent,


   
    PublicMasterComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AdminDashboardModule,

    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  

  ],
  providers: [
    ConfigActions,
  ],
  bootstrap: [AppComponent]
})

export class AppModule {

}
