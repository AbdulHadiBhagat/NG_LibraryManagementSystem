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
  new NavItem("Logout"),
  new NavItem("")];

  url:string=""
  dropdown:any = [];
  constructor(private router: Router) {

    this.url = window.location.pathname
//musfi dropdown
    let cN = new NavItem("Create New");
    cN.children=[
      "Hold Request","Loan"
    ]
    // this.navItem.push(cN);
//musfi dropdown

this.dropdown = this.getDropdown();

    console.log(this.url)
}

getDropdown() {
  
  return [
    { id: '1', name: 'Create New' },
    { id: '2', name: 'Hold Request', path:'/home/holdrequest' },
    { id: '3', name: 'Loan', path:'home/laon' }
  ];
  
}

dropdownMethod(e:any){
  
  // console.log(e.target.value);
  // console.log(e.target);

  if(e.target.value==2){
    this.router.navigateByUrl('/home/holdrequest');
  }
  else if(e.target.value==3){
    this.router.navigateByUrl('home/laon');
  }
  
// this.router.navigateByUrl(e.target.path);
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
