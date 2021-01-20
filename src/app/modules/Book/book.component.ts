import { NgRedux, select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BookActions } from 'src/app/store/Book-store/book.actions';
import { CommonActions } from 'src/app/store/Common-Store/common.actions';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {


  @select(["book","detail"]) book_detail$:any;
  BookDetailSubscriber:any;

  @select(["book","loan"])loans$:any;
  loansSubscriber:any;
  
  @select(["book","onHoldrequest"])onHoldRequests$:any;
  onHoldRequestsSubscriber:any;

  @select(["common","sysTblTsk"]) sysTblTsk$:any;
  sysTblTskSubscriber:any;
  actions=[];
  data:any;
  selectedfun: string = '';
  selectChangeHandler (event: any) {
    //update the ui
    this.selectedfun = event.target.value;
  }

  actionperformed:any;

  onSelectionChanged(event : any){

    this.actionperformed=event.selectedItem.tskID;
    // console.log(event.selectedItem.tskID);

    switch(this.actionperformed)
    {
      case 10:
        this.onAddClick();
        break;

      case 30:
        this.onUpdateClick();
        break;

     case 40:
       this.onDelete();
        break;
    }
  }

  onAddClick(){
    console.log(this.BookSection.value,"helo")
    this.data=this.BookSection.value;
    
    this.store.dispatch<any>(this.action.addBook("book", this.data ))
  }


  onUpdateClick(){
    console.log(this.BookSection.value,"helo")
    this.data=this.BookSection.value;
    this.store.dispatch<any>(this.action.updateBook("book", this.data ))
  }


  onDelete(){
    this.data=this.BookSection.value
  // .delete(this.data.sysSeq)
    console.log(this.data.bookID)
    console.log(this.data.versionNo)
    this.store.dispatch<any>(this.action.deleteBook("book", this.data.bookID, this.data.versionNo ))
  // .subscribe();
  }
  initializedData(){
    this.BookSection = new FormGroup({
      bookID: new FormControl(this.data.bookID),
      bookTitle: new FormControl(this.data.bookTitle),
      Author: new FormControl(this.data.Author),
      Subject: new FormControl(this.data.Subject),
      IsIssued: new FormControl(this.data.IsIssued),
      FinePerDay: new FormControl(this.data.FinePerDay),
      versionNo: new FormControl(this.data.versionNo)
  
  });
  }
  
  BookSection = new FormGroup({
    bookID: new FormControl(''),
    bookTitle: new FormControl(''),
    Author: new FormControl(''),
    Subject: new FormControl(''),
    IsIssued: new FormControl(''),
    FinePerDay: new FormControl(''),
    versionNo:new FormControl(''),
   
});

forBookDetail(){
  this.store.dispatch<any>(this.action.getBookDetail(this.store.getState().common.bookDetailId));
}

forLoan(){
  this.store.dispatch<any>(this.action.getLoans(this.store.getState().book.book_id));
}

forOnHoldRequesT(){
  this.store.dispatch<any>(this.action.getHoldRequests(this.store.getState().book.book_id));
}

tableid=10;

forTableid(){
  this.store.dispatch<any>(this.common.getTableId(this.tableid));
  console.log(this.tableid)
}
  constructor(private router: Router,private store:NgRedux<any>, private action:BookActions , private common:CommonActions) { }

  ngOnInit(): void {
    this.forTableid();
    this.sysTblTskSubscriber=
  this.sysTblTsk$.subscribe((data:any)=>{
  if(data.length > 0)
  {
    console.log(data);
    this.actions=data;
  }
  }); 

    this.forBookDetail();
    

    this.BookDetailSubscriber=this.book_detail$.subscribe((data:any)=>{
  if(data)
  {
    console.log(data);
    this.initializedData();
  }
}); 

// this.loansSubscriber=
// this.loans$.subscribe((data:any)=>{
//   if(data)
//   {
//     console.log(data);
//   }
// }); 
// this.onHoldRequestsSubscriber=
// this.onHoldRequests$.subscribe((data:any)=>{
//   if(data)
//   {
//     console.log(data);
//   }
// }); 
//   }
  }
}
