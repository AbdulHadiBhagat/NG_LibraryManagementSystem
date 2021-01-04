import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-borrowedbooks',
  templateUrl: './borrowedbooks.component.html',
  styleUrls: ['./borrowedbooks.component.scss']
})
export class BORROWEDBOOKSComponent implements OnInit {


  BorrowbookedSection = new FormGroup({
    //borrowedBookId: new FormControl(''),
    //book_id: new FormControl(''),
    bookName: new FormControl(''),
   // borrower_id: new FormControl(''),
    borrowerName: new FormControl(''),

});

  constructor() { }

  ngOnInit(): void {
  }

}
