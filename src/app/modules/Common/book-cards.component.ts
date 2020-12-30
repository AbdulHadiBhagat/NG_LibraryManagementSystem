import { Component, Input, OnInit } from '@angular/core';
import {  ViewChild } from '@angular/core';
// import { Input } from '@angular/core';
import { book } from '../Book/book';

@Component({
  selector: 'app-book-cards',
  templateUrl: './book-cards.component.html',
  styleUrls: ['./book-cards.component.scss']
  
})
export class BookCardsComponent  {
  @ViewChild('element') element: any;

  @Input() item: any;
  
  
  constructor() { 
    console.log(this.item); 
   }

  ngAfterViewInit() {
  }

  

}
