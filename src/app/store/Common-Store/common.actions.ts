import { Injectable } from '@angular/core';
import { DataService } from '../../data.service'


export const SET_PERSON = "setPerson";
export const SET_COMMON_TEST ="setCommontest";
export const SET_GRID_DATA="setGridData"

export const DEFAULT_URL = "localhost:8080/"
@Injectable({
    providedIn: 'root'
  })

  export class CommonActions
  {
    dataService:any;
    

    constructor(dataService:DataService) {
        this.dataService = dataService;
        
    }


    // getGridData()
    // {
    //     return(dispatch:any,getState:any)=>{
    //         return this.booksPopup.getSelectedData("data").subscribe((data:any)=>{
    //             return dispatch(this.setGridData(data));
    //         })

    //     }

    // }

    login(url:any,id:any){
        return (dispatch:any,getState:any) => {
            return this.dataService.getById(DEFAULT_URL+ url , id)
            .subscribe((data:any)=> {
                return dispatch(this.setPerson(data));
            })
        }
    }

    //dispatcher methods
setPerson(data:any){
    return {type : SET_PERSON, payload : data}
}
    setGridData(data:any){
        return{type:SET_GRID_DATA, payload: data}
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

