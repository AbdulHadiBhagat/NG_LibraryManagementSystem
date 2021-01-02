import { Injectable } from '@angular/core';
import { DataService } from '../../data.service'

export const SET_PERSON = "setPerson";
export const SET_COMMON_TEST ="setCommontest";

export const DEFAULT_URL = "https://jsonplaceholder.typicode.com/todos/"

@Injectable({
    providedIn: 'root'
  })

  export class CommonActions
  {
    dataService:any;
    constructor(dataService:DataService) {
        this.dataService = dataService;
    }


    getCommontest(){
        return(dispatch:any,getState:any)=>{
            return this.dataService.getAll(DEFAULT_URL + "commonTests")
            .subscribe((data:any)=>{
                return dispatch(this.updateCommontests(data));
            } )
        }

    }

    updateCommontests(data:any){
        return{type:SET_COMMON_TEST , payload : data }
    }
  }

