import { Injectable } from '@angular/core';
import { DataService } from '../../data.service'

export const UPDATE_TEST_CASES = "updateTestCase";

export const DEFAULT_URL = "localhost:8080/"
@Injectable({
  providedIn: 'root'
})
export class TestActions {
  
    
    dataService:any;
    constructor(dataService:DataService) {
        this.dataService = dataService;
    }

    getTestCases(){
        return (dispatch:any,getState:any) => {
            return this.dataService.getAll(DEFAULT_URL + "testcases")
            .subscribe((data:any)=> {
                return dispatch(this.updateTestCases(data));
            })
        }
    }

    //dispatcher methods
    updateTestCases(data:any){
        return {type : UPDATE_TEST_CASES, payload : data}
    }



}