import { combineReducers } from 'redux';
import contactReducer from './contactReducer';
import noteReducer from './noteReducer';

export default combineReducers({ contact: contactReducer, note: noteReducer });
