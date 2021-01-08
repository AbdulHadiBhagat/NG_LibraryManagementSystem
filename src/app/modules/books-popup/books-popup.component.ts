import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { persons } from '../Common/persons/persons';
import { DxDataGridComponent,
DxDataGridModule,
DxSelectBoxModule,
DxCheckBoxModule } from 'devextreme-angular';
import { NgRedux, select } from '@angular-redux/store';
import { CommonActions } from 'src/app/store/Common-Store/common.actions';
import { book } from '../Book/book';

@Component({
  selector: 'app-books-popup',
  templateUrl: './books-popup.component.html',
  styleUrls: ['./books-popup.component.scss']
})
export class BooksPopupComponent implements OnInit, OnDestroy{
  
 


  
  @ViewChild('grid', { static: false }) dataGrid: any;
  popupVisible=false;
  gridArray:book[] = [];
  booksPopupVisible=false;
  applyFilterTypes: any;
    currentFilter: any;
    showFilterRow: boolean;
    showHeaderFilter: boolean;
    selectedRowsData = [];

    name:any
   
    store:any;
action:any;
    
    
    getSelectedData(e:any) {

    //  this.selectedRowsData = this.dataGrid.instance.getSelectedRowsData();
    console.log(e.data);
    this.store.dispatch(this.action.setGridData(e.data));
     //console.log(this.selectedRowsData)

     this.booksPopupVisible=false;
     
    
    }
  
  
  constructor(store:NgRedux<any>, action:CommonActions) 
  { 
    this.store=store;
    this.action=action;
    this.booksPopupVisible=true;
    this.gridArray = [
      {"book_id":1,"title":"Areeba","author":"123 Street","subject":"1","is_issued":1},
      {"book_id":2,"title": "Varisha", "author": "123 Street B", "subject": "3", "is_issued":0},
      {"book_id":3, "title": "Musfirah","author":"er43 street", "subject": "123456","is_issued":0}
    
    
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

ngOnDestroy(){
 
}

  ngOnInit(): void {

   
  }

}
