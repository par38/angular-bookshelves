import { Component } from '@angular/core';

import * as firebase from 'firebase'
import { environment } from '../environments/environment'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bookshelves';
  constructor() {

  // Initialize Firebase
    // + variables d'environnement de connexion à Firebase placées en environment.ts, 
    // + le dossier environments/ ajouté au .gitignore
  firebase.initializeApp(environment.firebaseConfig);
  }
}
