import { Component, OnInit, ViewEncapsulation, ElementRef } from '@angular/core';

@Component({
  selector: 'app-public-master',
  templateUrl: './page-not-found.component.html',
})
export class PageNotFoundComponent implements OnInit {
  heading = 'Page Not found';
  ngOnInit(): void {


  }
}
