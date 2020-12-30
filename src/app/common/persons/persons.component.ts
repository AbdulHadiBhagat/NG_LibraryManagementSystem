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

type = "L";

constructor() { }
ngOnInit() {
  }



}