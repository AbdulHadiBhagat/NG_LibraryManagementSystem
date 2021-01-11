import { Component, OnInit } from '@angular/core';
import { LoginComponent } from 'src/app/modules/Common/login/login.component';
import { Routes, RouterModule, Router } from '@angular/router';
import { NgRedux } from '@angular-redux/store';
import { ManageActions } from 'src/app/store/Manage-Store/manage-actions';

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
      path:'BookCards',
  },
  { 
      id: 1,
      text: "Check1", 
      // icon: "comment", 
      content: "Check1 tab content",
      selector: 'app-person-history-card',
      path:'./history',
  },
  { 
      id: 2,
      text: "Check2", 
      // icon: "find", 
      content: "I am different tab",
      path:'LoginComponent2',
  },
  { 
    id: 3,
    text: "Check3", 
    // icon: "find", 
    content: "Check3 tab content" ,
    path:'LoginComponent3',
}
];



  constructor(private router:Router, private store:NgRedux<any>, private action:ManageActions) {
    // this.router.navigate(this.tabs[0].path);
    console.log('path');
    // this.tabContent = this.tabs[0].selector;
   }
  
   selectTab(e:any) {
    //  this.router.navigate(this.tabs[e.itemIndex].path);
    // this.router.navigate(e.itemData.path);
     console.log(e.itemData.path);
    // this.tabContent = this.tabs[e.itemIndex].selector;
    console.log(e.itemIndex);
    if(e.itemIndex==1)
    {
      this.store.dispatch<any>(this.action.getPersonOnHoldRequests("onhold/byperson/",this.store.getState().manage.personId));
    }
    else if(e.itemIndex==2){
      this.store.dispatch<any>(this.action.getPersonLoanRequests("loan/byperson/",this.store.getState().manage.personId));

    }

}

  ngOnInit(): void {
  }

}
