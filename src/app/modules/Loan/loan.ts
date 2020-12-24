import { Injectable } from '@angular/core';
export interface loan
    {   
        L_ID : number;
        borrower_id: number;
        issuer_id: number;
        book_id: number;
        iss_date: Date;
        receiver: number;
        ret_date: Date;
        fine_paid: number;
       

    }
    let gridData:loan[]=[{  "L_ID" : 1,
    "borrower_id": 32415,
    "issuer_id": 764,
    "book_id": 7658,
    "iss_date":  new Date("2019-01-16"),
    "receiver": 876,
    "ret_date": new Date("7-10-2021"),
    "fine_paid": 80}]


    @Injectable()
export class Service {
    getGridData() {
        return gridData;
    }
}

  