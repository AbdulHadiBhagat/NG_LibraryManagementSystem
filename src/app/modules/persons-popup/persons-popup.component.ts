import { NgRedux, select } from '@angular-redux/store';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonActions } from 'src/app/store/Common-Store/common.actions';
import { persons } from '../Common/persons/persons';
import { DxDataGridComponent,
  DxDataGridModule,
  DxSelectBoxModule,
  DxCheckBoxModule } from 'devextreme-angular';

@Component({
  selector: 'app-persons-popup',
  templateUrl: './persons-popup.component.html',
  styleUrls: ['./persons-popup.component.scss']
})
export class PersonsPopupComponent implements OnInit {
  
  @ViewChild('grid', { static: false }) dataGrid: any;
  personsPopupVisible=false;

  gridArray:persons[] = [];


  applyFilterTypes: any;
    currentFilter: any;
    showFilterRow: boolean;
    showHeaderFilter: boolean;
    selectedRowsData = [];
 
 
  constructor(private store:NgRedux<any>, private action:CommonActions) { 
    this.personsPopupVisible=true;

    this.gridArray = [
      {"id":1,"name":"Areeba","address":"123 Street","password":"1","phone_no":1234},
    //   {"id":2,"name": "Varisha", "address": "123 Street B", "password": "3", "phone_no": 921456},
    //   {"id":3, "name": "Musfirah","address":"er43 street", "password": "123456","phone_no":09878}
    ];

    this.showFilterRow = true;
    this.showHeaderFilter = true;
    this.applyFilterTypes = [{
      key: "auto",
      name: "Immediately"
  }, {
      key: "onClick",
      name: "On Button Click"
  }];
  this.currentFilter = this.applyFilterTypes[0].key;

  }

  clearFilter() {
    this.dataGrid.instance.clearFilter();
}
  getSelectedData(e:any) {

    
    console.log(e.data);
    this.store.dispatch(this.action.setPersonGridData(e.data));
     //console.log(this.selectedRowsData)

     this.personsPopupVisible=false;
     
    
    }
  
  ngOnInit(): void {
    
  }

  ngOnDestroy():void{
   

  }

  

}
