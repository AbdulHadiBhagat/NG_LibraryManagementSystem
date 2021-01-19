import { NgRedux, select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,FormBuilder } from '@angular/forms';
import { BookActions } from 'src/app/store/Book-store/book.actions';
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
  @select(["book","loans"]) loans$:any;
  loansSubscriber:any;

  @select(["common","sysTblTsk"]) sysTblTsk$:any;
  sysTblTskSubscriber:any;
actions=[];
  data:any;
  selectedfun: string = '';
  selectChangeHandler (event: any) {
    //update the ui
    this.selectedfun = event.target.value;
  }

  actionperformed:any;

  onSelectionChanged(event : any){

    this.actionperformed=event.selectedItem.tskID;
    // console.log(event.selectedItem.tskID);

    switch(this.actionperformed)
    {
      case 10:
        this.onAddClick();
        break;

      case 30:
        this.onUpdateClick();
        break;

     case 40:
       this.onDelete();
        break;
    }
  }

  onAddClick(){
    console.log(this.LoanSection.value,"helo")
    this.data=this.LoanSection.value;
    this.store.dispatch<any>(this.book.addLoan("loan", this.data ))
  }


  onUpdateClick(){
    console.log(this.LoanSection.value,"helo")
    this.data=this.LoanSection.value;
    this.store.dispatch<any>(this.book.updateLoan("loan", this.data ))
  }


  onDelete(){
    this.data=this.LoanSection.value
  // .delete(this.data.sysSeq)
console.log(this.data.LoanId)
console.log(this.data.versionNo)
  this.store.dispatch<any>(this.book.deleteLoan("loan", this.data.LoanId , this.data.versionNo ))
  // .subscribe();
  }

  //persons popup
  personsPopupVisible = false;
  destination:any;
  model:loan=new Object() as loan;

  
  
  showBorrowerPopup(){
   
    this.store.dispatch<any>(this.action.getPersonsByType())
    this.destination=this.borrowerDestination;
    this.personsPopupVisible = true;
    this.store.dispatch<any>(this.action.setShowPersonPopup(true));
  }


  showIssuerPopup(){
    
    this.store.dispatch<any>(this.action.getPersonsByType())
    this.destination=this.issuerDestination;
    this.personsPopupVisible = true;
    this.store.dispatch<any>(this.action.setShowPersonPopup(true));
  }

  showReceiverPopup(){
    
    this.store.dispatch<any>(this.action.getPersonsByType())
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


tableid=50;

 forTableid(){
  this.store.dispatch<any>(this.action.getTableId(this.tableid));
  console.log(this.tableid)
}

  constructor(private store:NgRedux<any>, private action:CommonActions , private book:BookActions) { }

  ngOnInit(): void {
  
    this.forTableid();
    this.sysTblTskSubscriber=
  this.sysTblTsk$.subscribe((data:any)=>{
  if(data)
  {
    console.log(data);
    this.actions=data;
  }
  })

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