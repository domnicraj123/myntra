import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore} from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private router: Router,public db: AngularFirestore, public auth: AngularFireAuth) { }

  ngOnInit(): void {
    const partadmin = <HTMLDivElement>document.querySelector('#admin');
    const admin = this.db.collection('admin');

    function loginadmin(doc:any, user:any){
      
      if(user == doc.data().username){
        partadmin.setAttribute('style','display: block;');
      }
      else{
        
      }
    }

    this.auth.onAuthStateChanged((user) => {
      let mail = user?.email;
      
      if (user){
        admin.ref.get().then((querySnapshot) => {
          querySnapshot.docs.forEach((doc) => {
            loginadmin(doc,mail);
          });
        });
        
      }else{
        this.router.navigate(['home']);
      }
    });
  }

}
