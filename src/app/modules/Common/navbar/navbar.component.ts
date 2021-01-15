 import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { relative } from 'path';
//import { NavbarModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md'
import { NavItem } from './nav-item';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navItem:NavItem[]=[
  new NavItem("Home"),
  new NavItem("Manage"),
  new NavItem("Books"),
  new NavItem("History"),
  new NavItem("Logout")];
 

  url:string=""

  constructor(private router: Router) {

    this.url = window.location.pathname
    let cN = new NavItem("Create New");
    cN.children=[
      'Hold Request',"Loan"
    ]
    this.navItem.push(cN);
    console.log(this.url)
   }


  onClick(key: string){

    // console.log(key,"KEY");

    let test = this.url + '/' + key.toLowerCase();
    this.router.navigateByUrl(test);
  // switch (key:string) {

   

  //   case 'Home' :
  //     this.router.navigateByUrl(this.url +"/home" );
  //     break;
    
  //     case 'Manage' :
  //       debugger;
  //    this.router.navigateByUrl(this.url + "/manage");
  //     break;

  //     case 'Books':
  //     this.router.navigateByUrl(this.url + "/books");
  //     break;

  //     case 'History':
  //       this.router.navigateByUrl(this.url + "/history");
  //     break;
  
  //   default:
  //     break;
  // }
  }


      


  ngOnInit(): void {
  }

}
