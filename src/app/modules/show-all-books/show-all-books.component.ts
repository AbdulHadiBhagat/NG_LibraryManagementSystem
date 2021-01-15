import { NgRedux, select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { BookActions } from 'src/app/store/Book-store/book.actions';
import { CommonActions } from 'src/app/store/Common-Store/common.actions';

import { book } from '../Book/book';
import { BookCardsComponent } from '../Common/bookCards/book-cards.component'


@Component({
  selector: 'app-show-all-books',
  templateUrl: './show-all-books.component.html',
  styleUrls: ['./show-all-books.component.scss']
})
export class ShowAllBooksComponent implements OnInit {

  @select(["common","showAllBooks"]) showAllBooks$:any;
  showAllBooksSubscriber:any;

  //array
  cards:any=[]

  //Pagination Variables
  activePage: number = 1;
  
  pageSize: number = 12;
  totalDataSize: number = -1;
  totalPage: number = -1;
  
   
  displayActivePage(activePageNumber: number) {
    this.activePage = activePageNumber;
    this.slides = this.chunk(this.cards, 3);
    // let pageSize:number=this.slides.length;
    //   let startPage:number = (this.activePage)*pageSize;
    //   let endPage:number=this.activePage*pageSize;
  }
  
  

  slides: any = [[]];

  chunk(arr: string | any[], chunkSize: number) {
    // debugger;
    let R = [];
    let start = (this.activePage - 1) * this.pageSize;
    let end = start + this.pageSize;
    for (let i = start; i < end; i++) {
      if (i == this.totalDataSize) return;
      R.push(arr[i]);

    }
    return R;
    // this.pageSize=R.length;
  }

 


  // [
  //   {
      
    
  //     "title": 'Card Title 1',
  //     "author": 'Nimra',
  //    // subject:'sub',
  //    "id" : '1'
     
  //   },
  //   {
  //     "title": 'Card Title 2',
  //     "author": 'Umera',
  //     //subject:'sub',
  //     "id" : '2'

  //   },
  //   {
  //     "title": 'Card Title 3',
  //     "author": 'Hashim',
  //    // subject:'sub',
  //    "id" : '3'
      
  //   },
  //   {
  //     "title": 'Card Title 4',
  //     "author": 'Robert',
  //     //subject:'sub',
  //     "id" : '4'
  //   },
  //   {
  //     "title": 'Card Title 5',
  //     "author": 'Natasha',
  //     //subject:'sub',
  //     "id" : '5'

  //   },
  //   {
  //     "title": 'Card Title 6',
  //     "author": 'Hulk',
  //     //subject:'sub',
  //     "id" : '6'
  //   },
  //   {
  //     "title": 'Card Title 6',
  //     "author": 'Black widow',
  //     //subject:'sub',
  //     "id" : '7'
  //   },
  //   {
  //     "title": 'Card Title 6',
  //     "author": 'Varisha',
  //     //subject:'sub',
  //     "id" : '8'
  //   },

  
  // ];
  
  constructor(private store:NgRedux<any> , private action:BookActions, private commonActions:CommonActions) { }

  onClick(data:any){
    console.log(data.title);
    this.store.dispatch<any>(this.action.setBookId(data.id));
    console.log(data.id)
  }


 

  ngOnInit(): void {

    //ShowAllBooks from Store
    this.store.dispatch<any>(this.commonActions.getShowAllBooks());
    this.showAllBooksSubscriber=this.showAllBooks$.subscribe((data:any)=>{
      if(data && data.length){
        console.log(data)
        this.cards=data;
        this.slides = this.chunk(this.cards, this.pageSize);
          this.totalDataSize = this.cards.length;
          this.totalPage = this.totalDataSize / this.pageSize;

      }
    })
  }

}
