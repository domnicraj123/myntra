import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireAuth } from "@angular/fire/auth";

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddressComponent implements OnInit {

  constructor(public firestore: AngularFirestore, public storage: AngularFireStorage, public auth: AngularFireAuth) { }

  ngOnInit(): void {
    const logged_in = document.querySelectorAll<HTMLElement>('#loggedin');
    const logged_out = document.querySelectorAll<HTMLElement>('#loggedout');
    const but_add = <HTMLButtonElement>document.querySelector('#add-address');
    const div_add = document.querySelectorAll<HTMLElement>('#divadd');
    const addressform = <HTMLFormElement>document.querySelector('#address-form');
    const name1 = <HTMLInputElement> document.querySelector('#address-name');
    const add1 = <HTMLInputElement> document.querySelector('#address-add');

    this.auth.onAuthStateChanged((user) => {
      let id_main = user?.uid;
      // let address = this.firestore.collection('users/'+id+'/address');
      let address = this.firestore.collection('users').doc(id_main).collection("address");

      function renderaddress(doc: any,no: number){
        let card = <HTMLDivElement>document.querySelector('#card'+no);
        let h5 = <HTMLElement>document.querySelector('#h'+no);
        let p = <HTMLElement>document.querySelector('#p'+no);
        let but_del = <HTMLButtonElement>document.querySelector('#but_del'+no);
        let div_but = <HTMLDivElement>document.querySelector('#div_but'+no);
        let br = <HTMLElement>document.querySelector('#br'+no);
        
        card.setAttribute('style','display: block');
        br.setAttribute('style','display: block');
        h5.textContent = doc.data().name;
        p.textContent = doc.data().address;
        div_but.setAttribute('data-id',doc.id);

        but_del.addEventListener('click', (e)=>{
          e.preventDefault();

          address.doc(doc.id).delete();
          h5.textContent = '';
          p.textContent = '';
          card.setAttribute('style','display: none');
          br.setAttribute('style','display: none');
        })
      }

      if(user){
        logged_in.forEach(item => item.style.display = 'block');
        logged_out.forEach(item => item.style.display = 'none');

        let no = 1;

        address.ref.get().then((querySnapshot) => {
          querySnapshot.docs.forEach((doc) => {
            if (no<6){
              renderaddress(doc,no);
            }
            no++;
          });
        });

        but_add.addEventListener('click', (e: any) => {
          e.preventDefault();
          logged_in.forEach(item => item.style.display = 'none');
          div_add.forEach(item => item.style.display = 'block');

          addressform.addEventListener('submit', (e: any) => {

            let name2 = name1.value;
            let add2 = add1.value;

            console.log(name2);
            console.log(add2);
            
            address.add({
              name: name2,
              address: add2
            }).then(() => {
              let card1 = <HTMLDivElement>document.querySelector('#card1');
              let card2 = <HTMLInputElement> document.querySelector('#card2');
              let card3 = <HTMLInputElement> document.querySelector('#card2');
              let card4 = <HTMLInputElement> document.querySelector('#card2');
              let card5 = <HTMLInputElement> document.querySelector('#card2');
              card1.setAttribute('style','display: none;');
              card2.setAttribute('style','display: none;');
              card3.setAttribute('style','display: none;');
              card4.setAttribute('style','display: none;');
              card5.setAttribute('style','display: none;');
              address.ref.get().then((querySnapshot) => {
                let n =1;

                querySnapshot.docs.forEach((doc) => {
                  if(n<6){
                    renderaddress(doc,n);
                  }
                  n++;
                });
              });

              logged_in.forEach(item => item.style.display = 'block');
              div_add.forEach(item => item.style.display = 'none');
            });
          })
        });
      }else{
        logged_in.forEach(item => item.style.display = 'none');
        logged_out.forEach(item => item.style.display = 'block');
      }
    });

  }

}
