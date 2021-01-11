import { Injectable } from '@angular/core';
import { DataService } from '../../data.service'

export const SET_CLERK_LIST = "clerkList";
export const SET_LIBRARIAN_LIST = "LibrarianList";
export const SET_PERSON_DETAILS="setPersonDetails";
export const SET_PERSON_ONHOLD_REQUESTS="setPersonOnHoldRequests";
export const SET_PERSON_LOAN_REQUESTS="setPersonLoanRequests";



export const DEFAULT_URL = "http://localhost:8080/"

@Injectable({
    providedIn: 'root'
  })

export class ManageActions
  {
    dataService:any;
      

    constructor(dataService:DataService) {
        this.dataService = dataService;
        
    }


    getClerkList(){
        return(dispatch:any,getState:any)=>{
            return this.dataService.getAll(DEFAULT_URL + "/person" + "/clerks")
            .subscribe((data:any)=>{
                return dispatch(this.updateClerkList(data));
            } )
    }
}

updateClerkList(data:any){
    return{type:SET_CLERK_LIST , payload : data }
}

getLibrarianList(){
    return(dispatch:any,getState:any)=>{
        return this.dataService.getAll(DEFAULT_URL +  "/person" + "/librarians")
        .subscribe((data:any)=>{
            return dispatch(this.updateLibrariankList(data));
        } )
}
}

updateLibrariankList(data:any){
return{type:SET_LIBRARIAN_LIST , payload : data }
}

getPersonDetails(id:any)
{
    return(dispatch:any,getState:any)=>{
        return this.dataService.getById(DEFAULT_URL+"person/",id).subscribe((data:any)=>{
            return dispatch(this.setPersonDetails(data.clientdata));
        })
}
}

setPersonDetails(data:any)
{
    return{ type:SET_PERSON_DETAILS, payload: data}

}

getPersonOnHoldRequests(url:any,id:any){
    return(dispatch:any,getState:any)=>{
        return this.dataService.getById(DEFAULT_URL+url,id).subscribe((data:any)=>{
            return dispatch(this.setPersonOnHoldRequests(data.clientdata));
        })
    }
}

setPersonOnHoldRequests(data:any){
    return{ type: SET_PERSON_ONHOLD_REQUESTS, payload:data}
}

getPersonLoanRequests(url:any,id:any){
    return(dispatch:any,getState:any)=>{
        return this.dataService.getById(DEFAULT_URL+url,id).subscribe((data:any)=>{
            return dispatch(this.setPersonLoanRequests(data.clientdata));
        })
    }
}

setPersonLoanRequests(data:any){
    return{ type: SET_PERSON_LOAN_REQUESTS, payload:data}

}

  }
