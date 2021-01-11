import { BookState } from './Book-store/book-state';
import { CommonState } from './Common-Store/common-state';
import { testState } from './test-store/test.state';

export interface AppStateRedux {
    test:testState,
    common:CommonState,
    book:BookState
}