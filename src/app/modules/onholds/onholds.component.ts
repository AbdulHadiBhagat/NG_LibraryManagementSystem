import { NgRedux, select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { CommonActions } from 'src/app/store/Common-Store/common.actions';
import { onholddto } from '../Dtos/on-hold-dto/on-hold';
import { onhold } from '../OnHold/onhold';
import { BookActions } from 'src/app/store/Book-store/book.actions';
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

  @select(["common","bookGridData"]) bookGridData$:any;
  bookGridDataSubscriber:any;
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

  destination:any;
  //persons popup
  personsPopupVisible = false;
  showPersonsPopup(){

    this.store.dispatch<any>(this.common.getPersonsByType("byperson/B"));
    this.destination=this.borrowerDestination;
    this.personsPopupVisible = true;
    this.store.dispatch<any>(this.common.setShowPersonPopup(true));

  }

  //books popup
  booksPopupVisible = false;
  showBooksPopup(){

    this.store.dispatch<any>(this.common.getShowAllBooks());
    this.destination=this.bookDestination;
    this.booksPopupVisible = true;
    this.store.dispatch<any>(this.common.setShowBooksPopup(true));
  }

  model:onholddto=new Object() as onholddto;
  
  initializedData(){
    this.OnHoldSection=new FormGroup({
      
    reqID : new FormControl(this.model.reqID),
    bookID : new FormControl(this.model.bookID),
    borrowerID : new FormControl(this.model.borrowerID),
     bookName : new FormControl(this.model.bookName),
     borrowerName : new FormControl(this.model.borrowerName),
     reqdate: new FormControl(this.model.reqdate),
      


    })
  }





  OnHoldSection = new FormGroup({

    reqID : new FormControl(''),
   bookID : new FormControl(''),
   borrowerID : new FormControl(''),
    bookName : new FormControl(''),
    borrowerName : new FormControl(''),
reqdate: new FormControl(''),
    versionNo: new FormControl(''),
 
 });

 tableid=40;

 forTableid(){
  this.store.dispatch<any>(this.common.getTableId(this.tableid));
  console.log(this.tableid)
}
  constructor(private store:NgRedux<any>, private action:ManageActions, private common:CommonActions, private book:BookActions) { }

  ngOnInit(): void {
    this.personOnHoldSubscriber=this.personOnHold$.subscribe((data:any)=>{
      if(data){
        console.log(data);
      }
    });

    this.personGridDataSubscriber=this.personGridData$.subscribe((data:any)=>{
      if(data.sysSeq)
      {
        console.log(data+"a");
           // let model={"person_id":"","person_name":""};
            this.setData(this.model,data,this.personSource,this.destination);
            this.initializedData();
      }
    })

    this.bookGridDataSubscriber=this.bookGridData$.subscribe((data:any)=>{
      if(data.bookID){
        console.log(data+"k");
        this.setData(this.model,data,this.bookSource,this.destination);
            this.initializedData();

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

  personSource=["sysSeq","pname"];
  borrowerDestination=[" borrowerID","borrowerName"];
  

  bookSource=["bookID","bookTitle"]
  bookDestination=["bookID","bookName"]


  setData(model:any,data:any,source:any,destination:any)
  {

    for (let index = 0; index < source.length; index++) {
      model[destination[index]]=data[source[index]];
      
    }

}

}
