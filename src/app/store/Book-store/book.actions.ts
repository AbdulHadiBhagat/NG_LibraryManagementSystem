import { Injectable } from '@angular/core';
import { DataService } from '../../data.service'
import { GET_LOAN, GET_ONHOLDREQUETS, SET_BOOK_DETAIL} from './book-reducer';

export const SET_BOOK_ID = "BookId";
export const DEFAULT_URL = "http://localhost:8080/"

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

//ONHOLD K ACTIONS

addOnHoldRequest(url:any,obj:any){
  return(dispatch:any,getState:any)=>{
    return this.dataService.post(DEFAULT_URL + url , obj )
    .subscribe((data:any)=>{
        return dispatch(this.setOnHoldRequest(data));
    } )  
  }}

setOnHoldRequest(data:any){
  return { type:GET_ONHOLDREQUETS , payload: data }
}


updateOnHoldRequest(url:any,obj:any){
  return(dispatch:any,getState:any)=>{
    return this.dataService.put(DEFAULT_URL + url , obj )
    .subscribe((data:any)=>{
        return dispatch(this.setUpdateOnHoldRequest(data));
    } )  
  }}

  setUpdateOnHoldRequest(data:any){
  return { type:GET_ONHOLDREQUETS , payload: data }
}

deleteOnHoldRequest(url:any,id:any , versionNo:any){
  return(dispatch:any,getState:any)=>{
      return this.dataService.delete(DEFAULT_URL + url,id ,versionNo)
      .subscribe((data:any)=>{
          // return dispatch(this.setdeletePerson(data));
      } )  }
}

//LOAN K ACTIONS

addLoan(url:any,obj:any){
  return(dispatch:any,getState:any)=>{
    return this.dataService.post(DEFAULT_URL + url , obj )
    .subscribe((data:any)=>{
        return dispatch(this.setaddLoan(data));
    } )  
  }}

setaddLoan(data:any){
  return { type:GET_LOAN , payload: data }
}


updateLoan(url:any,obj:any){
  return(dispatch:any,getState:any)=>{
    return this.dataService.put(DEFAULT_URL + url , obj )
    .subscribe((data:any)=>{
        return dispatch(this.setUpdateLoan(data));
    } )  
  }}

  setUpdateLoan(data:any){
  return { type:GET_LOAN , payload: data }
}

deleteLoan(url:any,id:any , versionNo:any){
  return(dispatch:any,getState:any)=>{
      return this.dataService.delete(DEFAULT_URL + url,id ,versionNo)
      .subscribe((data:any)=>{
          // return dispatch(this.setdeletePerson(data));
      } )  }
}


//BOOK K ACTIONS

addBook(url:any,obj:any){
  return(dispatch:any,getState:any)=>{
    return this.dataService.post(DEFAULT_URL + url , obj )
    .subscribe((data:any)=>{
        return dispatch(this.setaddBook(data));
    } )  
  }}

  setaddBook(data:any){
  return { type:SET_BOOK_DETAIL , payload: data }
}


updateBook(url:any,obj:any){
  return(dispatch:any,getState:any)=>{
    return this.dataService.put(DEFAULT_URL + url , obj )
    .subscribe((data:any)=>{
        return dispatch(this.setUpdateBook(data));
    } )  
  }}

  setUpdateBook(data:any){
  return { type:SET_BOOK_DETAIL , payload: data }
}

deleteBook(url:any,id:any , versionNo:any){
  return(dispatch:any,getState:any)=>{
      return this.dataService.delete(DEFAULT_URL + url,id,versionNo)
      .subscribe((data:any)=>{
          // return dispatch(this.setdeletePerson(data));
      } )  }
}
  }

