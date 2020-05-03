import { combineReducers } from 'redux';
import authReducer from './authReducer';
import writingReducer from './writingReducer';
import letterReducer from './letterReducer';

export default combineReducers({
    authReducer,
    writingReducer,
    letterReducer,
})