import { NgRedux } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { BookActions } from 'src/app/store/Book-store/book.actions';

import { book } from '../Book/book';
import { BookCardsComponent } from '../Common/bookCards/book-cards.component'


@Component({
  selector: 'app-show-all-books',
  templateUrl: './show-all-books.component.html',
  styleUrls: ['./show-all-books.component.scss']
})
export class ShowAllBooksComponent implements OnInit {

  cards:any = [
    {
      
      "title": 'Card Title 1',
      "author": 'Nimra',
     // subject:'sub',
     "id" : '1'
     
    },
    {
      "title": 'Card Title 2',
      "author": 'Umera',
      //subject:'sub',
      "id" : '2'

    },
    {
      "title": 'Card Title 3',
      "author": 'Hashim',
     // subject:'sub',
     "id" : '3'
      
    },
    {
      "title": 'Card Title 4',
      "author": 'Robert',
      //subject:'sub',
      "id" : '4'
    },
    {
      "title": 'Card Title 5',
      "author": 'Natasha',
      //subject:'sub',
      "id" : '5'

    },
    {
      "title": 'Card Title 6',
      "author": 'Hulk',
      //subject:'sub',
      "id" : '6'
    },
    {
      "title": 'Card Title 6',
      "author": 'Black widow',
      //subject:'sub',
      "id" : '7'
    },
    {
      "title": 'Card Title 6',
      "author": 'Varisha',
      //subject:'sub',
      "id" : '8'
    },

  
  ];
  

  onClick(data:any){
    console.log(data.title);
    this.store.dispatch<any>(this.action.setBookId(data.id));
    console.log(data.id)
  }
  constructor(private store:NgRedux<any> , private action:BookActions) { }

  ngOnInit(): void {

    
  }

}
