import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireAuth } from "@angular/fire/auth";


@Component({
  selector: 'app-header',
  template: `
    <app-search [search1]="search"></app-search>
  `,
  templateUrl: './header.component.html',

  styleUrls: ['./header.component.css'],

  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, public firestore: AngularFirestore, public auth: AngularFireAuth) { }

  onClickMe(search: any) {
    //list
    let querykid = this.firestore.collection('kid');
    let querymen = this.firestore.collection('men');
    let querywomen = this.firestore.collection('women');

    let data1: any= [];

    querymen.ref.get().then((querySnapshot) => {
      querySnapshot.docs.forEach((doc) => {
        renderdata(doc);
      });
    })
    querywomen.ref.get().then((querySnapshot) => {
      querySnapshot.docs.forEach((doc) => {
        renderdata(doc);
      });
    })
    querykid.ref.get().then((querySnapshot) => {
      querySnapshot.docs.forEach((doc) => {
        renderdata(doc);
      });
    });

    function renderdata(doc: any) {
      var type = doc.data().type.toLowerCase();
      var cat = doc.data().cat.toLowerCase();
      var image = doc.data().image;
      var product = doc.data().product;
      var price = doc.data().price;
      var id = doc.id;

      var dict = {
        "type": type,
        "cat": cat,
        "image": image,
        "product": product,
        "price": price,
        "id": id
      };
      data1.push(dict);
    }
    console.log('data',data1);
    

    //search
    const sh_rev = <HTMLDivElement>document.querySelector('#search-rev');
    let no: any = [];
    
    let result:any = [];
    

    for(var a = 0; a < data1.length; a++){
      if((data1[a].type.includes(search)) || data1[1].cat == search){
        result.push(data1[a])
      }else{}
    }

    var fdata: any= data1.filter((d1: any) => {
      return d1.type.includes(search) || d1.cat == search
    });

    // console.log('filter',result);
    
    
    if (no == 0) { }
    else {
      for (var j in no) {
        let div_sub = <HTMLInputElement>document.querySelector('.headsub1');
        sh_rev.removeChild(div_sub);
      }
      no = [];
      
    }
    
    if (search == "") {
    }
    else {
      for (var i in fdata) {
        let div_sub = document.createElement('div');
        let div_img3 = document.createElement('div');
        let img = document.createElement('img');
        let a = document.createElement('a');
        let button = document.createElement('button');
        let h4 = document.createElement('h4');

        div_sub.setAttribute('class', 'headsub1');
        div_img3.setAttribute('class', 'headimg3');
        img.src = fdata[i].image;
        img.setAttribute('class', 'headimg2');
        a.setAttribute('class', 'headadd-to-wish');
        a.setAttribute('data-id', fdata[i].id);
        button.setAttribute('class', 'headwish');
        button.setAttribute('id', '#men-wish');
        h4.setAttribute('class', 'headdress');
        div_sub.setAttribute('data-id', fdata[i].id);
        button.textContent = "Wish";
        h4.textContent = fdata[i].type;

        a.appendChild(button);
        div_img3.appendChild(img);
        div_img3.appendChild(a);
        div_sub.appendChild(div_img3);
        div_sub.appendChild(h4);

        console.log(div_sub);

        sh_rev.appendChild(div_sub);
        no.push(fdata[i].id);
      }

    }
  }

  ngOnInit(): void {
    function check(){
      console.log('working');
    }

    const logged_in = document.querySelectorAll<HTMLElement>('#loggedin');
    const logged_out = document.querySelectorAll<HTMLElement>('#loggedout');
    const p = <HTMLSpanElement>document.querySelector('#login-wish');
    const p1 = <HTMLSpanElement>document.querySelector('#login-wish1');
    const usercol = this.firestore.collection('users');

    const Displayuser = (data: any) => {
      if(data.username.length){
        let html = 'hi ';
        const li = `
          ${data.username}
        `;
        html += li;
        p.innerHTML = html;
        p1.innerHTML = html;
      }
      else {
        p.innerHTML = 'hi no';
      }
      
    };

    // listen for auth status changes
    this.auth.onAuthStateChanged((user) => {

      if (user) {
        logged_in.forEach(item => item.style.display = 'block');
        logged_out.forEach(item => item.style.display = 'none');
        let id = user?.uid;

        usercol.doc(id).ref.get().then((doc) => {
          var user = doc.data();
          Displayuser(user);
        }, err => {
          console.log(err.message);
        });
      }
      else {
        logged_in.forEach(item => item.style.display = 'none');
        logged_out.forEach(item => item.style.display = 'block');
      }
    });


    const logout = <HTMLButtonElement>document.querySelector('#logout');
    const logout1 = <HTMLButtonElement>document.querySelector('#logout1');

    logout.addEventListener('click', (e) => {
      e.preventDefault();
      this.auth.signOut().then(() => {
        this.router.navigate(['home']);
      });
    });
    logout1.addEventListener('click', (e) => {
      e.preventDefault();
      this.auth.signOut().then(() => {
        this.router.navigate(['home']);
      });
    });
    //list
    let querykid = this.firestore.collection('kid');
    let querymen = this.firestore.collection('men');
    let querywomen = this.firestore.collection('women');

    let data: any= [];

    function renderdata(doc: any) {
      var type = doc.data().type.toLowerCase();
      var cat = doc.data().cat.toLowerCase();
      var image = doc.data().image;
      var product = doc.data().product;
      var price = doc.data().price;
      var id = doc.id;

      var dict = {
        "type": type,
        "cat": cat,
        "image": image,
        "product": product,
        "price": price,
        "id": id
      };
      data.push(dict);
    }

    querymen.ref.get().then((querySnapshot) => {
      querySnapshot.docs.forEach((doc) => {
        renderdata(doc);
      });
    })
    querywomen.ref.get().then((querySnapshot) => {
      querySnapshot.docs.forEach((doc) => {
        renderdata(doc);
      });
    })
    querykid.ref.get().then((querySnapshot) => {
      querySnapshot.docs.forEach((doc) => {
        renderdata(doc);
      });
    });
    console.log(data.size);
    
    

    //search
    const ser = <HTMLInputElement>document.querySelector('#search');
    const ser1 = <HTMLInputElement>document.querySelector('#search1');
    const but = <HTMLButtonElement>document.querySelector('.headbutser');
    const but1 = <HTMLButtonElement>document.querySelector('.headbutser1');
    const search_rev = <HTMLDivElement>document.querySelector('#search-rev');

    let no: any = [];

    but.addEventListener('click', (e: any) => {
      const search = ser.value.toLowerCase();
      funsearch(search);
    });

    but1.addEventListener('click', (e: any) => {
      const search = ser1.value.toLowerCase();
      funsearch(search);
    });

    //function Search
    function funsearch(search: any){
      
      const filtereddata = data.filter((d: any) => {
        return d.type.includes(search) || d.cat == search
      })
      if (no == 0) { }
      else {
        for (var j in no) {
          let div_sub = <HTMLInputElement>document.querySelector('.headsub1');
          search_rev.removeChild(div_sub);
        }
        no = [];
      }

      if (search == "") {

      }
      else {
        for (var i in filtereddata) {
          let div_sub = document.createElement('div');
          let div_img3 = document.createElement('div');
          let img = document.createElement('img');
          let a = document.createElement('a');
          let button = document.createElement('button');
          let h4 = document.createElement('h4');

          div_sub.setAttribute('class', 'headsub1');
          div_img3.setAttribute('class', 'headimg3');
          img.src = filtereddata[i].image;
          img.setAttribute('class', 'headimg2');
          a.setAttribute('class', 'headadd-to-wish');
          a.setAttribute('data-id', filtereddata[i].id);
          button.setAttribute('class', 'headwish');
          button.setAttribute('id', '#men-wish');
          h4.setAttribute('class', 'headdress');
          div_sub.setAttribute('data-id', filtereddata[i].id);
          button.textContent = "Wish";
          h4.textContent = filtereddata[i].type;

          a.appendChild(button);
          div_img3.appendChild(img);
          div_img3.appendChild(a);
          div_sub.appendChild(div_img3);
          div_sub.appendChild(h4);

          search_rev.appendChild(div_sub);
          no.push(filtereddata[i].id);

        }

      }
    }

    const open = <HTMLElement>document.querySelector('#openNav');
    const close = <HTMLElement>document.querySelector('#closeNav');
    const sidebar  = <HTMLDivElement>document.getElementById("mySidenav");
    open.addEventListener('click',(e)=>{
      sidebar.style.width = "250px";
    });
    close.addEventListener('click', (e)=>{
      sidebar.style.width = "0px";
    })
    
  }
}