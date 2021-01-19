import { NgRedux, select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonActions } from 'src/app/store/Common-Store/common.actions';
import { loandto } from '../Dtos/loan-dto/loan-dto';



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
  
  constructor(private store:NgRedux<any>,private action:CommonActions,private _router: Router) { //this.gridData=service.getGridData()
    
    this.router = _router.url;
   
    
  }

  ngOnInit(): void {
this.store.dispatch<any>(this.action.getShowAllHistory());

this.showAllHistorySubscriber=this.showAllHistory$.subscribe((data:any)=>{
  if(data){
    console.log(data)

    this.gridData=data;
  }
})



  }

}
