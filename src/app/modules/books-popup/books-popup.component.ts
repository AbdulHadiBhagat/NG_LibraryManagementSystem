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

  @select(["common","showBooksPopup"]) showBooksPopup$:any;
  showBooksPopupSubscriber:any;
// @select(["common","bookGridData"]) bookGridData$:any;
// bookGridDataSubscriber:any;  
 


  
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
  
    
popupOnHiding(){
  console.log("a");
  this.store.dispatch<any>(this.action.setShowBooksPopup(false));
  
}
    
    getSelectedData(e:any) {

    //  this.selectedRowsData = this.dataGrid.instance.getSelectedRowsData();
    console.log(e.data);
    this.store.dispatch(this.action.setBookGridData(e.data));
     //console.log(this.selectedRowsData)

     this.store.dispatch<any>(this.action.setShowBooksPopup(false));
     

    }
  
  
  constructor(private store:NgRedux<any>, private action:CommonActions) 
  { 

    this.gridArray = [
      {"book_id":1,"title":"book1","author":"Rumi","subject":"Medicine","is_issued":1},
      {"book_id":2,"title": "book2", "author": "Umera Ahmed", "subject": "Fiction", "is_issued":0},
      {"book_id":3, "title": "book3","author":"Nimra Ahmed", "subject": "Fiction","is_issued":0}
    
    
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

  // if(this.bookGridDataSubscriber){
  //   this.bookGridDataSubscriber.unsubscribe();
  // }
 
}

  ngOnInit(): void {
    this.showBooksPopupSubscriber=this.showBooksPopup$.subscribe((data:any)=>{
      this.booksPopupVisible=data;
    })
    
// this.bookGridDataSubscriber=this.bookGridData$.subscribe((data:any)=>{
//   if(data)
//   {
//     console.log(data);
//       //  let model={"book_id":"","book_name":""};
//         //this.setData(model,data,this.source,this.destination);
//   }
// })
   
  }

  //gridDataVariables
  // source=["id","name"];
  // //FormControlVariables
  // destination=["book_id","book_name"];
  // setData(model:any,data:any,source:any,destination:any)
  // {

  //   for (let index = 0; index < source.length; index++) {
  //     model[destination[index]]=data[source[index]];
      
  //   }

//}
}
