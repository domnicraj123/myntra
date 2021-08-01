import { Component, OnInit } from '@angular/core';

import { AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-admin-addproduct',
  templateUrl: './admin-addproduct.component.html',
  styleUrls: ['./admin-addproduct.component.css']
})
export class AdminAddproductComponent implements OnInit {

  constructor(public firestore: AngularFirestore) { }

  ngOnInit(): void {
    //firebase
    let querymen = this.firestore.collection('men');
    let querywomen = this.firestore.collection('women');
    let querykid = this.firestore.collection('kid');

    //table base
    let thead = `
      <thead style=' border: 1px solid black; '>
        <th>product id</th>
        <th>product name</th>
        <th>product price</th>
        <th>image path</th>
        <th>button</th>
      </thead>
    `;
  
    // tab
    const add = <HTMLButtonElement> document.querySelector('#proadd');
    const edit = <HTMLButtonElement> document.querySelector('#proedit');
    const del = <HTMLButtonElement> document.querySelector('#prodel');
    const formadd = <HTMLFormElement> document.querySelector('#add-product');
    const formedit = <HTMLFormElement> document.querySelector('#edit-product');
    const formdel = <HTMLFormElement> document.querySelector('#del-product');
    const formdia = <HTMLFormElement>document.querySelector('#diaform');

    add.addEventListener('click', (e: any) => {
      e.preventDefault();

      add.setAttribute('style','background-color: gray; color: white;');
      edit.setAttribute('style','background-color: transparent;');
      del.setAttribute('style','background-color: transparent;');

      formadd.setAttribute('style','display: block;');
      formedit.setAttribute('style','display: none;');
      formdel.setAttribute('style','display: none;');

      edittable.setAttribute('style','display: none;');
      deltable.setAttribute('style','display: none;');
    });
    edit.addEventListener('click', (e: any) => {
      e.preventDefault();

      add.setAttribute('style','background-color: transparent;');
      edit.setAttribute('style','background-color: gray; color: white;');
      del.setAttribute('style','background-color: transparent;');

      formadd.setAttribute('style','display: none;');
      formedit.setAttribute('style','display: block;');
      formdel.setAttribute('style','display: none;');

      edittable.setAttribute('style','display: inline-block; border: 1px solid black; text-align: center;');
      deltable.setAttribute('style','display: none;');
    });
    del.addEventListener('click', (e: any) => {
      e.preventDefault();

      add.setAttribute('style','background-color: transparent;');
      edit.setAttribute('style','background-color: transparent;');
      del.setAttribute('style','background-color: gray; color: white;');

      formadd.setAttribute('style','display: none;');
      formedit.setAttribute('style','display: none;');
      formdel.setAttribute('style','display: block;');

      edittable.setAttribute('style','display: none;');
      deltable.setAttribute('style','display: inline-block; border: 1px solid black; text-align: center;');
    });

    //add

    formadd.addEventListener('submit',(e: any)=>{
      e.preventDefault();

      let procol = <HTMLSelectElement>document.querySelector('#proadd-collection');
      let proid = <HTMLInputElement>document.querySelector('#proadd-id');
      let proname = <HTMLInputElement>document.querySelector('#proadd-name');
      let proprice = <HTMLInputElement>document.querySelector('#proadd-price');
      let proimg = <HTMLInputElement> document.querySelector('#proadd-img');

      if (procol.value == 'men'){
        querymen.add({
          cat: 'men',
          image: proimg.value,
          price: parseInt(proprice.value),
          product: parseInt(proid.value),
          type: proname.value,
          wish: false
        }).then(()=>{
          formadd.reset();
          alert('product added succesfully');
        });
      }
      else if (procol.value == 'women'){
        querywomen.add({
          cat: 'women',
          image: proimg.value,
          price: parseInt(proprice.value),
          product: parseInt(proid.value),
          type: proname.value,
          wish: false
        }).then(()=>{
          formadd.reset();
          alert('product added succesfully');
        });
      }else if (procol.value == 'kid'){
        querykid.add({
          cat: 'kid',
          image: proimg.value,
          price: parseInt(proprice.value),
          product: parseInt(proid.value),
          type: proname.value,
          wish: false
        }).then(()=>{
          formadd.reset();
          alert('product added succesfully');
        });
      }
    });

    //edit
    let editcol = <HTMLSelectElement>document.querySelector('#proedit-collection');
    // let editser = <HTMLSelectElement>document.querySelector('#proedit-ser');
    let edittable = <HTMLTableElement>document.querySelector('#proedit-table');
    
    edittable.innerHTML = thead;
    querymen.ref.get().then((querySnapshot) => {
      querySnapshot.docs.forEach((doc) => {
        addtableedit(doc);
      });
    });

    function addtableedit(doc: any){
      let tr = document.createElement('tr');
      let td1 = document.createElement('td');
      let td2 = document.createElement('td');
      let td3 = document.createElement('td');
      let td4 = document.createElement('td');
      let td5 = document.createElement('td');
      let but = document.createElement('button');
      let editicon = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
          <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
        </svg>
      `;

      tr.setAttribute('id',doc.id);
      tr.setAttribute('style',' border: 1px solid black; ')
      but.setAttribute('type','button');

      td1.textContent = doc.data().product;
      td2.textContent = doc.data().type;
      td3.textContent = doc.data().price;
      td4.textContent =doc.data().image;
      but.innerHTML = editicon;

      td5.appendChild(but);

      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);
      tr.appendChild(td5);

      edittable.appendChild(tr);

      but.addEventListener('click', (e: any) => {
        e.preventDefault();
        let id = doc.id;
        console.log(id);
        let dia = <HTMLDialogElement>document.querySelector("#myDialog");
        let diaclose = <HTMLButtonElement>document.querySelector('#diaclose');

        let diaid = <HTMLInputElement>document.querySelector('#prodia-id');
        let dianame = <HTMLInputElement>document.querySelector('#prodia-name');
        let diaprice = <HTMLInputElement>document.querySelector('#prodia-price');
        let diaimg = <HTMLInputElement> document.querySelector('#prodia-img');

        dia.showModal();
        diaid.value = doc.data().product;
        dianame.value = doc.data().type;
        diaprice.value = doc.data().price;
        diaimg.value = doc.data().image;

        formdia.addEventListener('submit',(e: any) => {
          if(doc.data().cat == 'men'){
            querymen.doc(id).update({
              product: parseInt(diaid.value), 
              type: dianame.value, 
              price: parseInt(diaprice.value),
              image: diaimg.value
            }).then(() => {
              diaid.value = '';
              dianame.value = '';
              diaprice.value = '';
              diaimg.value = '';

              dia.close();
            });
          }else if(doc.data().cat == 'women'){
            querywomen.doc(id).update({
              product: parseInt(diaid.value), 
              type: dianame.value, 
              price: parseInt(diaprice.value),
              image: diaimg.value
            }).then(() => {
              diaid.value = '';
              dianame.value = '';
              diaprice.value = '';
              diaimg.value = '';

              dia.close();
            });
          }else if(doc.data().cat == 'kid'){
            querykid.doc(id).update({
              product: parseInt(diaid.value), 
              type: dianame.value, 
              price: parseInt(diaprice.value),
              image: diaimg.value
            }).then(() => {
              diaid.value = '';
              dianame.value = '';
              diaprice.value = '';
              diaimg.value = '';

              dia.close();
            });
          }
        });

        diaclose.addEventListener('click', (e: any) => {
          e.preventDefault();
          dia.close();
        })

      });
    }

    editcol.addEventListener('change',(e: any)=>{
      e.preventDefault();

      if(editcol.value == 'men'){
        edittable.innerHTML = thead;
        querymen.ref.get().then((querySnapshot) => {
          querySnapshot.docs.forEach((doc) => {
            addtableedit(doc);
          });
        });
      }else if (editcol.value == 'women'){
        edittable.innerHTML = thead;
        querywomen.ref.get().then((querySnapshot) => {
          querySnapshot.docs.forEach((doc) => {
            addtableedit(doc);
          });
        });
      }else if (editcol.value == 'kids'){
        edittable.innerHTML = thead;
        querykid.ref.get().then((querySnapshot) => {
          querySnapshot.docs.forEach((doc) => {
            addtableedit(doc);
          });
        });
      }
    });

    //delete

    let delcol = <HTMLSelectElement>document.querySelector('#prodel-collection');
    // let editser = <HTMLSelectElement>document.querySelector('#proedit-ser');
    let deltable = <HTMLTableElement>document.querySelector('#prodel-table');

    deltable.innerHTML = thead;
    querymen.ref.get().then((querySnapshot) => {
      querySnapshot.docs.forEach((doc) => {
        addtabledel(doc);
      });
    });

    function addtabledel(doc: any){
      let tr = document.createElement('tr');
      let td1 = document.createElement('td');
      let td2 = document.createElement('td');
      let td3 = document.createElement('td');
      let td4 = document.createElement('td');
      let td5 = document.createElement('td');
      let but = document.createElement('button');
      let delicon = `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
      </svg>
      `;

      tr.setAttribute('id',doc.id);
      tr.setAttribute('style',' border: 1px solid black; ')
      but.setAttribute('type','button');

      td1.textContent = doc.data().product;
      td2.textContent = doc.data().type;
      td3.textContent = doc.data().price;
      td4.textContent =doc.data().image;
      but.innerHTML = delicon;

      td5.appendChild(but);

      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);
      tr.appendChild(td5);

      deltable.appendChild(tr);

      but.addEventListener('click',(e) => {
        let id = doc.id;
        e.preventDefault();
        if(doc.data().cat == 'men'){
          deltable.removeChild(tr);
          querymen.doc(id).delete();
        }else if (doc.data().cat == 'women'){
          deltable.removeChild(tr);
          querywomen.doc(id).delete();
        }else if(doc.data().cat == 'kid'){
          deltable.removeChild(tr);
          querykid.doc(id).delete();
        }
      });
    }

    delcol.addEventListener('change',(e: any)=>{
      e.preventDefault();

      if(delcol.value == 'men'){
        deltable.innerHTML = thead;
        querymen.ref.get().then((querySnapshot) => {
          querySnapshot.docs.forEach((doc) => {
            addtabledel(doc);
          });
        });
      }else if (delcol.value == 'women'){
        deltable.innerHTML = thead;
        querywomen.ref.get().then((querySnapshot) => {
          querySnapshot.docs.forEach((doc) => {
            addtabledel(doc);
          });
        });
      }else if (delcol.value == 'kids'){
        deltable.innerHTML = thead;
        querykid.ref.get().then((querySnapshot) => {
          querySnapshot.docs.forEach((doc) => {
            addtabledel(doc);
          });
        });
      }
    });

    formdel.addEventListener('submit',(e: any)=>{
      e.preventDefault();

    });
  }

}
