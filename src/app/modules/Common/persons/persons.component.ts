import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {

  selectedfun: string = '';
  selectChangeHandler (event: any) {
    //update the ui
    this.selectedfun = event.target.value;
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

constructor() { }
ngOnInit() {
  }

  // public onUpdateClick(){
  //   this.router.navigate(['./person-detail']);
  // }
  
  // public onDeleteClick(){
  //   this.router.navigate(['./person-detail']);
  // }
}
