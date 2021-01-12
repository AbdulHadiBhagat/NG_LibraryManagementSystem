import { NgRedux, select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { ManageActions } from 'src/app/store/Manage-Store/manage-actions';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {

  @select(["manage","personDetails"]) personDetails$:any;
  personDetailsSubscriber:any;
  
  data:any;
  selectedfun: string = '';
  selectChangeHandler (event: any) {
    //update the ui
    this.selectedfun = event.target.value;
  }
 
  initializedData(){
    this.PersonSection = new FormGroup({
      Id: new FormControl(this.data.sysSeq),
      Name: new FormControl(this.data.pname),
      Address: new FormControl(this.data.address),
      Phoneno: new FormControl(this.data.phoneno),
      Versionno: new FormControl(this.data.versionNo),
      Type: new FormControl(this.data.type),
      Salary: new FormControl(this.data.salary),
      
      L_officeno: new FormControl(this.data.lofficeno),
      D_deskno: new FormControl(this.data.cdeskno)
  
  });
  }

  PersonSection = new FormGroup({
    Id: new FormControl(''),
    Name: new FormControl(''),
    Address: new FormControl(''),
    Phoneno: new FormControl(''),
    versionno: new FormControl(''),
    Type: new FormControl(''),
    Salary: new FormControl(''),
    
    L_officeno: new FormControl(''),
    D_deskno: new FormControl('')

});

type = "C";

// private variable: boolean = false ;

//readonly = "R";
// router: any;

constructor(private store:NgRedux<any>, private action:ManageActions) { }
ngOnInit() {

  this.store.dispatch<any>(this.action.getPersonDetails(this.store.getState().manage.personId));
  this.personDetailsSubscriber=this.personDetails$.subscribe((data:any)=>{
    if(data){
      console.log(data)
      this.data=data;
      this.initializedData();
    }
  })
  
  }

  // public onUpdateClick(){
  //   this.router.navigate(['./person-detail']);
  // }
  
  // public onDeleteClick(){
  //   this.router.navigate(['./person-detail']);
  // }


}
