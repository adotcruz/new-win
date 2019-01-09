import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  @Output() scrollTo = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  scroll(ID: string) {
    console.log('id is:', ID);
    this.scrollTo.emit(ID);
  }
}
