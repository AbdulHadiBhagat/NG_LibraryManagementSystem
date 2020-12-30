import { testState } from "./test.state";
import { UPDATE_TEST_CASES } from "./test.actions";

const initialState : testState = {
    id: "",
    name: "",
    fName: "",
    testcases : {}
}

export const testReducer = function(
    state: testState = initialState,
    action: any
  ): testState {

    switch(action.type){

        case UPDATE_TEST_CASES:
            return {
                ...state,
                testcases: action.type.payload
            }

    }

    return initialState;
  }