import { NgRedux, select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { BookActions } from 'src/app/store/Book-store/book.actions';
import { CommonActions } from 'src/app/store/Common-Store/common.actions';
import { ManageActions } from 'src/app/store/Manage-Store/manage-actions';

@Component({
  selector: 'app-onholds',
  templateUrl: './onholds.component.html',
  styleUrls: ['./onholds.component.css']
})
export class OnholdsComponent implements OnInit {
  @select(["manage", "personOnHold"]) personOnHold$:any;
  personOnHoldSubscriber:any;

  @select(["common","personGridData"]) personGridData$:any;
  personGridDataSubscriber:any;  

  @select(["book","book_detail"])book_detail$:any;
  book_detailSubscriber:any;

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
    console.log(this.OnHoldSection.value,"helo")
    this.data=this.OnHoldSection.value;
    this.store.dispatch<any>(this.book.addOnHoldRequest("onhold", this.data ))
  }


  onUpdateClick(){
    console.log(this.OnHoldSection.value,"helo")
    this.data=this.OnHoldSection.value;
    this.store.dispatch<any>(this.book.updateOnHoldRequest("onhold", this.data ))
  }


  onDelete(){
    this.data=this.OnHoldSection.value
  // .delete(this.data.sysSeq)
console.log(this.data.reqID)
console.log(this.data.versionNo)
  this.store.dispatch<any>(this.book.deleteOnHoldRequest("onhold", this.data.reqID , this.data.versionNo ))
  // .subscribe();
  }

  //persons popup
  personsPopupVisible = false;
  showPersonsPopup(){
    this.personsPopupVisible = true;
  }

  //books popup
  booksPopupVisible = false;
  showBooksPopup(){
    this.booksPopupVisible = true;
  }

  
  OnHoldSection = new FormGroup({

    reqID : new FormControl(''),
   bookID : new FormControl(''),
   borrowerID : new FormControl(''),
    bookName : new FormControl(''),
    borrowerName : new FormControl(''),
    retdate: new FormControl(''),
    versionNo: new FormControl(''),
 
 });

 tableid=40;

 forTableid(){
  this.store.dispatch<any>(this.commmon.getTableId(this.tableid));
  console.log(this.tableid)
}
  constructor(private store:NgRedux<any>, private action:ManageActions, private commmon:CommonActions, private book:BookActions) { }

  ngOnInit(): void {
    this.personOnHoldSubscriber=this.personOnHold$.subscribe((data:any)=>{
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

  this.forTableid();
    this.sysTblTskSubscriber=
  this.sysTblTsk$.subscribe((data:any)=>{
  if(data)
  {
    console.log(data);
    this.actions=data;
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
  issuerDestination=[];
  receiverDestination=[];


  setData(model:any,data:any,source:any,destination:any)
  {

    for (let index = 0; index < source.length; index++) {
      model[destination[index]]=data[source[index]];
      
    }

}

}
