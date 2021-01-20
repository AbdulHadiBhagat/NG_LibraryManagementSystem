<<<<<<< HEAD
import { SET_CLERK_LIST, SET_LIBRARIAN_LIST, SET_PERSON_DETAILS, SET_PERSON_ID, SET_PERSON_LOAN_REQUESTS, SET_PERSON_ONHOLD_REQUESTS } from "./manage-actions";
=======
import { SET_ACCEPT_ONHOLD_REQUEST, SET_CLERK_LIST, SET_LIBRARIAN_LIST, SET_PERSON_DETAILS, SET_PERSON_LOAN_REQUESTS, SET_PERSON_ONHOLD_REQUESTS } from "./manage-actions";
>>>>>>> 9355a80682f10376e35c8d1e55fd025b2d39c5c5
import { ManageState } from "./manage-state";

const initialState : ManageState = {

    clerkList: [],
    librarianList:[],
    personId:55,
    personDetails:{},
    personOnHold:{},
    personLoan:{},
    acceptOnHoldRequest:{}
}

export const manageReducer = function(
    state: ManageState = initialState,
    action: any
  ): ManageState {

    switch(action.type){

        case SET_CLERK_LIST:
            return {
                ...state,
                clerkList: action.payload
            }

            case SET_LIBRARIAN_LIST:
                console.log(action.payload,"libraran list reducer");
                return {
                    ...state,
                    librarianList: action.payload
                }

        case SET_PERSON_DETAILS:
            return {
                ...state,
                personDetails: action.payload
            }
        case SET_PERSON_ONHOLD_REQUESTS:
            return{
                ...state,
                personOnHold: action.payload

            }
        case SET_PERSON_LOAN_REQUESTS:
            return{
                ...state,
                personLoan: action.payload
            }
        case SET_ACCEPT_ONHOLD_REQUEST:
            return{
                ...state,
                acceptOnHoldRequest:action.payload
            }

        case SET_PERSON_ID:
            return{
                ...state,
                personId: action.payload
            }    

    }

    return initialState;
  }