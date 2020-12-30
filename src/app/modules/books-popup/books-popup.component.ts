import { Component, OnInit } from '@angular/core';
import { person } from '../Person/person';

@Component({
  selector: 'app-books-popup',
  templateUrl: './books-popup.component.html',
  styleUrls: ['./books-popup.component.scss']
})
export class BooksPopupComponent implements OnInit {

  // popupVisible=false;

  gridArray:person[];
  
  
  constructor() 
  { 
    
    this.gridArray=[{"id":1, "name":"Areeba", "password":"12","address":"piouu","phone_no": 0987},
    {"id":2, "name":"Abdul Hadi", "password":"123","address":"piouubnm","phone_no": 098754}]
  
  }

  ngOnInit(): void {
  }

}
