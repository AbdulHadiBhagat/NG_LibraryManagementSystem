 import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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


  constructor(private router: Router) { }

  onClick(key: any){

    // console.log(key,"KEY");

  switch (key) {

    case 'Home' :
      this.router.navigate(['home'] );
      break;
    
      case 'Manage' :
        debugger;
     this.router.navigate(['manage']);
      break;

      case 'Books':
      this.router.navigate(['books']);
      break;

      case 'History':
        this.router.navigate(['history']);
      break;
  
    default:
      break;
  }
  }


      


  ngOnInit(): void {
  }

}
