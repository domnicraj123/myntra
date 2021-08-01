import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CartComponent implements OnInit {

  constructor(public firestore: AngularFirestore,public storage:AngularFireStorage) { }

  ngOnInit(): void {
    function rendercart(doc: any){
      let div_card = document.createElement('div');
      let div_row1 = document.createElement('div');
      let div_col4 = document.createElement('div');
      let img = document.createElement('img');
      let div_col8 = document.createElement('div');
      let div_row2 = document.createElement('div');
      let div_col6_1 = document.createElement('div');
      let div_body_1 = document.createElement('div');
      let b = document.createElement('b');
      let p1 = document.createElement('p');
      let p2_1 = document.createElement('p');
      let p2_2 = document.createElement('p');
      let select1 = document.createElement('select');
      let o1 = document.createElement('option');
      let o2 = document.createElement('option');
      let o3 = document.createElement('option');
      let o4 = document.createElement('option');
      let o5 = document.createElement('option');
      let select2 = document.createElement('select');
      let o01 = document.createElement('option');
      let o02 = document.createElement('option');
      let o03 = document.createElement('option');
      let o04 = document.createElement('option');
      let o05 = document.createElement('option');
      let o06 = document.createElement('option');
      let o07 = document.createElement('option');
      let o08 = document.createElement('option');
      let o09 = document.createElement('option');
      let o010 = document.createElement('option');
      let button1 = document.createElement('button');
      let button2 = document.createElement('button');
      // let div_col6_2 = document.createElement('div');
      let div_body_2 = document.createElement('div');
      let p3 = document.createElement('p');
      let p4 = document.createElement('p');
      let small = document.createElement('small');
      let s = document.createElement('s');
      let span = document.createElement('span');
      let br = document.createElement('br');
      let div_row3 = document.createElement('div');
      let div_col12 = document.createElement('div');
      let button3 = document.createElement('button');

      div_card.setAttribute('class','card');
      div_card.setAttribute('class','cartcard');
      div_row1.setAttribute('class','row');
      div_col4.setAttribute('class','col-md-4');
      img.src = doc.data().image;
      img.setAttribute('class','cartimg2');
      div_col8.setAttribute('class','col-md-8');
      div_row2.setAttribute('class','row');
      div_col6_1.setAttribute('class','col-md-12');
      div_body_1.setAttribute('class','card-body');
      div_body_1.setAttribute('data-id',doc.id);
      button1.setAttribute('class','cartbutgap');
      // div_col6_2.setAttribute('class','col-md-6');
      div_body_2.setAttribute('class','card-body');
      p3.setAttribute('class','cartright');
      p4.setAttribute('class','cartright');
      small.setAttribute('class','text-muted');
      span.setAttribute('class','cartp3');
      div_row3.setAttribute('class','row');
      div_col12.setAttribute('class','col-md-12 cartplace');
      button3.setAttribute('class','order');
      select1.setAttribute('id','size'+doc.data().product);
      select2.setAttribute('id','qty'+doc.data().product);

      div_col4.appendChild(img);
      div_row1.appendChild(div_col4);
      div_card.appendChild(div_row1);

      b.textContent = doc.data().category;
      div_body_1.appendChild(b);

      p1.textContent += doc.data().type;
      let html = `<div style="width: 100%;"><p>${doc.data().type}<span style="width: 30%; float: right;">Rs. ${doc.data().price}</span></p></div>`;
      div_body_1.innerHTML += html;

      p2_1.textContent = "SIZE:";
      p2_1.innerHTML += '&nbsp;';

      o1.setAttribute('value', '38');
      o1.textContent = "38";
      o2.setAttribute('value', '40');
      o2.textContent = "40";
      o3.setAttribute('value', '42');
      o3.textContent = "42";
      o4.setAttribute('value', '44');
      o4.textContent = "44";
      o5.setAttribute('value', '46');
      o5.textContent = "46";

      select1.appendChild(o1);
      select1.appendChild(o2);
      select1.appendChild(o3);
      select1.appendChild(o4);
      select1.appendChild(o5);

      p2_1.appendChild(select1);
      div_body_1.appendChild(p2_1);


      p2_2.textContent += "Qty:";
      p2_2.innerHTML += '&nbsp;';

      o01.setAttribute('value', '1');
      o01.textContent = "1";
      o02.setAttribute('value', '2');
      o02.textContent = "2";
      o03.setAttribute('value', '3');
      o03.textContent = "3";
      o04.setAttribute('value', '4');
      o04.textContent = "4";
      o05.setAttribute('value', '5');
      o05.textContent = "5";
      o06.setAttribute('val6e', '6');
      o06.textContent = "6";
      o07.setAttribute('val7e', '7');
      o07.textContent = "7";
      o08.setAttribute('vale', '8');
      o08.textContent = "8";
      o09.setAttribute('value', '9');
      o09.textContent = "9";
      o010.setAttribute('value', '10');
      o010.textContent = "10";

      select2.appendChild(o01);
      select2.appendChild(o02);
      select2.appendChild(o03);
      select2.appendChild(o04);
      select2.appendChild(o05);
      select2.appendChild(o06);
      select2.appendChild(o07);
      select2.appendChild(o08);
      select2.appendChild(o09);
      select2.appendChild(o010);

      p2_2.appendChild(select2);
      div_body_1.appendChild(p2_2);

      button1.textContent = "remove";
      div_body_1.appendChild(button1);
      button2.textContent = "move to wishlist";
      div_body_1.appendChild(button2);

      div_col6_1.appendChild(div_body_1);
      div_row2.appendChild(div_col6_1);

      // div_body_2.appendChild(br);
      // div_col6_2.appendChild(div_body_2);
      p3.textContent = "Rs. "+doc.data().price;
      div_body_2.appendChild(p3);

      // div_row2.appendChild(div_col6_2);

      div_col8.appendChild(div_row2);
      div_row1.appendChild(div_col8);

      div_card.appendChild(div_row1);

      order_rev.appendChild(div_card);


      button1.addEventListener('click', (e:any) => {
        e.preventDefault();
        let id = e.target.parentElement.getAttribute('data-id');

        var product = doc.data().product;

        if (product>=1001 && product<=2000){
          querymen.ref.get().then((querySnapshot) => {
            querySnapshot.docs.forEach((doc) => {
              changemenwish(doc,product);
            });
          })
        }
        else if (product>=2001 && product<=3000){
          querywomen.ref.get().then((querySnapshot) => {
            querySnapshot.docs.forEach((doc) => {
              changewomenwish(doc,product);
            });
          })
        }
        else if (product>=3001 && product<=4000){
          querykid.ref.get().then((querySnapshot) => {
            querySnapshot.docs.forEach((doc) => {
              changekidwish(doc,product);
            });
          })
        }
        //console.log(id);

        querycart.doc(id).delete();
        order_rev.removeChild(div_card);
      });

      button2.addEventListener('click', (e:any) => {
        e.preventDefault();
        let id = e.target.parentElement.getAttribute('data-id');

        querywish.doc(id).ref.get().then((querysnapshot) => {
          var image = doc.data().image;
          var type = doc.data().type;
          var product = doc.data().product;
          var price = doc.data().price;
          var cat = doc.data().category;
          querywish.add({
            image: image,
            product: product,
            type: type,
            price: price,
            category: cat
          })
          querycart.doc(id).delete();
          order_rev.removeChild(div_card);
        })
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

    const order_rev = <HTMLDivElement>document.querySelector('#order-rev');

    let querycart = this.firestore.collection('cart');
    let querywish = this.firestore.collection('wishlist');
    let querymen = this.firestore.collection('men');
    let querywomen = this.firestore.collection('women');
    let querykid = this.firestore.collection('kid');

    querycart.ref.get().then((querySnapshot) => {
      querySnapshot.docs.forEach((doc) => {
        rendercart(doc);
      });
    });

    function rendertable(doc: any){
      let size = <HTMLSelectElement>document.querySelector('#size'+doc.data().product);
      let qty = <HTMLSelectElement>document.querySelector('#qty'+doc.data().product);
      let q = parseInt(qty.value);
      let html =``;
      let price = parseInt(doc.data().price) * q;
      
      // let price = doc.data().price * ;
      html+=`
        <tbody>
          <td>${doc.data().product}</td>
          <td>${doc.data().type}</td>
          <td>${size.value}</td>
          <td>${qty.value}</td>
          <td>${price}</td>
        </tbody>
      `;
      table.innerHTML += html;
    }

    const order = <HTMLButtonElement>document.querySelector('.cartorder');
    const table = <HTMLDivElement>document.querySelector('#modaltable'); 
    order.addEventListener('click', (e) =>{
      e.preventDefault();
      table.innerHTML = `
      <thead>
        <th>productID</th>
        <th>product name</th>
        <th>size</th>
        <th>quantity</th>
        <th>price</th>
      </thead>
      `;
      let html = ``;
      querycart.ref.get().then((querySnapshot) => {
        querySnapshot.docs.forEach((doc) => {
          rendertable(doc);
        });
      });
      

    });


  }

}
