import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';
import { TokenService } from 'src/app/Services/token.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  public form = {
    email: null,
    name: null,
    password: null,
    password_confirmation: null
  };
  public error = [];

  constructor(
    private dataService: DataService,
    private Token: TokenService,
    private router: Router,
    private Auth: AuthService
  ) { }

  onSubmit() {
    this.dataService.signup(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }
  handleResponse(data) {
    this.Token.handle(data.access_token);
    this.Auth.changeAuthStatus(true);
    this.router.navigateByUrl('dashboard');
  }

  handleError(error) {
    this.error = error.error.errors;
  }

  ngOnInit() {
  }

}
