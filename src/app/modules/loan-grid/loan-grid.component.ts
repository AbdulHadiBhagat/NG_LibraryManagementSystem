import { Component, OnInit } from '@angular/core';
import { onhold, Service } from '../OnHold/onhold';

@Component({
  selector: 'app-loan-grid',
  templateUrl: './loan-grid.component.html',
  styleUrls: ['./loan-grid.component.css'],
  providers: [Service]
})
export class LoanGridComponent implements OnInit {



  
  gridData:onhold[];

  constructor(service:Service) {this.gridData=service.getGridData() }

  ngOnInit(): void {
  }

}
