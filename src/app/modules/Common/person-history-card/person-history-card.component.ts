import { Component, Input, OnInit, Output } from '@angular/core';
import { librarian } from '../../Librarian/librarian';

@Component({
  selector: 'app-person-history-card',
  templateUrl: './person-history-card.component.html',
  styleUrls: ['./person-history-card.component.css']
})
export class PersonHistoryCardComponent implements OnInit {

  // @Input() librarian: any;
  // @Input() clerk: any;
  @Input() person: any;

  constructor() { }

  ngOnInit(): void {
    // console.log(this.librarian,"LIBRARIAN");
  }

}
