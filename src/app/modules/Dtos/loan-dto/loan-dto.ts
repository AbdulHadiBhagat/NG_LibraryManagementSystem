import { Injectable } from "@angular/core";

export interface loandto
{   
    LoanId : number;
    borrowerID : number;
    borrowerName: string;
    issuerID: number;
    issuerName: string;
    receiverID: number;
    receiverName: string;
    bookID : number;
    bookName: string;

    issdate: Date;
    retdate: Date;
    finepaid: number;
    versionNo: Number;
}

let gridData:loandto[]=[{  "LoanId" : 1,
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