import { Injectable } from '@angular/core';
import { DataService } from '../../data.service'


export const SET_PERSON = "setPerson";
export const SET_COMMON_TEST = "setCommontest";
export const SET_GRID_DATA = "setGridData"
export const SET_BOOK_GRID_DATA = "setBookGridData"
export const SET_PERSON_GRID_DATA = "setPersonGridData"
export const SET_CONTENT = "setContent"
export const SET_LOAN_CONTENT = "setLoanContent"
export const SET_ALL_BOOKS = "setAllBooks"
export const SET_SHOW_PERSON_POPUP="setShowPersonPopup"
export const SET_SHOW_BOOKS_POPUP="setShowBooksPopup"
export const SET_TABLE_ID = "setTableID"
export const SET_SHOW_ALL_BOOKS="setShowAllBooks"
export const SET_SHOW_ALL_HISTORY="setShowAllHistory"

export const DEFAULT_URL = "http://localhost:8080/"
@Injectable({
    providedIn: 'root'
})

export class CommonActions {
    dataService: any;


    constructor(dataService: DataService) {
        this.dataService = dataService;

    }


    getLoanData() {
        return (dispatch: any, getState: any) => {
            return this.dataService.getAll(DEFAULT_URL + "loan/" + "topn/" + "8").subscribe((data: any) => {
                console.log(data, "COMMON ACTIONS LOAN",getState().common.loanHistory);
                return dispatch(this.setLoanContent(data.clientdata));
            })

        }

    }
    setLoanContent(data: any) {
        return { type: SET_LOAN_CONTENT, payload: data }
    }

    getAllBooks() {
        return (dispatch: any, getState: any) => {
            return this.dataService.getAll(DEFAULT_URL + "book/" + "topn/" + "8").subscribe((data: any) => {
                console.log(data, "COMMON ACTIONS BOOKS",getState().common.allBooks);
                return dispatch(this.setAllBooks(data.clientdata));
            })

        }

    }
    setAllBooks(data: any) {
        return { type: SET_ALL_BOOKS, payload: data }
    }



    login(url: any, id: any) {
        return (dispatch: any, getState: any) => {
            return this.dataService.getById(DEFAULT_URL + url, id)
                .subscribe((data: any) => {
                    return dispatch(this.setPerson(data.clientdata));
                })
        }
    }





    //dispatcher methods
    setPerson(data: any) {
        return { type: SET_PERSON, payload: data }
    }


    setGridData(data: any) {
        return { type: SET_GRID_DATA, payload: data }
    }
    setBookGridData(data: any) {
        return { type: SET_BOOK_GRID_DATA, payload: data }
    }

    setPersonGridData(data: any) {
        return { type: SET_PERSON_GRID_DATA, payload: data }
    }
    getCommontest() {
        return (dispatch: any, getState: any) => {
            return this.dataService.getAll(DEFAULT_URL + "commonTests")
                .subscribe((data: any) => {
                    return dispatch(this.updateCommontests(data));
                })
        }

    }

    updateCommontests(data: any) {
        return { type: SET_COMMON_TEST, payload: data }
    }

    setShowPersonPopup(data:any)
    {
            return{ type: SET_SHOW_PERSON_POPUP, payload:data}

    }

    setShowBooksPopup(data:any)
    {
        return{ type: SET_SHOW_BOOKS_POPUP,payload:data}
    }
    getTableId(id:any) {
        return (dispatch: any, getState: any) => {
            return this.dataService.getById(DEFAULT_URL + "systbltsk/bytableid/" , id)
            .subscribe((data: any) => {
                return dispatch(this.setTableId(data.clientdata));
            })

        }

    }
    setTableId(data: any) {
        return { type: SET_TABLE_ID, payload: data }
    }


    getShowAllBooks()
    {
        return(dispatch:any, getState:any)=>{
            return this.dataService.getAll(DEFAULT_URL+"book").subscribe((data:any)=>{
                return dispatch(this.setShowAllBooks(data.clientdata));
            })
        }
    }

    setShowAllBooks(data:any)
    {
        return{type:SET_SHOW_ALL_BOOKS, payload:data}
    }

    getShowAllHistory()
    {
        return(dispatch:any, getState:any)=>{
            return this.dataService.getAll(DEFAULT_URL+"loan").subscribe((data:any)=>{
                return dispatch(this.setShowAllHistory(data.clientdata));
            })
        }
    }

    setShowAllHistory(data:any)
    {
        return{type:SET_SHOW_ALL_HISTORY, payload:data}
    }
}

