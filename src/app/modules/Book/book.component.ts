import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {





  
  BookSection = new FormGroup({
    bookID: new FormControl(''),
    bookTitle: new FormControl(''),
    Author: new FormControl(''),
    Subject: new FormControl(''),
    IsIssued: new FormControl(''),
    FinePerDay: new FormControl(''),
   
});
  constructor() { }

  ngOnInit(): void {
  }

}
