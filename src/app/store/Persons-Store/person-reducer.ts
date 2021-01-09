import { SET_ADD_PERSON, SET_DELETE_PERSON, SET_UPDATE_PERSON } from "./person-action";
import { PersonState } from "./person-state";

const initialState : PersonState = {

    personAdd: [],
    personDelete:[],
    personUpdate:[]
}

export const manageReducer = function(
    state: PersonState = initialState,
    action: any
  ): PersonState {

    switch(action.type){

        case SET_ADD_PERSON:
            return {
                ...state,
                personAdd: action.payload
            }

            case SET_DELETE_PERSON:
                return {
                    ...state,
                    personDelete : action.payload
                }
                case SET_UPDATE_PERSON:
                    return {
                        ...state,
                        personUpdate : action.payload
                    }
    
    }

    return initialState;
  }