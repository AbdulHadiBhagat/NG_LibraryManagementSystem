import { AppStateRedux } from "./app.state";
import { Reducer, combineReducers, Action } from 'redux';
import { testReducer } from './test-store/test.reducer';
import { commonReducer } from "./Common-Store/common-reducer";
import { manageReducer } from "./Manage-Store/manage-reducer";
import { bookReducer } from "./Book-store/book-reducer";

const rootReducer: Reducer<AppStateRedux> = combineReducers<AppStateRedux>({
    test : testReducer,
    common: commonReducer,
    manage: manageReducer,
    book : bookReducer
})

export default rootReducer;