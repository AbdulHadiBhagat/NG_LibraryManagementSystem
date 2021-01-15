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
@select(["common","bookGridData"]) bookGridData$:any;
bookGridDataSubscriber:any;  
 


  
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
    this.store.dispatch(this.action.setBookGridData(e.data));
     //console.log(this.selectedRowsData)

     this.booksPopupVisible=false;

    }
  
  
  constructor(store:NgRedux<any>, action:CommonActions) 
  { 
    this.store=store;
    this.action=action;
    this.booksPopupVisible=true;
    this.gridArray = [
      {"book_id":1,"title":"Areeba","author":"123 Street","subject":"1","is_issued":1,"versionNo":1},
      {"book_id":2,"title": "Varisha", "author": "123 Street B", "subject": "3", "is_issued":0,"versionNo":1},
      {"book_id":3, "title": "Musfirah","author":"er43 street", "subject": "123456","is_issued":0,"versionNo":1}
    
    
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

  if(this.bookGridDataSubscriber){
    this.bookGridDataSubscriber.unsubscribe();
  }
 
}

  ngOnInit(): void {
this.bookGridDataSubscriber=this.bookGridData$.subscribe((data:any)=>{
  if(data)
  {
    console.log(data);
        let model={"book_id":"","book_name":""};
        this.setData(model,data,this.source,this.destination);
  }
})
   
  }

  //gridDataVariables
  source=["id","name"];
  //FormControlVariables
  destination=["book_id","book_name"];
  setData(model:any,data:any,source:any,destination:any)
  {

    for (let index = 0; index < source.length; index++) {
      model[destination[index]]=data[source[index]];
      
    }

}
}
