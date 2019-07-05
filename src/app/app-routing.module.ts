import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {PublicMasterComponent} from './Components/PublicSite/Layout/public-master/public-master.component';
import {PageNotFoundComponent} from './Components/PublicSite/Layout/public-master/page-not-found.component';

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
  {path: '**',component: PageNotFoundComponent}
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
