import { NgRedux, select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { CommonActions } from 'src/app/store/Common-Store/common.actions';
import { onholddto } from '../Dtos/on-hold-dto/on-hold';
import { onhold } from '../OnHold/onhold';

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

  destination:any;
  //persons popup
  personsPopupVisible = false;
  showPersonsPopup(){

    this.destination=this.borrowerDestination;
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
     
 
 });
  constructor(private store:NgRedux<any>, private action:CommonActions) { }

  ngOnInit(): void {
    this.personOnHoldSubscriber=this.personOnHold$.subscribe((data:any)=>{
      if(data){
        console.log(data);
      }
    });

    this.personGridDataSubscriber=this.personGridData$.subscribe((data:any)=>{
      if(data.id)
      {
        console.log(data+"a");
           // let model={"person_id":"","person_name":""};
            this.setData(this.model,data,this.personSource,this.destination);
            this.initializedData();
      }
    })

    this.bookGridDataSubscriber=this.bookGridData$.subscribe((data:any)=>{
      if(data.book_id){
        console.log(data+"k");
        this.setData(this.model,data,this.bookSource,this.destination);
            this.initializedData();

      }
    })

    
  }

  ngOnDestroy():void{

    if(this.personGridDataSubscriber){
      this.personGridDataSubscriber.unsubscribe();
    }

  }

  personSource=["id","name"];
  borrowerDestination=[" borrowerID","borrowerName"];
  issuerDestination=[];
  receiverDestination=[];

  bookSource=["book_id","title"]
  bookDestination=["bookID","bookName"]


  setData(model:any,data:any,source:any,destination:any)
  {

    for (let index = 0; index < source.length; index++) {
      model[destination[index]]=data[source[index]];
      
    }

}

}
