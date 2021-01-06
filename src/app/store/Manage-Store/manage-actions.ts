import { Injectable } from '@angular/core';
import { DataService } from '../../data.service'

export const SET_CLERK_LIST = "clerkList";
export const SET_LIBRARIAN_LIST = "LibrarianList";


export const DEFAULT_URL = "localhost:8080/"

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
  }
