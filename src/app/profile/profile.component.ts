import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireAuth } from "@angular/fire/auth";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private router: Router, public firestore: AngularFirestore, public storage: AngularFireStorage, public auth: AngularFireAuth) { }

  ngOnInit(): void {
    const usercol = this.firestore.collection('users');
    const logged_in = document.querySelectorAll<HTMLElement>('#loggedin');
    const logged_out = document.querySelectorAll<HTMLElement>('#loggedout');
    const button = <HTMLButtonElement>document.querySelector('#edit');
    const profile = <HTMLButtonElement>document.querySelector('.promain1');
    const edit = <HTMLButtonElement>document.querySelector('.promain2');
    const editform = <HTMLFormElement>document.querySelector('#edit-form');

    const displayusername = (data: any) => {
      const p1 = <HTMLSpanElement>document.querySelector('#profile-username');
      if(data.username){
        let username = data.username;
        p1.innerHTML = username;
      }
    }
    const disusername = (data: any) => {
      if(data.username){
        const p1 = <HTMLInputElement>document.querySelector('#edit-username');
        let username = data.username;
        p1.value = username;
      }
      else{}
    }

    const displayfullname = (data: any) => {
      const p2 = <HTMLSpanElement>document.querySelector('#profile-fullname');
      if(data.fullname){
        let fullname = data.fullname;
        p2.innerHTML = fullname;
      }
    }

    const disfullname = (data: any) => {
      if(data){
        const p1 = <HTMLInputElement>document.querySelector('#edit-fullname');
        let fullname = data.fullname;
        p1.value = fullname;
      }
      else{}
    }
    const displaygender = (data: any) => {
      const p2 = <HTMLSpanElement>document.querySelector('#profile-gender');
      if(data.gender){
        let gender = data.gender;
        p2.innerHTML = gender;
      }
      else{
        let gender = 'unknown';
        p2.innerHTML = gender;
      }
    }
    const disgender = (data: any) => {
      
      if(data.gender){
        const p1 = <HTMLInputElement>document.querySelector('#edit-gender');
        //let gender = data.gender;
        let gender = 'male';
        p1.value = gender;
      }
      else{}
    }

    const displaydob = (data: any) => {
      const p2 = <HTMLSpanElement>document.querySelector('#profile-dob');      
      if(data.dob){
        let dob = data.dob;
        p2.innerHTML = dob;
      }
      else{
        let dob = 'unknown';
        p2.innerHTML = dob;
      }
    }
    const disdob = (data: any) => {
      if(data.dob){
        const p1 = <HTMLInputElement>document.querySelector('#edit-dob');
        let dob = data.dob;
        p1.value = dob;
      }
      else{}
    }

    const displayphone = (data: any) => {
      const p2 = <HTMLSpanElement>document.querySelector('#profile-phone');      
      if(data.phone){
        let phone = data.phone;
        p2.innerHTML = phone;
      }
      else{
        let phone = 'unknown';
        p2.innerHTML = phone;
      }
    }
    const disphone = (data: any) => {
      if(data.phone){
        const p1 = <HTMLInputElement>document.querySelector('#edit-phone');
        let phone = data.phone;
        p1.value = phone;
      }
      else{}
    }

    const displaymail = (data: any) => {
      
      const p2 = <HTMLSpanElement>document.querySelector('#profile-mail');      
      if(data){
        let mail = data;
        p2.innerHTML = mail;
      }
      else{
        let mail = 'unknown';
        p2.innerHTML = mail;
      }
    }

    const dismail = (data: any) => {
      
      const p2 = <HTMLInputElement>document.querySelector('#edit-mail');
           
      if(data){
        p2.value = data;
      }
      else{
      }
    }


    const displayedit = (data: any, id: any, mail: any) => {
      this.firestore.collection('users').doc(id).ref.get().then((doc) => {
        
        var doct = doc.data();
        disfullname(doct);
        disusername(doct);
        disgender(doct);
        disdob(doct);
        disphone(doct);
        dismail(mail);
      });
    }

    this.auth.onAuthStateChanged((user) => {
      let id = user?.uid;
      let mail = user?.email;
      
      if (user){
        logged_in.forEach(item => item.style.display = 'block');
        logged_out.forEach(item => item.style.display = 'none');
        usercol.doc(id).ref.get().then((doc) => {
          var user = doc.data();
          displayusername(user);
          displayfullname(user);
          displaygender(user);
          displaydob(user);
          displayphone(user);
          displaymail(mail);
        })
      }else{
        logged_in.forEach(item => item.style.display = 'none');
        logged_out.forEach(item => item.style.display = 'block');
      }
    });

    
    

    
  }

}
