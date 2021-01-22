import { Injectable } from '@angular/core';
import { DataService } from '../../data.service'

export const SET_CLERK_LIST = "clerkList";
export const SET_LIBRARIAN_LIST = "LibrarianList";
export const SET_PERSON_DETAILS = "setPersonDetails";
export const SET_PERSON_ONHOLD_REQUESTS = "setPersonOnHoldRequests";
export const SET_PERSON_LOAN_REQUESTS = "setPersonLoanRequests";
export const SET_PERSON_ID="setPersonId";
export const SET_ACCEPT_ONHOLD_REQUEST="setAcceptOnHoldRequest"


export const DEFAULT_URL = "http://localhost:8080/"

@Injectable({
    providedIn: 'root'
})

export class ManageActions {
    dataService: any;


    constructor(dataService: DataService) {
        this.dataService = dataService;

    }


    getClerkList() {
        return (dispatch: any, getState: any) => {
            return this.dataService.getAll(DEFAULT_URL + "person/byperson" + "/C")
                .subscribe((data: any) => {
                    return dispatch(this.updateClerkList(data.clientdata));
                })
        }
    }

    updateClerkList(data: any) {
        return { type: SET_CLERK_LIST, payload: data }
    }

    getLibrarianList() {
        return (dispatch: any, getState: any) => {
            return this.dataService.getAll(DEFAULT_URL + "person/byperson" + "/L")
                .subscribe((data: any) => {
                    console.log(data.clientdata , "LIBRARIAN LIST")
                    return dispatch(this.updateLibrarianList(data.clientdata));
                })
        }
    }

    updateLibrarianList(data: any) {
        console.log(data,"updateLibrarianList")
        return { type: SET_LIBRARIAN_LIST, payload: data }
    }

    getPersonDetails(id: any) {
        return (dispatch: any, getState: any) => {
            return this.dataService.getById(DEFAULT_URL + "person/", id).subscribe((data: any) => {
                return dispatch(this.setPersonDetails(data.clientdata));
            })
        }
    }

    setPersonDetails(data: any) {
        return { type: SET_PERSON_DETAILS, payload: data }

    }

    getPersonOnHoldRequests(url: any, id: any) {
        return (dispatch: any, getState: any) => {
            return this.dataService.getById(DEFAULT_URL + url, id).subscribe((data: any) => {
                return dispatch(this.setPersonOnHoldRequests(data.clientdata));
            })
        }
    }

    setPersonOnHoldRequests(data: any) {
        return { type: SET_PERSON_ONHOLD_REQUESTS, payload: data }
    }

    getPersonLoanRequests(url: any, id: any) {
        return (dispatch: any, getState: any) => {
            return this.dataService.getById(DEFAULT_URL + url, id).subscribe((data: any) => {
                return dispatch(this.setPersonLoanRequests(data.clientdata));
            })
        }
    }

    setPersonLoanRequests(data: any) {
        return { type: SET_PERSON_LOAN_REQUESTS, payload: data }

    }

    addPerson(url:any, obj:any){
        return(dispatch:any,getState:any)=>{
            return this.dataService.post(DEFAULT_URL + url , obj )
            .subscribe((data:any)=>{
                return dispatch(this.setAddPerson(data));
            } )  }
}


setAddPerson(data:any){
    return { type: SET_PERSON_DETAILS, payload: data }
}

postAcceptOnHoldReqeuest(url:any,id:any,obj:any)
{
    return(dispatch:any,getState:any)=>{
        return this.dataService.post(DEFAULT_URL + url+id , obj )
        .subscribe((data:any)=>{
            return dispatch(this.setAcceptOnHoldRequest(data.clientdata));
        } )  }

}

setAcceptOnHoldRequest(data:any)
{
    return { type: SET_ACCEPT_ONHOLD_REQUEST, payload:data}
}


deleteRejectOnHoldRequest(url:any,id:any,versionNo:any)
{
    return(dispatch:any,getState:any)=>{
        return this.dataService.delete(DEFAULT_URL + url,id , versionNo)
        .subscribe((data:any)=>{
            return dispatch(this.setAcceptOnHoldRequest(data.clientdata));
        } )  }

}

updatePerson(url:any, obj:any){
    return(dispatch:any,getState:any)=>{
        return this.dataService.put(DEFAULT_URL + url , obj )
        .subscribe((data:any)=>{
            return dispatch(this.setUpdatePerson(data));
        } )  }
}


setUpdatePerson(data:any){
return { type: SET_PERSON_DETAILS, payload: data }
}


deletePerson(url:any,id:any , versionNo:any){
    return(dispatch:any,getState:any)=>{
        return this.dataService.delete(DEFAULT_URL + url,id ,versionNo)
        .subscribe((data:any)=>{
            // return dispatch(this.setdeletePerson(data));
        } )  }
        
}

setPersonId(data: any) {
    return { type: SET_PERSON_ID, payload: data }}

    receivedBookFromLoanHistory(url:any,id:any,Obj:any)
    {
        return(dispatch:any,getState:any)=>{
            return this.dataService.put(DEFAULT_URL + url+id,Obj)
            .subscribe((data:any)=>{
                // return dispatch(this.setdeletePerson(data));
            } )  }
            
    }    

}
