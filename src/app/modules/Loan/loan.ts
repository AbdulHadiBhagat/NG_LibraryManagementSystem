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
    

  