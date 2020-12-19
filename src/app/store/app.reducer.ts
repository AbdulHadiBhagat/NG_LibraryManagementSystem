import { AppStateRedux } from "./app.state";
import { Reducer, combineReducers, Action } from 'redux';
import { testReducer } from './test-store/test.reducer';

const rootReducer: Reducer<AppStateRedux> = combineReducers<AppStateRedux>({
    test : testReducer
})

export default rootReducer;