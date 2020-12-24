

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carasol-component',
  templateUrl: './carasol-component.component.html',
  styleUrls: ['./carasol-component.component.css'],
})
export class  CarasolComponentComponent implements OnInit {
  
  cards = [
    {
      title: 'Card Title 1',
      Author: 'Button',
      subject:'sub',
     
    },
    {
      title: 'Card Title 2',
      Author: 'Button',
      subject:'sub',

    },
    {
      title: 'Card Title 3',
      Author: 'Button',
      subject:'sub',
      
    },
    {
      title: 'Card Title 4',
      Author: 'Button',
      subject:'sub',
     
    },
    {
      title: 'Card Title 5',
      Author: 'Button',
      subject:'sub',

    },
    {
      title: 'Card Title 6',
      Author: 'Button',
      subject:'sub',
    },
    {
      title: 'Card Title 6',
      Author: 'Button',
      subject:'sub',
    },
    {
      title: 'Card Title 6',
      Author: 'Button',
      subject:'sub',
    },
  
  ];
  slides: any = [[]];
  chunk(arr: string | any[], chunkSize: number) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }
  personHistory = [
    {
      Name : 'Person Name',
      FineDue : 'None',
      FinePaid: ' Rs 15',
      bookName: 'Blah',
      ret_date: '20/1/20 ',
    },
    {
      Name : 'Person Name',
      FineDue : 'None',
      FinePaid: ' Rs 15',
      bookName: 'Blah',
      ret_date: '20/1/20 ',

    },
    {
      Name : 'Person Name',
      FineDue : 'None',
      FinePaid: ' Rs 15',
      bookName: 'Blah',
      ret_date: '20/1/20 ',
      
    },
    {
      Name : 'Person Name',
      FineDue : 'None',
      FinePaid: ' Rs 15',
      bookName: 'Blah',
      ret_date: '20/1/20 ',

     
    },
    {
      Name : 'Person Name',
      FineDue : 'None',
      FinePaid: ' Rs 15',
      bookName: 'Blah',
      ret_date: '20/1/20 ',


    },
    {
      Name : 'Person Name',
      FineDue : 'None',
      FinePaid: ' Rs 15',
      bookName: 'Blah',
      ret_date: '20/1/20 ',

    },
    {
      Name : 'Person Name',
      FineDue : 'None',
      FinePaid: ' Rs 15',
      bookName: 'Blah',
      ret_date: '20/1/20 ',

    },
    {
      Name : 'Person Name',
      FineDue : 'None',
      FinePaid: ' Rs 15',
      bookName: 'Blah',
      ret_date: '20/1/20 ',

    },
  
  ];

  slideshistory: any = [[]];
  chunkhistory(arr: string | any[], chunkSize: number) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }
  ngOnInit() {
    this.slides = this.chunk(this.cards, 4);
    this.slideshistory = this.chunkhistory(this.personHistory, 4);
  }
}

