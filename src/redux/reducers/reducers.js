import { combineReducers } from 'redux';

import {
    nav,
    home,
} from '../actions';

const AppReducer = combineReducers({
    nav,
    home,
});

export default AppReducer;