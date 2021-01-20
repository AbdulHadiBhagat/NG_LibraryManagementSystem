import { NgRedux, select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonActions } from 'src/app/store/Common-Store/common.actions';
import { ManageActions } from 'src/app/store/Manage-Store/manage-actions';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {

  @select(["manage", "personDetails"]) personDetails$: any;
  personDetailsSubscriber: any;
  @select(["common", "sysTblTsk"]) sysTblTsk$: any;
  sysTblTskSubscriber: any;

  data: any;
  selectedfun: string = '';
  selectChangeHandler(event: any) {
    //update the ui
    this.selectedfun = event.target.value;
  }

  actionperformed: any;

  onSelectionChanged(event: any) {

    if (event.selectedItem)
      this.actionperformed = event.selectedItem.tskID;
    // console.log(event.selectedItem.tskID);

    switch (this.actionperformed) {
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

  onAddClick() {
    console.log(this.PersonSection.value, "helo")
    this.data = this.PersonSection.value;
    this.store.dispatch<any>(this.action.addPerson("person", this.data))
  }


  onUpdateClick() {
    console.log(this.PersonSection.value, "helo")
    this.data = this.PersonSection.value;
    this.store.dispatch<any>(this.action.updatePerson("person", this.data))
  }


  onDelete() {
    this.data = this.PersonSection.value
    // .delete(this.data.sysSeq)
    console.log(this.data.sysSeq)
    console.log(this.data.versionNo)
    this.store.dispatch<any>(this.action.deletePerson("person", this.data.sysSeq, this.data.versionNo))
    // .subscribe();
  }

  initializedData() {
    this.PersonSection = new FormGroup({
      sysSeq: new FormControl(this.data.sysSeq),
      pname: new FormControl(this.data.pname),
      address: new FormControl(this.data.address),
      phoneno: new FormControl(this.data.phoneno),
      versionNo: new FormControl(this.data.versionNo),
      type: new FormControl(this.data.type),
      salary: new FormControl(this.data.salary),

      lofficeno: new FormControl(this.data.lofficeno),
      cdeskno: new FormControl(this.data.cdeskno)

    });
  }

  actions = [];


  PersonSection = new FormGroup({
    sysSeq: new FormControl(''),
    pname: new FormControl(''),
    address: new FormControl(''),
    phoneno: new FormControl(''),
    versionNo: new FormControl(''),
    type: new FormControl(''),
    salary: new FormControl(''),

    lofficeno: new FormControl(''),
    cdeskno: new FormControl('')

  });

  // type = 'L';
  // disableCheck(){
  //   if(this.type == 'L'){

  //   }
  //   else if(){

  //   }
  //   else{

  //   }
  // }

  // private variable: boolean = false ;

  //readonly = "R";
  // router: any;

  tableid = 30;

forTableid(){
  this.store.dispatch<any>(this.commmon.getTableId(this.tableid));
  console.log(this.tableid)
}
// type:any;
type='C';
  router: string;

constructor(private store:NgRedux<any>, private action:ManageActions, private commmon:CommonActions,private _router: Router) { 
  this.router = _router.url;

  // this.type = this.data.type;
}
// if(){

// }

ngOnInit() {
  // console.log(this.data.type); 
  console.log(this.router);
  if(this.router != '/home/manage/0/detail'){
    this.check();
  }
  this.personDetailsSubscriber=this.personDetails$.subscribe((data:any)=>{
    if(data){
      console.log(data);
      // console.log(this.data.type);
      this.data=data;
      this.initializedData();

    }

  })

    this.forTableid();
    this.getActions();

  this.forTableid();
  this.sysTblTskSubscriber=this.sysTblTsk$.subscribe((data:any)=>{
if(data)
{
  console.log(data);
  this.actions=data;
}
}); 
  }

  private subscribePersonDetail() {
    if (!this.personDetailsSubscriber) {
      this.personDetailsSubscriber = this.personDetails$.subscribe((data: any) => {
        if (data.sysSeq) {
          console.log(data);
          this.data = data;
          this.initializedData();
        }
      });
    }
  }

  getActions() {
    if (!this.sysTblTskSubscriber) {
      this.sysTblTskSubscriber =
        this.sysTblTsk$.subscribe((data: any) => {
          if (data.length > 0) {
            console.log(data, "Actions");
            this.actions = data;
          }
        });
    }
  }


  // public onUpdateClick(){
  //   this.router.navigate(['./person-detail']);
  // }

  // public onDeleteClick(){
  //   this.router.navigate(['./person-detail']);
  // }
  check(){
    console.log("check");
    this.store.dispatch<any>(this.action.getPersonDetails(this.store.getState().manage.personId));

  }

}
