import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  addClerk(){ 
    let row = document.createElement('div');   
      row.className = 'row'; 
      row.innerHTML = `<br> <input type="text">`; 
      document.querySelector('.showClerkFields')?.appendChild(row);
  } 

  addBorrower(){ 
    let row = document.createElement('div');   
      row.className = 'row'; 
      row.innerHTML = `<br> <input type="text">`; 
      document.querySelector('.showBorrowerFields')?.appendChild(row);
  }

  addLibrarian(){ 
    let row = document.createElement('div');   
      row.className = 'row'; 
      row.innerHTML = `<br> <input type="text">`; 
      document.querySelector('.showLibrarianFields')?.appendChild(row);
  }




  constructor() { }

  ngOnInit(): void {
  }

}
