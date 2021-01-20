

import { Component, Input, OnInit } from '@angular/core';
import { select, NgRedux } from '@angular-redux/store';
import { Router } from '@angular/router';
import { CommonActions } from 'src/app/store/Common-Store/common.actions';

@Component({
  selector: 'app-carasol-component',
  templateUrl: './carasol-component.component.html',
  styleUrls: ['./carasol-component.component.css'],
})
export class  CarasolComponentComponent implements OnInit {
  @select(["common" ,"loanHistory"]) loanHistory$:any;
  loanHistorySubscriber:any;

  @select(["common" ,"allBooks"]) allBooks$:any;
  allBooksSubscriber:any;

  type:any="";
  cards = [
    {
      title: 'A Course In Geometry',
      Author: 'Arthur William',
      subject:'Geometry',
     
    },
    {
      title: 'The Stars In The Night Sky',
      Author: 'Musfirah Riaz',
      subject:'Poetry',

    },
    {
      title: 'Literary Chaos',
      Author: 'Najam ilyas',
      subject:'Poetry',
      
    },
    {
      title: 'Everyday Greatness',
      Author: 'Stephen R.Covey',
      subject:'Inspirational',
     
    },
    {
      title: 'Mind Make Societies',
      Author: 'Pascal Boyer',
      subject:'Intellectual',

    },
    {
      title: 'The Enigma of Reason',
      Author: 'Dan Sperber',
      subject:'Self-help',
    },
    {
      title: 'The Secret of Our Success',
      Author: 'Joseph Henrich',
      subject:'Self-help',
    },
    {
      title: 'The C++ Programming Language',
      Author: 'Bjarne Stroustrup',
      subject:'Computer Science',
    },
  
  ];
  slides: any = [[]];
  chunk(arr: string | any[], chunkSize: number) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }

  @Input() ManageComponent: any; 
  
  personHistory = [
    {
      Name : 'Musfirah Riaz',
      FineDue : 'None',
      FinePaid: ' Rs 15',
      bookName: 'The Secret of Our Success',
      ret_date: '20/1/20 ',
    },
    {
      Name : 'Areeba Khalid',
      FineDue : 'None',
      FinePaid: ' Rs 15',
      bookName: 'The Enigma of Reason',
      ret_date: '20/1/20 ',
    }
  ];

  slideshistory: any = [[]];
  chunkhistory(arr: string | any[], chunkSize: number) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }
  constructor(private store:NgRedux<any>,private router:Router , private action:CommonActions){

  }
  ngOnInit() {
  let person= this.store.getState().common.person;
  this.type=person.type;
  console.log(this.type)

    setTimeout(() => {
      console.log("loanData",this.store.getState().common.loanHistory);
    }, 3000);

    this.loanHistorySubscriber=this.loanHistory$.subscribe((data:any)=>{
     
      if(data){
        console.log(data,"loanData");
        this.personHistory=data;
        this.slideshistory = this.chunkhistory(this.personHistory, 4);
        console.log(this.slideshistory,this.personHistory,"hello");
      }
    });


    this.allBooksSubscriber=this.allBooks$.subscribe((data:any)=>{
      if(data){
        console.log(data,"booksData");
        this.cards=data;
        this.slides = this.chunk(this.cards, 4);
      }
    });
  }

  onBookCardClick(data:any){
    console.log(data);
    this.router.navigateByUrl("home/book/1/detail");
this.store.dispatch<any>(this.action.setBookDetailId(data.bookID))
  }

  onPersonHistoryCardClick(data:any){
    console.log(data);
    this.router.navigateByUrl("home/laon");
    this.store.dispatch<any>(this.action.setPersonDetailId(data.loanId))
  }

  booksSeeMore(){
    this.router.navigateByUrl("home/books");
  }

  historySeeMore(){
    this.router.navigateByUrl("home/history");
  }

  ngOnDestroy():void{
    
  }
}

