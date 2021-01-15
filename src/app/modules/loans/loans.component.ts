import { NgRedux, select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,FormBuilder } from '@angular/forms';
import { CommonActions } from 'src/app/store/Common-Store/common.actions';
import { loan } from '../Loan/loan';


@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.css']
})
export class LoansComponent implements OnInit {
  
  @select(["manage", "personLoan"]) personLoan$:any;
  personLoanSubscriber:any;

  @select(["common","personGridData"]) personGridData$:any;
  personGridDataSubscriber:any;  

  @select(["common","bookGridData"]) bookGridData$:any;
  bookGridDataSubscriber:any;  

  @select(["common","showPersonPopup"]) showPersonPopup$:any;
  showPersonPopupSubscriber:any;

  @select(["common","showBooksPopup"]) showBooksPopup$:any;
  showBooksPopupSubscriber:any;

  //persons popup
  personsPopupVisible = false;
  destination:any;
  model:loan=new Object() as loan;

  
  
  showBorrowerPopup(){
   
    
this.destination=this.borrowerDestination;
    this.personsPopupVisible = true;
    this.store.dispatch<any>(this.action.setShowPersonPopup(true));
  }


  showIssuerPopup(){
this.destination=this.issuerDestination;
    this.personsPopupVisible = true;
    this.store.dispatch<any>(this.action.setShowPersonPopup(true));
  }

  showReceiverPopup(){
this.destination=this.receiverDestination;
    this.personsPopupVisible = true;
    this.store.dispatch<any>(this.action.setShowPersonPopup(true));
  }

  //books popup
  booksPopupVisible = false;
  showBooksPopup(){
    this.destination=this.bookDestination;
    this.booksPopupVisible = true;
    this.store.dispatch<any>(this.action.setShowBooksPopup(true));

  }

  initializedData(){
    this.LoanSection = new FormGroup({
    
      LoanId : new FormControl(this.model.LoanId),
      borrowerID : new FormControl(this.model.borrowerID),
      borrowerName: new FormControl(this.model.borrowerName),
     issuerID: new FormControl(this.model.issuerID),
      issuerName: new FormControl(this.model.issuerName),
      receiverID: new FormControl(this.model.receiverID),
      receiverName: new FormControl(this.model.receiverName),
      bookID : new FormControl(this.model.bookID),
      bookName: new FormControl(this.model.bookName),
  
      issdate: new FormControl(this.model.issdate),
      retdate: new FormControl(this.model.retdate),
      finepaid: new FormControl(this.model.finepaid),
      versionNo: new FormControl(this.model.versionNo),
  });
  }


  LoanSection = new FormGroup({

   LoanId : new FormControl(''),
    borrowerID : new FormControl(''),
    borrowerName: new FormControl(''),
   issuerID: new FormControl(''),
    issuerName: new FormControl(''),
    receiverID: new FormControl(''),
    receiverName: new FormControl(''),
    bookID : new FormControl(''),
    bookName: new FormControl(''),

    issdate: new FormControl(''),
    retdate: new FormControl(''),
    finepaid: new FormControl(''),
    versionNo: new FormControl(''),
    

});




  constructor(private store:NgRedux<any>, private action:CommonActions) { }

  ngOnInit(): void {
  
  
    this.personLoanSubscriber=this.personLoan$.subscribe((data:any)=>{
      if(data){
        console.log(data);
      }
    });


    this.personGridDataSubscriber=this.personGridData$.subscribe((data:any)=>{
      if(data.id)
      {
        console.log(data+"l");
            //let model={"person_id":"","person_name":""};
            
          
           this.setData(this.model,data,this.personSource,this.destination);
           this.initializedData();
          
      }
    })
    this.bookGridDataSubscriber=this.bookGridData$.subscribe((data:any)=>{
      if(data.book_id)
      {
        console.log(data+"h");
            //let model={"person_id":"","person_name":""};
            
          debugger;
           this.setData(this.model,data,this.bookSource,this.destination);
           this.initializedData();
          
      }
    })


    this.showPersonPopupSubscriber=this.showPersonPopup$.subscribe((data:any)=>{
      this.personsPopupVisible=data;
    })
    
    this.showBooksPopupSubscriber=this.showBooksPopup$.subscribe((data:any)=>{
      this.booksPopupVisible=data;
    })
  }

  ngOnDestroy():void{
    if(this.personGridDataSubscriber){
      this.personGridDataSubscriber.unsubscribe();
    }
  }

  personSource=["id","name"];
  borrowerDestination=["borrowerID","borrowerName"];
  issuerDestination=["issuerID","issuerName"];
  receiverDestination=["receiverID","receiverName"];

  bookSource=["book_id", "title"]
  bookDestination=["bookID","bookName"]


  setData(model:any,data:any,source:any,destination:any)
  {

    for (let index = 0; index < source.length; index++) {
      model[destination[index]]=data[source[index]];
      
    }

}
}