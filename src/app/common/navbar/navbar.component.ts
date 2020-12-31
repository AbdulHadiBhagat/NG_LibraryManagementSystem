import { Component, OnInit } from '@angular/core';
//import { NavbarModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md'
import { NavItem } from './nav-item';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  test = ["hello", "abc"];
  
  navItem:NavItem[]=[new NavItem("Home"),
  new NavItem("Manage"),
  new NavItem("Books"),
new NavItem("History"),
new NavItem("Logout")];
  constructor() { }

  ngOnInit(): void {
  }

}
