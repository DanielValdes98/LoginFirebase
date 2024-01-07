import { Component, inject } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LoginFirebase';
  firestore: Firestore = inject(Firestore);

  constructor() {

  }
}
