import { AppStateRedux } from "./app.state";
import { Reducer, combineReducers, Action } from 'redux';
import { testReducer } from './test-store/test.reducer';
import { commonReducer } from "./Common-Store/common-reducer";

const rootReducer: Reducer<AppStateRedux> = combineReducers<AppStateRedux>({
    test : testReducer,
    common: commonReducer
})

export default rootReducer;