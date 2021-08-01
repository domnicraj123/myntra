import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class WishlistComponent implements OnInit {

  constructor(public firestore: AngularFirestore,public storage:AngularFireStorage) {

  }

  ngOnInit(): void {

    function renderwish(doc: any){
      let div_sub = document.createElement('div');
      let div_img3 = document.createElement('div');
      let img = document.createElement('img');
      let a = document.createElement('a');
      let button1 = document.createElement('button'); 
      let button = document.createElement('button');
      let h4 = document.createElement('h4');
  
      div_sub.setAttribute('class','divsub1');
      div_sub.setAttribute('data-id',doc.id);
      div_img3.setAttribute('class','img3');
      div_img3.setAttribute('data-id',doc.id);
      img.src = doc.data().image;
      img.setAttribute('class','img2');
      a.setAttribute('class','add-to-wish');
      a.setAttribute('data-id',doc.id);
      button1.setAttribute('class','btnclose');
      button.setAttribute('class','wish');
      h4.setAttribute('class','dress');
      button.textContent = "Move to Bag";
      h4.textContent = doc.data().type;
      button1.textContent = "x";
  
      a.appendChild(button);
      div_img3.appendChild(img);
      div_img3.appendChild(a);
      div_img3.appendChild(button1);
      div_sub.appendChild(div_img3);
      div_sub.appendChild(h4);
      
      wish_rev.appendChild(div_sub);
      
      button1.addEventListener('click', (e:any) => {
        e.preventDefault();
        let id = e.target.parentElement.getAttribute('data-id');

        var product = doc.data().product;

        if (product>=1001 && product<=2000){
          querymen.ref.get().then((querySnapshot) => {
            querySnapshot.docs.forEach((doc) => {
              //rendermen(doc);
              changemenwish(doc,product);
            });
          })
        }
        else if (product>=2001 && product<=3000){
          querywomen.ref.get().then((querySnapshot) => {
            querySnapshot.docs.forEach((doc) => {
              //rendermen(doc);
              changewomenwish(doc,product);
            });
          })
        }
        else if (product>=3001 && product<=4000){
          querykid.ref.get().then((querySnapshot) => {
            querySnapshot.docs.forEach((doc) => {
              //rendermen(doc);
              changekidwish(doc,product);
            });
          })
        }
        //console.log(id);

        query.doc(id).delete();
        wish_rev.removeChild(div_sub)
      });

      button.addEventListener('click', (e:any) => {
        e.preventDefault();
        let id = e.target.parentElement.getAttribute('data-id');

        querycart.doc(id).ref.get().then((querysnapshot) => {
          var image = doc.data().image;
          var type = doc.data().type;
          var product = doc.data().product;
          var price = doc.data().price;
          var cat = doc.data().category;
          querycart.add({
            image: image,
            product: product,
            type: type,
            price: price,
            category: cat
          })
          query.doc(id).delete();
          wish_rev.removeChild(div_sub);
        });
      });
    } 

    function changemenwish(doc: any,product:any){
      var pro = doc.data().product;
      if (pro == product){
        querymen.doc(doc.id).update({wish: false});
      }
    }
    function changewomenwish(doc: any,product:any){
      var pro = doc.data().product;
      if (pro == product){
        querywomen.doc(doc.id).update({wish: false});
      }
    }
    function changekidwish(doc: any,product:any){
      var pro = doc.data().product;
      if (pro == product){
        querykid.doc(doc.id).update({wish: false});
      }
    }
    const wish_rev = <HTMLDivElement>document.querySelector('#wish-rev');
    
    let query = this.firestore.collection('wishlist');
    let querycart = this.firestore.collection('cart');
    let querymen = this.firestore.collection('men');
    let querywomen = this.firestore.collection('women');
    let querykid = this.firestore.collection('kid');

    query.ref.get().then((querySnapshot) => {
      querySnapshot.docs.forEach((doc) => {
        renderwish(doc);
      });
    }) 

  }

}
