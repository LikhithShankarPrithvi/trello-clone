import {combineReducers} from 'redux';
import appReducer from './listReducer';


export default combineReducers(
    {
        lists:appReducer
    }
);