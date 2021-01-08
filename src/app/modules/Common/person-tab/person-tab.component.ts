import { Component, OnInit } from '@angular/core';
import { LoginComponent } from 'src/app/modules/Common/login/login.component';
import { Routes, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-person-tab',
  templateUrl: './person-tab.component.html',
  styleUrls: ['./person-tab.component.css']
})
export class PersonTabComponent implements OnInit {

  // tabs = [
  //   { 
  //     "title": "Tab1", 
  //     "template":"templ1" 
  //   }, 
  //   { 
  //     "title": "Tab2", 
  //     "template":"templ2" }];
tabContent: any;
 tabs = [
  {     
      id: 0,
      text: "Person", 
      icon: "user", 
      content: "Person tab content",
      selector: "<LoginComponent>",
      path:'home/manage/1/detail',
  },
  { 
      id: 1,
      text: "Check1", 
      // icon: "comment", 
      content: "Check1 tab content",
      selector: 'app-person-history-card',
      path:'home/manage/1/onhold',
  },
  { 
      id: 2,
      text: "Check2", 
      // icon: "find", 
      content: "I am different tab",
      path:'home/manage/1/loan',
  }
];



  constructor(private router:Router) {
    // this.router.navigate(this.tabs[0].path);
    console.log('path');
    // this.tabContent = this.tabs[0].selector;
   }
  
   selectTab(e:any) {
    //  this.router.navigate(this.tabs[e.itemIndex].path);
    // this.router.navigate(e.itemData.path);
     console.log(e.itemData.path);
     console.log(e,"EVENT");
     this.router.navigateByUrl(e.itemData.path);
    // this.tabContent = this.tabs[e.itemIndex].selector;
}

  ngOnInit(): void {
  }

}
