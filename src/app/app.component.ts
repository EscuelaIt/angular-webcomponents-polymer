import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-webcomponents-polymer';
  email = 'malvarez@escuela.it';
  counter = 3;
  finalized = false;

  counterFinalized(e) {
    console.log(`finalizado con ${e.detail}`);
    this.finalized = true;
  }
}
