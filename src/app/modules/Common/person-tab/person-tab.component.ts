import { Component, OnInit } from '@angular/core';
import { LoginComponent } from 'src/app/modules/Common/login/login.component';
import { Routes, RouterModule, Router } from '@angular/router';
import { NgRedux } from '@angular-redux/store';
import { ManageActions } from 'src/app/store/Manage-Store/manage-actions';
import DevExpress from 'devextreme';
import { checkForActionTypeUniqueness } from '@ngrx/store/src/runtime_checks';
import { BookActions } from 'src/app/store/Book-store/book.actions';

@Component({
  selector: 'app-person-tab',
  templateUrl: './person-tab.component.html',
  styleUrls: ['./person-tab.component.css']
})
export class PersonTabComponent implements OnInit {

  varCheck:any;

  // tabs = [
  //   { 
  //     "title": "Tab1", 
  //     "template":"templ1" 
  //   }, 
  //   { 
  //     "title": "Tab2", 
  //     "template":"templ2" }];
tabContent: any;
tabs:any=[];



checkk(){
  // debugger;
  let check=window.location.pathname;
if(check=="/home/book/1/detail"){
  this.varCheck=1;
  this.tabs = [
    {     
        id: 0,
        text: "Book", 
        icon: "user", 
        content: "Person tab content",
        selector: "<LoginComponent>",
        path:'home/book/1/detail',
    },
    { 
        id: 1,
        text: "OnHold History", 
        icon: "comment", 
        content: "Check1 tab content",
        selector: 'app-person-history-card',
        path:'home/book/1/onhold',
    },
    { 
        id: 2,
        text: "Loan History", 
        icon: "comment", 
        content: "I am different tab",
        path:'home/book/1/loan',
    }
  ];
}


else if(check=="/home/manage/1/detail"){
  this.varCheck=2;
  this.tabs = [
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
      text: "OnHold History", 
      icon: "comment", 
      content: "Check1 tab content",
      selector: 'app-person-history-card',
      path:'home/manage/1/onhold',
  },
  { 
      id: 2,
      text: "Loan History", 
      icon: "comment", 
      content: "I am different tab",
      path:'home/manage/1/loan',
  }
];
}
}
// checkingTabs(){
//   if(){

//   }
//   else{

//   }
// }

  constructor(private router:Router, private store:NgRedux<any>, private action:ManageActions,private bookAction:BookActions) {
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
    console.log(e.itemIndex);
    if(e.itemIndex==1)
    {
      if(this.varCheck==2){
      this.store.dispatch<any>(this.action.getPersonOnHoldRequests("onhold/holdbyperson/",this.store.getState().manage.personId));
      }
      else if(this.varCheck==1){
        this.store.dispatch<any>(this.bookAction.getHoldRequests(this.store.getState().common.bookDetailId));
      }
    }
    else if(e.itemIndex==2){
      if(this.varCheck==2){
      this.store.dispatch<any>(this.action.getPersonLoanRequests("loan/byperson/",this.store.getState().manage.personId));
      }
      else if(this.varCheck==1){
        this.store.dispatch<any>(this.bookAction.getLoans(this.store.getState().common.bookDetailId));

      }

    }
    // validation
// var viewModel = {
//   selectedIndex: ko.observable(0),
//   items: [
//       { title: "tab 1", text: "ON" },
//       { title: "tab 2", text: "OFF" }
//   ],
//   validateAndSubmit: function (e:any) {
//       var result = DevExpress.validationEngine.validateGroup($("#sampleGroup").dxValidationGroup("instance"));
//       if (!result.isValid) {
//           viewModel.selectedIndex(viewModel.selectedIndex() - 1);
//       }
//   }
// }
// ko.applyBindings(viewModel);

}



  ngOnInit(): void {
    console.log(this.store.getState().common,"getStateTab") 
    console.log("Hello");
    console.log(window.location.pathname);
    this.checkk();
  }

}
