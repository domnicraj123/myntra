import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireAuth } from "@angular/fire/auth";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router: Router, public firestore: AngularFirestore,public storage:AngularFireStorage, public auth:AngularFireAuth) { }

  ngOnInit(): void {
    const signupform = <HTMLFormElement>document.querySelector('#signup-form');
    const email = <HTMLInputElement> document.querySelector('#signup-email');
    const password = <HTMLInputElement> document.querySelector('#signup-pass');
    const username = <HTMLInputElement> document.querySelector('#signup-user');
    const fullname = <HTMLInputElement> document.querySelector('#signup-name');
    const gender = <HTMLInputElement> document.querySelector('#signup-gender');
    const phone = <HTMLInputElement> document.querySelector('#signup-phone');
    const dob= <HTMLInputElement> document.querySelector('#signup-dob');

    signupform.addEventListener('submit', (e) => {
      e.preventDefault();

      const mail = email.value;
      const user = username.value;
      const pass = password.value;
      const full = fullname.value;
      const date = dob.value;
      const sex = gender.value;
      const ph = phone.value;
      
      this.auth.createUserWithEmailAndPassword(mail, pass).then((cred) => {
        return this.firestore.collection('users').doc(cred.user?.uid).set({
           fullname: full,
           username: user,
           dob: date,
           gender: sex,
           phone: ph
        });
      }).then(() => {
        this.router.navigate(['home']);
      });

    });
  }

}
