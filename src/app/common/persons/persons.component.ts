import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss']
})
export class PersonsComponent  {

   
  ClerkName = new FormControl('');
  ClerkId = new FormControl('');
  ClerkDesk = new FormControl('');

  LibrarianName = new FormControl('');
  LibrarianId = new FormControl('');
  OfficeNo= new FormControl('');



}
