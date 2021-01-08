import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-onholds',
  templateUrl: './onholds.component.html',
  styleUrls: ['./onholds.component.css']
})
export class OnholdsComponent implements OnInit {
  OnHoldSection = new FormGroup({

    //reqID : new FormControl(''),
   // bookID : new FormControl(''),
   // borrowerID : new FormControl(''),
    bookName : new FormControl(''),
    borrowerName : new FormControl(''),
    retdate: new FormControl(''),
     
 
 });
  constructor() { }

  ngOnInit(): void {
  }

}
