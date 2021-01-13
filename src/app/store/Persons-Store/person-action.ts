import { Injectable } from '@angular/core';
import { DataService } from '../../data.service'

export const SET_ADD_PERSON = "personAdd";
export const SET_DELETE_PERSON = "personDelete";
export const SET_UPDATE_PERSON = "personUpdate";

export const DEFAULT_URL = "localhost:8080/"

@Injectable({
    providedIn: 'root'
  })

  export class PersonActions
  {
    dataService:any;
      

    constructor(dataService:DataService) {
        this.dataService = dataService;
        
    }

  getPersonAdd(){
        return(dispatch:any,getState:any)=>{
            return this.dataService.getAll(DEFAULT_URL + "")
            .subscribe((data:any)=>{
                return dispatch(this.updatePersonAdd(data));
            } )
    }
}

updatePersonAdd(data:any){
    return{type:SET_ADD_PERSON , payload : data }
}

getPersonDelete(){
    return(dispatch:any,getState:any)=>{
        return this.dataService.getAll(DEFAULT_URL +  "")
        .subscribe((data:any)=>{
            return dispatch(this.updatePersonDelete(data));
        } )
}
}

updatePersonDelete(data:any){
return{type:SET_DELETE_PERSON , payload : data }
}


getPersonUpdate(){
    return(dispatch:any,getState:any)=>{
        return this.dataService.getAll(DEFAULT_URL +  "")
        .subscribe((data:any)=>{
            return dispatch(this.updatePersonUpdate(data));
        } )
}
}

updatePersonUpdate(data:any){
return{type:SET_DELETE_PERSON , payload : data }
}




    //dispatcher methods
    // setPerson(data:any){
    //     return {type : SET_PERSON, payload : data}
    // }
    //     setGridData(data:any){
    //         return{type:SET_GRID_DATA, payload: data}
    //     }
    //     getCommontest(){
    //         return(dispatch:any,getState:any)=>{
    //             return this.dataService.getAll(DEFAULT_URL + "commonTests")
    //             .subscribe((data:any)=>{
    //                 return dispatch(this.updateCommontests(data));
    //             } )
    //         }
    
    //     }
    
    //     updateCommontests(data:any){
    //         return{type:SET_COMMON_TEST , payload : data }
    //     }

  }