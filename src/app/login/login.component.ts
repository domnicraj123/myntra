import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireAuth } from "@angular/fire/auth";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, public firestore: AngularFirestore,public storage:AngularFireStorage, public auth:AngularFireAuth) { }

  ngOnInit(): void {
    const loginform = <HTMLFormElement> document.querySelector('#login-form');
    const email = <HTMLInputElement> document.querySelector('#login-email');
    const password = <HTMLInputElement> document.querySelector('#login-pass');

    loginform.addEventListener('submit', (e) => {
      e.preventDefault();

      const mail = email.value;
      const pass = password.value;

      this.auth.signInWithEmailAndPassword(mail, pass).then((cred) => {
        this.router.navigate(['home']);
      });
    });
  }

}
