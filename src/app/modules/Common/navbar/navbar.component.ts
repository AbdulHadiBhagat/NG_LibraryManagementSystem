 import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
<<<<<<< HEAD

=======
//import { relative } from 'path';
>>>>>>> c9e249ad336def72a4b7cb387a4a9d0510c07d4f
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
