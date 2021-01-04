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