import { Component, OnInit } from '@angular/core';
import {  ViewChild } from '@angular/core';

@Component({
  selector: 'app-book-cards',
  templateUrl: './book-cards.component.html',
  styleUrls: ['./book-cards.component.scss']
  
})
export class BookCardsComponent  {
  @ViewChild('element') element: any;

  
  constructor() { }

  ngAfterViewInit() {
  }

  

}
