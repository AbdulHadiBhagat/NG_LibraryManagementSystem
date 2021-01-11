import { BookState } from "./book-state";

export const  SET_BOOK_DETAIL = "book_detail";
export const GET_LOAN = "loanS";
export const GET_ONHOLDREQUETS = "onHoldRequests";
export const SET_BOOK_ID = "BookId";

const initialState : BookState = {

book_detail:[],
loans:[],
onHoldRequests:[],
book_id : -1

}

export const bookReducer = function(
    state: BookState = initialState,
    action: any
  ): BookState {

    switch(action.type){

        case SET_BOOK_DETAIL:
            return {
                ...state,
                book_detail: action.payload
            }

            case GET_LOAN:
                return {
                    ...state,
                    loans: action.payload
                }


                case GET_ONHOLDREQUETS:
                return {
                    ...state,
                    onHoldRequests: action.payload
                }

    }

    return initialState;
  }