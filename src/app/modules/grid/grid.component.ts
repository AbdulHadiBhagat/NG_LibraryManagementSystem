import { NgRedux, select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonActions } from 'src/app/store/Common-Store/common.actions';
import { ManageActions } from 'src/app/store/Manage-Store/manage-actions';
import { loandto, Service } from '../Dtos/loan-dto/loan-dto';



@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  
})
export class GridComponent implements OnInit {
  @select(["common", "showAllHistory"]) showAllHistory$:any;
  showAllHistorySubscriber:any;

  gridData:loandto[] = [];
  visibility:boolean=false;
  router: string;

  ngOnInit(): void {
    this.store.dispatch<any>(this.action.getShowAllHistory());
    
    this.showAllHistorySubscriber=this.showAllHistory$.subscribe((data:any)=>{
      if(data){
        console.log(data)
    
        this.gridData=data;
      }
    })
  
  }
  
  constructor(service:Service, private store:NgRedux<any>,private action:CommonActions,private _router: Router, private manageAction:ManageActions) { //this.gridData=service.getGridData()
    this.gridData=service.getGridData();
    this.router = _router.url;
    this.showAllHistorySubscriber=this.showAllHistory$.subscribe((data:any)=>{
      if(data){
        console.log(data)
    
  }})
}

receiveBook(e:any){
  if(e.columnIndex==0)
  {
    console.log(e.data,"i m here");
    console.log(e.data.receiverID,"iD")

    this.store.dispatch<any>(this.manageAction.receivedBookFromLoanHistory("loan/receivebook/",e.data.receiverID,e.data))

  }

}
}
