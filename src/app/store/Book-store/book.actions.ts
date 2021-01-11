import { Injectable } from '@angular/core';
import { DataService } from '../../data.service'
import { GET_LOAN, GET_ONHOLDREQUETS, SET_BOOK_DETAIL} from './book-reducer';

export const SET_BOOK_ID = "BookId";
export const DEFAULT_URL = "localhost:8080/"

@Injectable({
    providedIn: 'root'
  })
  export class BookActions
  {
    dataService:any;
      

    constructor(dataService:DataService) {
        this.dataService = dataService;
        
    }

    getBookDetail(id:any){
      return(dispatch:any,getState:any)=>{
          return this.dataService.getById(DEFAULT_URL+ "book/" , id )
          .subscribe((data:any)=>{
              return dispatch(this.updateBookDetail(data));
          } )
  }
}

updateBookDetail(data:any){
  return{type:SET_BOOK_DETAIL , payload : data }
}




getLoans(id:any){
  return(dispatch:any,getState:any)=>{
      return this.dataService.getById(DEFAULT_URL+ "loan/bybook/" , id )
      .subscribe((data:any)=>{
          return dispatch(this.updateLoans(data));
      } )
}
}

updateLoans(data:any){
  return{type:GET_LOAN , payload : data }
}




getHoldRequests(id:any){
  return(dispatch:any,getState:any)=>{
      return this.dataService.getById(DEFAULT_URL+ "onhold/holdbybook/" , id )
      .subscribe((data:any)=>{
          return dispatch(this.updateHoldRequests(data));
      } )
}
}

updateHoldRequests(data:any){
  return{type:GET_ONHOLDREQUETS , payload : data }
}


setBookId(id:any){
  return{type:SET_BOOK_ID , payload : id }
}

}

