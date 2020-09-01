import {combineReducers} from 'redux';

import contactReducer from './contactReducer';
import alertReducer from './alertReducer'
import authreducer from './authReducer'; 


export default combineReducers({
    contacts:contactReducer,
    alert:alertReducer,
    auth:authreducer

})