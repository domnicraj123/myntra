import { Component, OnInit } from '@angular/core';

import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-living',
  templateUrl: './living.component.html',
  styleUrls: ['./living.component.css'],
  encapsulation: ViewEncapsulation.None
  
})
export class LivingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
