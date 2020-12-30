import { Component, OnInit } from '@angular/core';
import { book } from '../Book/book';
import { BookCardsComponent } from '../Common/bookCards/book-cards.component'


@Component({
  selector: 'app-show-all-books',
  templateUrl: './show-all-books.component.html',
  styleUrls: ['./show-all-books.component.scss']
})
export class ShowAllBooksComponent implements OnInit {

  cards:book[] = [
    {
      
      "title": 'Card Title 1',
      "author": 'Nimra',
     // subject:'sub',
     
    },
    {
      "title": 'Card Title 2',
      "author": 'Umera',
      //subject:'sub',

    },
    {
      "title": 'Card Title 3',
      "author": 'Hashim',
     // subject:'sub',
      
    },
    {
      "title": 'Card Title 4',
      "author": 'Robert',
      //subject:'sub',
     
    },
    {
      "title": 'Card Title 5',
      "author": 'Natasha',
      //subject:'sub',

    },
    {
      "title": 'Card Title 6',
      "author": 'Hulk',
      //subject:'sub',
    },
    {
      "title": 'Card Title 6',
      "author": 'Black widow',
      //subject:'sub',
    },
    {
      "title": 'Card Title 6',
      "author": 'Varisha',
      //subject:'sub',
    },
  
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
