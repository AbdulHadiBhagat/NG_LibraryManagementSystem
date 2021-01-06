import { FormControl,FormGroup } from '@angular/forms';
import { Component, OnDestroy, OnInit } from '@angular/core';
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
  
  
  LoginSection = new FormGroup({

  // FirstName : new FormControl(''),
  // LastName : new FormControl(''),
  Email : new FormControl(''),
  Password : new FormControl(''),
});

  @select(["common", "person" ]) personType$:any;
  personSubscriber:any;

  //Observable hy ye
  @select(["common", "gridRowData" ]) selectedGridRowData$:any;
   //Subscriber hy ye
   selectedGridRowDataSubscriber:any;
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
 type:any;
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

this.type=data.type;
console.log(this.type);

switch(this.type){
  case "A":
  {
    this.store.dispatch<any>(this.action.getLoanData("loan/"))
    break;

  }
}

this.store.dispatch<any>(this.action.getAllBooks("book/"))

     }
  })
}
 
    public onLoginClick(){
    
    
    this.router.navigate(['./home']);
    this.Id=this.LoginSection.controls['EmailId'].value;
    console.log(this.Id);
    
    this.store.dispatch<any>(this.action.login("person/", this.Id));

  }

  ngOnDestroy()
  {
    if(this.selectedGridRowDataSubscriber){
      this.selectedGridRowDataSubscriber.unsubscribe();
    }

    if(this.personSubscriber)
    {
      this.personSubscriber.unsubscribe();
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
