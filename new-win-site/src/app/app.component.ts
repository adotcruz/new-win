import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'new-win-site';

  scrollTo(ID: string) {
    // tslint:disable-next-line:prefer-const
    let el: HTMLElement = document.querySelector('#' + ID);
    el.scrollIntoView({ behavior: 'smooth' });
  }
}
