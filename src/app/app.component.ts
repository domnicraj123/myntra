import { Component } from '@angular/core';
//import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myntra';
  
  //constructor(private db: AngularFirestore) {
    //db.settings({ timestampsInSnapshots: true });

    //const things = db.collection('things').valueChanges();
    //things.subscribe(console.log);
  //}
}
