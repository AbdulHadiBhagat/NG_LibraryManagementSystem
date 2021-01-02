import { CommonState } from 'src/app/store/Common-Store/common-state'
import { SysTblTsk } from 'src/app/modules/SysTblTsk/SysTblTskModel';
import { SET_PERSON } from './common.actions';


const initialState : CommonState = {
    sysMenu:{
        menuSeq:-1,
        menuText:"",
        menuLevel:-1,
        prntSeq:-1,
        routrPath:"",
        actionURL:"",
        compnent:"",
        menuPos:-1,
        tblID:-1,
        roles:"",
        isBusinessMenu:"",
        fldrCod:-1,
        fldrKey:"",
        stsList:[],
    
    },

    person:{} ,
    sysTblTsk:{},
    commonTest:{},

}

export const commonReducer = function(
    state: CommonState = initialState,
    action: any
  ): CommonState {

    switch(action.type){

        case SET_PERSON:
            return {
                ...state,
                person: action.payload
            }

    }

    return initialState;
  }