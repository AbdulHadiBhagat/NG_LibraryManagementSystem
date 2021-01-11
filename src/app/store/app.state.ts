import { BookState } from './Book-store/book-state';
import { CommonState } from './Common-Store/common-state';
import { ManageState } from './Manage-Store/manage-state';
import { testState } from './test-store/test.state';

export interface AppStateRedux {
    test:testState,
    common:CommonState,
    manage:ManageState,
    book:BookState
}