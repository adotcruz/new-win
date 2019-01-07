import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  scrollTo(ID: string) {
    // tslint:disable-next-line:prefer-const
    let el: HTMLElement = document.querySelector('#' + ID);
    console.log(el);
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
