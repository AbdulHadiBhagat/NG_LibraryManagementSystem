import { Component, OnInit } from '@angular/core';
import { loan, Service } from '../Loan/loan';


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  providers: [Service]
})
export class GridComponent implements OnInit {

  gridData:loan[];
  
  constructor(service:Service) { this.gridData=service.getGridData()}

  ngOnInit(): void {
  }

}
