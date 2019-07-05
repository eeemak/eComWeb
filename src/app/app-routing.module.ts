import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {BaseLayoutComponent} from './Components/AdminDashboard/Layout/base-layout/base-layout.component';
import {PagesLayoutComponent} from './Components/AdminDashboard/Layout/pages-layout/pages-layout.component';
import {PublicMasterComponent} from './Components/PublicSite/Layout/public-master/public-master.component';

// DEMO PAGES

// Dashboards


// Pages

import {ForgotPasswordBoxedComponent} from './DemoPages/UserPages/forgot-password-boxed/forgot-password-boxed.component';
import {LoginBoxedComponent} from './DemoPages/UserPages/login-boxed/login-boxed.component';
import {RegisterBoxedComponent} from './DemoPages/UserPages/register-boxed/register-boxed.component';


import { LoginComponent } from './Components/AdminDashboard/Auth/login/login.component';
import { RegisterComponent } from './Components/AdminDashboard/Auth/register/register.component';
import { AuthGuardService } from './Services/auth-guard.service';
import { GuestGuardService } from './Services/guest-guard.service';

const routes: Routes = [
  {path: '', component: PublicMasterComponent},
  // Auth
  {
    path: 'admin',
    component: PagesLayoutComponent,
    children: [
      {path: '', component: LoginBoxedComponent, data: {extraParameter: ''}},
      {path: 'register', component: RegisterBoxedComponent, data: {extraParameter: ''}},
    ]
  },
  {
    path: '',
    component: PagesLayoutComponent,
    children: [

      // User Pages

      {path: 'pages/login-boxed', component: LoginBoxedComponent, data: {extraParameter: ''}},
      {path: 'pages/register-boxed', component: RegisterBoxedComponent, data: {extraParameter: ''}},
      {path: 'pages/forgot-password-boxed', component: ForgotPasswordBoxedComponent, data: {extraParameter: ''}},
    ]
  },
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
