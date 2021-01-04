import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss']
})
export class PersonsComponent implements OnInit {


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
