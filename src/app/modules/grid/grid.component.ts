import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { loan, Service } from '../Loan/loan';


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  providers: [Service]
})
export class GridComponent implements OnInit {

  gridData:loan[];

  visibility:boolean=false;
  router: string;
  
  constructor(service:Service,private _router: Router) { 
    this.gridData=service.getGridData();
    this.router = _router.url;
  }

  ngOnInit(): void {
  }

}
