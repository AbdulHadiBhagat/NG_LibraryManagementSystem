import { Injectable } from '@angular/core';
export interface loan
    {   
        LoanId : number;
        borrowerID: number;
        borrowerName: String;
        issuerID: number;
        issuerName:String;
        receiverID:number;
        receiverName:String;
        bookID: number;
        bookName:String;
        issdate: Date;
        retdate: Date;
        finepaid: number;
        versionNo:number;
       

    }
    let gridData:loan[]=[{  "LoanId" : 1,
    "borrowerID": 32415,
    "borrowerName": "Musfirah",
    "issuerID": 764,
    "issuerName":"Varisha",
    "receiverID": 876,
    "receiverName":"Areeba",
    "bookID": 7658,
    "bookName": "The Fault in our stars",
    "issdate":  new Date("2019-01-16"),
    "retdate": new Date("7-10-2021"),
    "finepaid": 80,
"versionNo": 1234}]


    @Injectable()
export class Service {
    getGridData() {
        return gridData;
    }
}

  