import { NgRedux, select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { BookActions } from 'src/app/store/Book-store/book.actions';
import { CommonActions } from 'src/app/store/Common-Store/common.actions';
import { ManageActions } from 'src/app/store/Manage-Store/manage-actions';
import { onholddto } from '../Dtos/on-hold-dto/on-hold';


@Component({
  selector: 'app-onhold-grid',
  templateUrl: './onhold-grid.component.html',
  styleUrls: ['./onhold-grid.component.css'],
  
})
export class onholdgridComponent implements OnInit {

@select(["manage","personOnHold"]) personOnHold$:any;
personOnHoldSubscriber:any;

  visibility:boolean=true;
  gridData:onholddto[]=[];

  constructor(private store:NgRedux<any>,private commonAction:CommonActions, private manageAction:ManageActions,private action:BookActions  ) { }

  ngOnInit(): void {
this.personOnHoldSubscriber=this.personOnHold$.subscribe((data:any)=>{
  if(data){
    this.gridData=data;
  }
})
    
  }

  acceptRequest(e:any)
  {
    
    if(e.columnIndex==0){
      console.log(e.data,"event");
    console.log(this.store.getState().common,"hey ya")
    this.store.dispatch<any>(this.manageAction.postAcceptOnHoldReqeuest("onhold/accept/",56,e.data));
    }  


    if(e.columnIndex==1){
      console.log(e.data,"event");
    console.log(this.store.getState().common.person,"hey ya")
    this.store.dispatch<any>(this.manageAction.deleteRejectOnHoldRequest("onhold",e.data.reqID,0));
    }  

    
  }
  forOnHoldRequesT(){
    this.store.dispatch<any>(this.action.getHoldRequests(this.store.getState().book.book_id));
  }

}
