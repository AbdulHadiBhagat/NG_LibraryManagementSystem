import { Component, OnInit, ViewChild } from '@angular/core';
import { persons } from '../Common/persons/persons';
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
  @ViewChild('grid', { static: false }) dataGrid: any;
  popupVisible=false;
  gridArray:persons[] = [];
  booksPopupVisible=false;
  applyFilterTypes: any;
    currentFilter: any;
    showFilterRow: boolean;
    showHeaderFilter: boolean;
    selectedRowsData = [];
    getSelectedData() {

      this.selectedRowsData = this.dataGrid.instance.getSelectedRowsData()[0].address;
    console.log("a");
     console.log(this.selectedRowsData)
      
      
    }
  
  
  constructor() 
  { 
    this.booksPopupVisible=true;
    this.gridArray = [
      {"id":1,"name":"Areeba","address":"123 Street","phone_no":1,"password":"ab123"},
      {"id":2,"name": "Varisha", "address": "123 Street B", "phone_no": 3, "password":"bnmvc"},
      {"id":3, "name": "Musfirah","address":"er43 street", "phone_no": 123456,"password":"poiuytr"}
    
    
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
