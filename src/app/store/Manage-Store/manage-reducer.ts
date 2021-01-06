import { SET_CLERK_LIST, SET_LIBRARIAN_LIST } from "./manage-actions";
import { ManageState } from "./manage-state";

const initialState : ManageState = {

    clerkList: [],
    librarianList:[]
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
                return {
                    ...state,
                    librarianList: action.payload
                }

    }

    return initialState;
  }