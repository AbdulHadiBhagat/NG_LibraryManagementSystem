import { SET_CLERK_LIST, SET_LIBRARIAN_LIST, SET_PERSON_DETAILS, SET_PERSON_LOAN_REQUESTS, SET_PERSON_ONHOLD_REQUESTS } from "./manage-actions";
import { ManageState } from "./manage-state";

const initialState : ManageState = {

    clerkList: [],
    librarianList:[],
    personId:47,
    personDetails:{},
    personOnHold:{},
    personLoan:{}
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
                personOnHold: action.payload
            }

    }

    return initialState;
  }