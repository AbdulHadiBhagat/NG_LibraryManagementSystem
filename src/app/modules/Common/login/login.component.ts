import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DxPopupModule, DxButtonModule, DxTemplateModule } from 'devextreme-angular';
import { NgRedux } from '@angular-redux/store';
import { TestActions } from 'src/app/store/test-store/test.actions';
import { select } from '@angular-redux/store';
import { CommonActions } from 'src/app/store/Common-Store/common.actions';
import { loan } from '../../Loan/loan';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit , OnDestroy{

  @select(["test","testcases"]) test$:any;
  @select(["commonTest","commonTests"]) commonTest$:any;

  @select(["common", "person" ]) personType$:any;
  personSubscriber:any;

  //Observable hy ye
  @select(["common", "gridRowData" ]) selectedGridRowData$:any;
   //Subscriber hy ye
   selectedGridRowDataSubscriber:any;

  
  FirstName = new FormControl('');
  LastName= new FormControl('');
  EmailId = new FormControl('');
  Password = new FormControl('');
  Id:any;
  


  //books popup
  booksPopupVisible = false;
  showBooksPopup(){
    this.booksPopupVisible = true;
  }

  //persons popup
  personsPopupVisible = false;
  showPersonsPopup(){
    this.personsPopupVisible = true;
  }
  
  showPopup() {
    // this.store.dispatch<any>(this.test.updateTestCases({
    //   id:"1",
    //   test:"hello"
    // }));
    this.store.dispatch<any>(this.test.getTestCases());
    
}

showCommontest(){
  this.store.dispatch<any>(this.commonTest.getCommontest());
}
  constructor (private router: Router,private store:NgRedux<any>,private test:TestActions,  private action:CommonActions,
   private commonTest:CommonActions)
   {


   }

  ngOnInit(){
    this.selectedGridRowDataSubscriber=
    this.selectedGridRowData$.subscribe((data:any)=>{
      if(data)
      {
        console.log(data);
        let model={"book_id":"","book_name":""};
        this.setData(model,data,this.source,this.destination);
      

      }
    }); 
  
    this.personSubscriber=this.personType$.subscribe((data:any)=>{
      if(data)
      {
console.log(data);
      }
    })
}
 
    public onLoginClick(){
    
    
    this.router.navigate(['./home']);
    this.Id=this.EmailId.value;
    console.log(this.Id);
    this.store.dispatch<any>(this.action.login("person/", this.Id));

  }

  ngOnDestroy()
  {
    if(this.selectedGridRowDataSubscriber){
      this.selectedGridRowDataSubscriber.unSubscribe();
    }

    if(this.personSubscriber)
    {
      this.personSubscriber.unSubscribe();
    }
  }

  source=["id","name"];
  destination=["book_id","book_name"];
  setData(model:any,data:any,source:any,destination:any)
  {

    for (let index = 0; index < source.length; index++) {
      model[destination[index]]=data[source[index]];
      
    }

    console.log(model);
    
    


  }
}
