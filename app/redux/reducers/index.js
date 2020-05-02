import { combineReducers } from 'redux';
import authReducer from './authReducer';
import writingReducer from './writingReducer';

export default combineReducers({
    authReducer,
    writingReducer
})