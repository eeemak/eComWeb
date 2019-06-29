import {Component, OnInit} from '@angular/core';
import {ThemeOptions} from '../../../../../theme-options';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/Services/token.service';

@Component({
  selector: 'app-user-box',
  templateUrl: './user-box.component.html',
})
export class UserBoxComponent implements OnInit {

  constructor(
    public globals: ThemeOptions,
    private Auth: AuthService,
    private router: Router,
    private Token: TokenService
    ) {
  }

  ngOnInit() {
  }
  logout(event: MouseEvent) {
    event.preventDefault();
    this.Token.remove();
    this.Auth.changeAuthStatus(false);
    this.router.navigateByUrl('/login');
  }

}
