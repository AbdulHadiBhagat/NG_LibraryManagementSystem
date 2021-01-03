import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persons-popup',
  templateUrl: './persons-popup.component.html',
  styleUrls: ['./persons-popup.component.scss']
})
export class PersonsPopupComponent implements OnInit {

  personsPopupVisible=false;
  constructor() { 
    this.personsPopupVisible=true;
  }

  ngOnInit(): void {
  }

}
