import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DxPopupModule, DxButtonModule, DxTemplateModule } from 'devextreme-angular';
import { NgRedux } from '@angular-redux/store';
import { TestActions } from 'src/app/store/test-store/test.actions';
import { select } from '@angular-redux/store';
import { CommonActions } from 'src/app/store/Common-Store/common.actions';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {

  @select(["test","testcases"]) test$:any;
  @select(["commonTest","commonTests"]) commonTest$:any;
  
  FirstName = new FormControl('');
  LastName= new FormControl('');
  EmailId = new FormControl('');
  Password = new FormControl('');

  popupVisible = false;
  showPopup() {
    // this.store.dispatch<any>(this.test.updateTestCases({
    //   id:"1",
    //   test:"hello"
    // }));
    this.store.dispatch<any>(this.test.getTestCases());
    // this.popupVisible = true;
}

showCommontest(){
  this.store.dispatch<any>(this.commonTest.getCommontest());
}
  constructor (private router: Router,private store:NgRedux<any>,private test:TestActions,
   private commonTest:CommonActions){}

  ngOnInit(){
    this.test$.subscribe((data:any) => {
      if(data){
        // console.log(data);
      }
    });
    this.commonTest$.subscribe((data:any)=> {
      if(data){
        console.log(data);
      }
    })
  }
  public onLoginClick(){
    this.router.navigate(['./home']);
  }
}
