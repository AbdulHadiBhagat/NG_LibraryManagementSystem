import { Component, OnInit, Output } from '@angular/core';
import { clerk } from '../Clerk/clerk';
import { librarian } from '../Librarian/librarian';
import { select } from '@angular-redux/store';
import { NgRedux } from '@angular-redux/store';
import { Router } from '@angular/router';
import { ManageActions } from 'src/app/store/Manage-Store/manage-actions';
import { analyzeAndValidateNgModules } from '@angular/compiler';


@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  @select(["manage", "clerkList"]) clerkList$: any;
  ClerkListSubscriber: any;
  @select(["manage", "librarianList"]) librarianList$: any;
  LibrarianListSubscriber: any;


  type: any;

  activePage: number = 1;
  activePageTwo: number = 1;
  pageSize: number = 4;
  totalDataSize: number = -1;
  totalPage: number = -1;
  totalPageTwo: number = -1;

  displayActivePage(activePageNumber: number) {
    ``
    this.activePage = activePageNumber;
    this.slides = this.chunk(this.detailLibrarian, 4);
    // let pageSize:number=this.slides.length;
    //   let startPage:number = (this.activePage)*pageSize;
    //   let endPage:number=this.activePage*pageSize;
  }

  displayActivePageTwo(activePageNumber: number) {
    this.activePageTwo = activePageNumber;
    this.slidesTwo = this.chunkTwo(this.detailClerk, 4);
    // let pageSize:number=this.slides.length;
    //   let startPage:number = (this.activePage)*pageSize;
    //   let endPage:number=this.activePage*pageSize;
  }



  detailLibrarian: any = [
    // {
    //   L_ID : '1',
    //   Office_no: '01',
    //   name : 'Areeba',
    //   address: 'abc',
    //   phone_no: '123',
    // },

    // {
    //   L_ID : '2',
    //   Office_no: '02',
    //   name : 'Musfirah',
    //   address: 'abc',
    //   phone_no: '123',
    // },

    // {
    //   L_ID : '3',
    //   Office_no: '03',
    //   name : 'Varisha',
    //   address: 'abc',
    //   phone_no: '123',
    // },

    // {
    //   L_ID : '4',
    //   Office_no: '04',
    //   name : 'Amna',
    //   address: 'abc',
    //   phone_no: '123',
    // },

    // {
    //   L_ID : '5',
    //   Office_no: '05',
    //   name : 'Asad Sheikh',
    //   address: 'abc',
    //   phone_no: '123',
    // },

    // {
    //   L_ID : '6',
    //   Office_no: '06',
    //   name : 'Abdul Hadi',
    //   address: 'abc',
    //   phone_no: '123',
    // },

    // {
    //   L_ID : '7',
    //   Office_no: '07',
    //   name : 'Yasir',
    //   address: 'abc',
    //   phone_no: '123',
    // },

    // {
    //   L_ID : '8',
    //   Office_no: '08',
    //   name : 'Kamran',
    //   address: 'abc',
    //   phone_no: '123',
    // },


  ]

  detailClerk = [
    // {
    //   C_ID: '1',
    //   Desk_no: '01',
    //   name : 'Areeba Khalid Qayyum Khanzada',
    //   address: 'abc',
    //   phone_no: '123',
    // },

    // {
    //   C_ID: '2',
    //   Desk_no: '02',
    //   name : 'Musfirah Riaz',
    //   address: 'abc',
    //   phone_no: '123',
    // },

    // {
    //   C_ID: '3',
    //   Desk_no: '03',
    //   name : 'Varisha Ajaz',
    //   address: 'abc',
    //   phone_no: '123',
    // },

    // {
    //   C_ID: '4',
    //   Desk_no: '04',
    //   name : 'Amna Siddiqui',
    //   address: 'abc',
    //   phone_no: '123',
    // },

    // {
    //   C_ID: '5',
    //   Desk_no: '05',
    //   name : 'Asad Sheikh',
    //   address: 'abc',
    //   phone_no: '123',
    // },

    // {
    //   C_ID: '6',
    //   Desk_no: '06',
    //   name : 'Abdul Hadi',
    //   address: 'abc',
    //   phone_no: '123',
    // },

    // {
    //   C_ID: '7',
    //   Desk_no: '07',
    //   name : 'Yasir',
    //   address: 'abc',
    //   phone_no: '123',
    // },

    // {
    //   C_ID: '8',
    //   Desk_no: '08',
    //   name : 'Kamran',
    //   address: 'abc',
    //   phone_no: '123',
    // },
  ]



  slides: any = [[]];
  slidesTwo: any = [[]];
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

  chunkTwo(arr: string | any[], chunkSize: number) {
    // debugger;
    let R = [];
    let start = (this.activePageTwo - 1) * this.pageSize;
    let end = start + this.pageSize;
    for (let i = start; i < end; i++) {
      if (i == this.totalDataSize) return;
      R.push(arr[i]);

    }
    return R;
    // this.pageSize=R.length;
  }

  forClerk() {
    this.store.dispatch<any>(this.action.getClerkList());
  }

  forLibrarian() {
    this.store.dispatch<any>(this.action.getLibrarianList());
  }

  url: string = ""

  public oncardlick(key: string) {

    // console.log(key,"KEY");

    // let test = this.url + '/' +  'persons';
    this.router.navigateByUrl("home/manage/{personId}/detail");

    // this.router.navigateByUrl("persons");
  }




  constructor(private router: Router, private store: NgRedux<any>, private action: ManageActions) {

    this.url = window.location.pathname

    console.log(this.url)

  }

  test() {
    console.log("HELLO");
    this.router.navigateByUrl("home/manage/{personId}/detail");
  }

  ngOnInit(): void {


    // this.type=this.store.getState().common.person.type
    this.forLibrarian();
    this.forClerk();


    //manage screen calls
    this.ClerkListSubscriber =
      this.clerkList$.subscribe((data: any) => {
        if (data && data.length) {
          console.log(data);
          this.detailClerk = data;
          this.slidesTwo = this.chunkTwo(this.detailClerk, this.pageSize);
          this.totalDataSize = this.detailClerk.length;
          this.totalPageTwo = this.totalDataSize / this.pageSize;
          console.log(this.slidesTwo, "slides two");
        }
      });

    this.LibrarianListSubscriber =
      this.librarianList$.subscribe((data: any) => {

        if (data && data.length) {
          console.log(data, "lib data");
          this.detailLibrarian = data;
          this.slides = this.chunk(this.detailLibrarian, this.pageSize);
          this.totalDataSize = this.detailLibrarian.length;
          this.totalPage = this.totalDataSize / this.pageSize;
          console.log(this.slides, "hi");


        }
      });

  }

}
