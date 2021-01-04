import { CommonState } from './Common-Store/common-state';
import { testState } from './test-store/test.state';

export interface AppStateRedux {
    test:testState,
    common:CommonState
}