import { Component, OnInit } from '@angular/core';
import { onhold, Service } from '../OnHold/onhold';

@Component({
  selector: 'app-onhold-grid',
  templateUrl: './onhold-grid.component.html',
  styleUrls: ['./onhold-grid.component.css'],
  providers: [Service]
})
export class onholdgridComponent implements OnInit {



  visibility:boolean=true;
  gridData:onhold[];

  constructor(service:Service) {this.gridData=service.getGridData() }

  ngOnInit(): void {
  }

}
