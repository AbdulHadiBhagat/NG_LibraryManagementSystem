import { Injectable } from "@angular/core";
import { ButtonCheckboxDirective } from "angular-bootstrap-md";

export interface onhold
{   
    REQ_ID : number;
    borrower_id: number;
    book_id: number;
    req_date: Date; 
    versionNo:number;  
    // select : ButtonCheckboxDirective;

}

let gridData:onhold[]=[{  
    "REQ_ID" : 1,
    "borrower_id": 32415,
    "book_id": 7658,
    "req_date":  new Date("2019-01-16"),
    "versionNo": 1,

  },
{
    "REQ_ID" : 2,
    "borrower_id": 32421,
    "book_id": 7626,
    "req_date":  new Date("2019-02-16"),
    "versionNo": 1,

}]


    @Injectable()
export class Service {
    getGridData() {
        return gridData;
    }}