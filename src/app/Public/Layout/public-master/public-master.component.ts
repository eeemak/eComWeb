import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/Services/token.service';

@Component({
  selector: 'app-public-master',
  templateUrl: './public-master.component.html',
  styleUrls: ['./public-master.component.sass']
})
export class PublicMasterComponent implements OnInit {

  public loggedIn : Boolean
  constructor(private Token: TokenService) { }

  ngOnInit() {
    this.loggedIn = this.Token.loggedIn();
  }

}
