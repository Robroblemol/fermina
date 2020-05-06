import { combineReducers } from 'redux';
import authReducer from './authReducer';
import writingReducer from './writingReducer';
import letterReducer from './letterReducer';
import scannedWritingReducer from './scannedWritingReducer';

export default combineReducers({
    authReducer,
    writingReducer,
    letterReducer,
    scannedWritingReducer,
})