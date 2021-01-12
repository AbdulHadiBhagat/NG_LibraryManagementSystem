import { CommonState } from 'src/app/store/Common-Store/common-state'
import { SysTblTsk } from 'src/app/modules/SysTblTsk/SysTblTskModel';
import { SET_ALL_BOOKS, SET_BOOK_GRID_DATA, SET_LOAN_CONTENT, SET_PERSON, SET_PERSON_GRID_DATA, SET_CONTENT, SET_TABLE_ID } from './common.actions';
import { SET_GRID_DATA } from './common.actions'


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
    personGridData: {}



}

export const commonReducer = function (
    state: CommonState = initialState,
    action: any
): CommonState {

    switch (action.type) {

        case SET_PERSON:
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

            case SET_TABLE_ID:
                return {
                    ...state,
                    sysTblTsk: action.payload
                }

    }

    return initialState;
}