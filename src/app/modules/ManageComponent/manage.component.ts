import { Component, OnInit, Output } from '@angular/core';
import { clerk } from '../Clerk/clerk';
import { librarian } from '../Librarian/librarian';
import { person } from '../Person/person';


@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  activePage:number = 1;
  activePageTwo:number = 1;
  pageSize: number = 4;
  totalDataSize:number = -1;
  totalPage:number = -1;
  totalPageTwo:number = -1;
  
  displayActivePage(activePageNumber:number){  
    this.activePage = activePageNumber;
    this.slides = this.chunk(this.detailLibrarian, 4);
    // let pageSize:number=this.slides.length;
    //   let startPage:number = (this.activePage)*pageSize;
    //   let endPage:number=this.activePage*pageSize;
  }

  displayActivePageTwo(activePageNumber:number){  
    this.activePageTwo = activePageNumber;
    this.slidesTwo = this.chunkTwo(this.detailClerk, 4);
    // let pageSize:number=this.slides.length;
    //   let startPage:number = (this.activePage)*pageSize;
    //   let endPage:number=this.activePage*pageSize;
  }

  

  detailLibrarian : any = [
    {
      L_ID : '1',
      Office_no: '01',
      name : 'Areeba',
      address: 'abc',
      phone_no: '123',
    },

    {
      L_ID : '2',
      Office_no: '02',
      name : 'Musfirah',
      address: 'abc',
      phone_no: '123',
    },

    {
      L_ID : '3',
      Office_no: '03',
      name : 'Varisha',
      address: 'abc',
      phone_no: '123',
    },

    {
      L_ID : '4',
      Office_no: '04',
      name : 'Amna',
      address: 'abc',
      phone_no: '123',
    },

    {
      L_ID : '5',
      Office_no: '05',
      name : 'Asad Sheikh',
      address: 'abc',
      phone_no: '123',
    },

    {
      L_ID : '6',
      Office_no: '06',
      name : 'Abdul Hadi',
      address: 'abc',
      phone_no: '123',
    },

    {
      L_ID : '7',
      Office_no: '07',
      name : 'Yasir',
      address: 'abc',
      phone_no: '123',
    },

    {
      L_ID : '8',
      Office_no: '08',
      name : 'Kamran',
      address: 'abc',
      phone_no: '123',
    },
    
    
  ]

  detailClerk = [
    {
      C_ID: '1',
      Desk_no: '01',
      name : 'Areeba Khalid Qayyum Khanzada',
      address: 'abc',
      phone_no: '123',
    },

    {
      C_ID: '2',
      Desk_no: '02',
      name : 'Musfirah Riaz',
      address: 'abc',
      phone_no: '123',
    },

    {
      C_ID: '3',
      Desk_no: '03',
      name : 'Varisha Ajaz',
      address: 'abc',
      phone_no: '123',
    },

    {
      C_ID: '4',
      Desk_no: '04',
      name : 'Amna Siddiqui',
      address: 'abc',
      phone_no: '123',
    },

    {
      C_ID: '5',
      Desk_no: '05',
      name : 'Asad Sheikh',
      address: 'abc',
      phone_no: '123',
    },

    {
      C_ID: '6',
      Desk_no: '06',
      name : 'Abdul Hadi',
      address: 'abc',
      phone_no: '123',
    },

    {
      C_ID: '7',
      Desk_no: '07',
      name : 'Yasir',
      address: 'abc',
      phone_no: '123',
    },

    {
      C_ID: '8',
      Desk_no: '08',
      name : 'Kamran',
      address: 'abc',
      phone_no: '123',
    },
  ]

  
  
  slides:any=[[]];
  slidesTwo:any=[[]];
  chunk(arr: string | any[], chunkSize: number) {
    // debugger;
    let R = [];
    let start = (this.activePage - 1) * this.pageSize;
    let end = start + this.pageSize;
    for (let i = start; i < end; i ++) {
      if(i == this.totalDataSize) return;
      R.push(arr[i]);
      
    }
    return R;
    // this.pageSize=R.length;
  }

  chunkTwo(arr: string | any[], chunkSize: number) {
    // debugger;
    let R = [];
    let start = (this.activePageTwo - 1) * this.pageSize;
    let end = start + this.pageSize;
    for (let i = start; i < end; i ++) {
      if(i == this.totalDataSize) return;
      R.push(arr[i]);
      
    }
    return R;
    // this.pageSize=R.length;
  }
  
 

  constructor() { 

  }

  ngOnInit(): void {
    this.totalDataSize=this.detailLibrarian.length;
    this.totalPage = this.totalDataSize / this.pageSize;
    this.totalPageTwo = this.totalDataSize / this.pageSize;
    this.slides = this.chunk(this.detailLibrarian, this.pageSize );
    this.slidesTwo = this.chunkTwo(this.detailClerk, this.pageSize );
  }

}
