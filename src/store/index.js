import { createStore, combineReducers } from "redux";
import OanTuTiReducer from './reducers/OanTuTiReducers.js';

const rootReducer = combineReducers({
    OanTuTiReducer,
});

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
export default store;