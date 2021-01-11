import { select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-onholds',
  templateUrl: './onholds.component.html',
  styleUrls: ['./onholds.component.scss']
})
export class OnholdsComponent implements OnInit {
  @select(["manage", "personOnHold"]) personOnHold$:any;
  personOnHoldSubscriber:any;


  @select(["common","personGridData"]) personGridData$:any;
  personGridDataSubscriber:any;  


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
     
 
 });
  constructor() { }

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
