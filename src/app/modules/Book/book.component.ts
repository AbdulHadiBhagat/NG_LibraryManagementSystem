import { NgRedux, select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BookActions } from 'src/app/store/Book-store/book.actions';

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

  
  BookSection = new FormGroup({
    bookID: new FormControl(''),
    bookTitle: new FormControl(''),
    Author: new FormControl(''),
    Subject: new FormControl(''),
    IsIssued: new FormControl(''),
    FinePerDay: new FormControl(''),
   
});

forBookDetail(){
  this.store.dispatch<any>(this.action.getBookDetail(this.store.getState().book.book_id));
}

forLoan(){
  this.store.dispatch<any>(this.action.getLoans(this.store.getState().book.book_id));
}

forOnHoldRequesT(){
  this.store.dispatch<any>(this.action.getHoldRequests(this.store.getState().book.book_id));
}
  constructor(private router: Router,private store:NgRedux<any>, private action:BookActions) { }

  ngOnInit(): void {

    this.forBookDetail();
    

    this.BookDetailSubscriber=
this.book_detail$.subscribe((data:any)=>{
  if(data)
  {
    console.log(data);
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
