import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books-popup',
  templateUrl: './books-popup.component.html',
  styleUrls: ['./books-popup.component.scss']
})
export class BooksPopupComponent implements OnInit {

  popupVisible=false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
