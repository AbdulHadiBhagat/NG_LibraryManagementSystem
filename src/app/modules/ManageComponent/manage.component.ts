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

  activePage:number = 0;
  // pageSize: any;
  // page = 1;
  // R: any;

  
  displayActivePage(activePageNumber:number){  
    this.activePage = activePageNumber;
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
      name : 'Areeba',
      address: 'abc',
      phone_no: '123',
    },

    {
      C_ID: '2',
      Desk_no: '02',
      name : 'Musfirah',
      address: 'abc',
      phone_no: '123',
    },

    {
      C_ID: '3',
      Desk_no: '03',
      name : 'Varisha',
      address: 'abc',
      phone_no: '123',
    },

    {
      C_ID: '4',
      Desk_no: '04',
      name : 'Amna',
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
  
  chunk(arr: string | any[], chunkSize: number) {
    let R = [];
    for (let i = 0; i < chunkSize; i ++) {
      R.push(arr[i]);
      
    }
    return R;
    // this.pageSize=R.length;
  }
  
 

  constructor() { }

  ngOnInit(): void {
    // this.pageSize=this.R.length;
    this.slides = this.chunk(this.detailLibrarian, 4 );
  }

}
