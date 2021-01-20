import { CommonState } from 'src/app/store/Common-Store/common-state'
import { SysTblTsk } from 'src/app/modules/SysTblTsk/SysTblTskModel';
import { SET_TABLE_ID,SET_ALL_BOOKS, SET_BOOK_GRID_DATA, SET_LOAN_CONTENT, SET_PERSON, SET_PERSON_GRID_DATA, SET_CONTENT, SET_SHOW_PERSON_POPUP, SET_SHOW_BOOKS_POPUP, SET_SHOW_ALL_BOOKS, SET_SHOW_ALL_HISTORY, SET_BOOK_DETAIL_ID, SET_ON_HOLD_ID, SET_PERSON_DETAIL_ID , SET_PERSONS_BY_TYPE } from './common.actions';
import { SET_GRID_DATA } from './common.actions'
import { State } from '@ngrx/store';


const initialState: CommonState = {
    sysMenu: {
        menuSeq: -1,
        menuText: "",
        menuLevel: -1,
        prntSeq: -1,
        routrPath: "",
        actionURL: "",
        compnent: "",
        menuPos: -1,
        tblID: -1,
        roles: "",
        isBusinessMenu: "",
        fldrCod: -1,
        fldrKey: "",
        stsList: [],

    },

    person: {},
    sysTblTsk: {},
    commonTest: {},
    gridRowData: {},
    loanHistory: {},
    allBooks: {},
    bookGridData: {},
    personGridData: {},
    showPersonPopup:false,
    showBooksPopup:false,
    showAllBooks:{},
    showAllHistory:[],
    bookDetailId:-1,
    personDetailId:-1,
    onHoldId:-1,
    personsByType:{}
}

export const commonReducer = function (
    state: CommonState = initialState,
    action: any
): CommonState {

    switch (action.type) {

        case SET_PERSON:
            console.log(action.payload,"action")
            return {
                ...state,
                person: action.payload
            }

        case SET_BOOK_GRID_DATA:
            return {
                ...state,
                bookGridData: action.payload
            }
        case SET_PERSON_GRID_DATA:
            return {
                ...state,
                personGridData: action.payload
            }
        case SET_LOAN_CONTENT:
            console.log(action.payload, "LOAN DATA")
            return {
                ...state,
                loanHistory: action.payload
            }
        case SET_ALL_BOOKS:
            return {
                ...state,
                allBooks: action.payload
            }
        case SET_GRID_DATA:
            return {
                ...state,
                gridRowData: action.payload
            }
        case SET_SHOW_PERSON_POPUP:
            return {
                ...state,
                showPersonPopup: action.payload

            }
        case SET_SHOW_BOOKS_POPUP:
            return{
                ...state,
                showBooksPopup:action.payload

            }

            case SET_TABLE_ID:
                return {
                    ...state,
                    sysTblTsk: action.payload
                }
            case SET_SHOW_ALL_BOOKS:
                return{
                    ...state,
                    showAllBooks:action.payload
                }
            case SET_SHOW_ALL_HISTORY:
                return{
                    ...state,
                    showAllHistory:action.payload
                }
            case SET_PERSONS_BY_TYPE:
               return {
                    ...state,
                    personsByType:action.payload
                }

                case SET_BOOK_DETAIL_ID:
                return{
                    ...state,
                    bookDetailId:action.payload
                }

                case SET_PERSON_DETAIL_ID:
                return{
                    ...state,
                    personDetailId:action.payload
                }

                case SET_ON_HOLD_ID:
                return{
                    ...state,
                    onHoldId:action.payload
                }

    }

    return initialState;
}