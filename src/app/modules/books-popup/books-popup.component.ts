import { Component, OnInit } from '@angular/core';
import { persons } from '../Common/persons/persons';

@Component({
  selector: 'app-books-popup',
  templateUrl: './books-popup.component.html',
  styleUrls: ['./books-popup.component.scss']
})
export class BooksPopupComponent implements OnInit {

  booksPopupVisible=false;

  gridArray:persons[] = [];
  
  
  constructor() 
  { 
    this.booksPopupVisible=true;
    this.gridArray = [
      {"id":1,"name":"Areeba","address":"123 Street","phone_no":1,"password":"ab123"}
    
    ];
    // this.gridArray=[{"id":1, "name":"Areeba", "password":"12","address":"piouu","phone_no": 0987},
    // {"id":2, "name":"Abdul Hadi", "password":"123","address":"piouubnm","phone_no": 098754}]
  
  }

  ngOnInit(): void {
  }

}
