import { Component, OnInit } from '@angular/core';
import { person } from '../Person/person';
import { DxDataGridComponent,
DxDataGridModule,
DxSelectBoxModule,
DxCheckBoxModule } from 'devextreme-angular';

@Component({
  selector: 'app-books-popup',
  templateUrl: './books-popup.component.html',
  styleUrls: ['./books-popup.component.scss']
})
export class BooksPopupComponent implements OnInit {
  
  popupVisible=false;
  dataGrid: any;
  gridArray:person[] = [];
  applyFilterTypes: any;
    currentFilter: any;
    showFilterRow: boolean;
    showHeaderFilter: boolean;

  
  constructor() 
  { 
    this.popupVisible=true;
    this.gridArray = [
      {"id":1,"name":"Areeba","address":"123 Street","phone_no":1,"password":"ab123"},
      {"id":2,"name": "Varisha", "address": "123 Street B", "phone_no": 3, "password":"bnmvc"}
    
    
    ];

    this.showFilterRow = true;
    this.showHeaderFilter = true;
    this.applyFilterTypes = [{
      key: "auto",
      name: "Immediately"
  }, {
      key: "onClick",
      name: "On Button Click"
  }];
  this.currentFilter = this.applyFilterTypes[0].key;


  }

  clearFilter() {
    this.dataGrid.instance.clearFilter();
}
  ngOnInit(): void {
  }

}
