import { select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';


@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.scss']
})
export class LoansComponent implements OnInit {
  
  @select(["manage", "personLoan"]) personLoan$:any;
  personLoanSubscriber:any;

  @select(["common","personGridData"]) personGridData$:any;
  personGridDataSubscriber:any;  

  //persons popup
  personsPopupVisible = false;
  showBorrowerPopup(){
    

    this.personsPopupVisible = true;
  }

  showIssuerPopup(){

    this.personsPopupVisible = true;
  }

  showReceiverPopup(){

    this.personsPopupVisible = true;
  }

  //books popup
  booksPopupVisible = false;
  showBooksPopup(){
    this.booksPopupVisible = true;
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




  constructor() { }

  ngOnInit(): void {
    this.personLoanSubscriber=this.personLoan$.subscribe((data:any)=>{
      if(data){
        console.log(data);
      }
    });


    this.personGridDataSubscriber=this.personGridData$.subscribe((data:any)=>{
      if(data)
      {
        console.log(data);
            let model={"person_id":"","person_name":""};
            this.setData(model,data,this.source,this.borrowerDestination);
      }
    })
  }

  ngOnDestroy():void{
    if(this.personGridDataSubscriber){
      this.personGridDataSubscriber.unsubscribe();
    }
  }

  source=["id","name"];
  borrowerDestination=[" borrowerID","borrowerName"];
  issuerDestination=["issuerID","issuerName"];
  receiverDestination=["receiverID","receiverName"];


  setData(model:any,data:any,source:any,destination:any)
  {

    for (let index = 0; index < source.length; index++) {
      model[destination[index]]=data[source[index]];
      
    }

}
}