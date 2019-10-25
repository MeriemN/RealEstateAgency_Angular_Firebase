import { Component } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
 constructor(){
  var config = {
    apiKey: "AIzaSyCRqE06Kq_RA4lObxomrePB3Cta3NOhxd8",
    authDomain: "myapp-330f0.firebaseapp.com",
    databaseURL: "https://myapp-330f0.firebaseio.com",
    projectId: "myapp-330f0",
    storageBucket: "myapp-330f0.appspot.com",
    messagingSenderId: "755695824987",
    appId: "1:755695824987:web:ef1bcb92587f518ce0cf7e",
    measurementId: "G-9EPR6ZT1FQ"
  };
  // Initialize Firebase
  firebase.initializeApp(config);
  firebase.analytics();

 }
}
