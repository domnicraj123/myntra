import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-admin',
  templateUrl: './admin-admin.component.html',
  styleUrls: ['./admin-admin.component.css']
})
export class AdminAdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const add = <HTMLButtonElement> document.querySelector('#adminadd');
    const edit = <HTMLButtonElement> document.querySelector('#adminedit');
    const del = <HTMLButtonElement> document.querySelector('#admindel');

    add.addEventListener('click', (e: any) => {
      e.preventDefault();

      add.setAttribute('style','background-color: gray; color: white;');
      edit.setAttribute('style','background-color: transparent;');
      del.setAttribute('style','background-color: transparent;');
    });
    edit.addEventListener('click', (e: any) => {
      e.preventDefault();

      add.setAttribute('style','background-color: transparent;');
      edit.setAttribute('style','background-color: gray; color: white;');
      del.setAttribute('style','background-color: transparent;');
    });
    del.addEventListener('click', (e: any) => {
      e.preventDefault();

      add.setAttribute('style','background-color: transparent;');
      edit.setAttribute('style','background-color: transparent;');
      del.setAttribute('style','background-color: gray; color: white;');
    });
  }

}
