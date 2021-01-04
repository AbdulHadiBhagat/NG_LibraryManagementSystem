import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';


@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.scss']
})
export class LoansComponent implements OnInit {


  LoanSection = new FormGroup({




   // LoanId : new FormControl(''),
    //borrowerID : new FormControl(''),
    borrowerName: new FormControl(''),
   // issuerID: new FormControl(''),
    issuerName: new FormControl(''),
    //receiverID: new FormControl(''),
    receiverName: new FormControl(''),
    //bookID : new FormControl(''),
    bookName: new FormControl(''),

    issdate: new FormControl(''),
    retdate: new FormControl(''),
    finepaid: new FormControl(''),
    versionNo: new FormControl(''),
    

});




  constructor() { }

  ngOnInit(): void {
  }

}
