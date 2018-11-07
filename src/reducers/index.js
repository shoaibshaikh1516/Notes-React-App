import { combineReducers } from 'redux';
import contactReducer from './contactReducer';
import noteReducer from './noteReducer';
import authReducer from './authReducer';

export default combineReducers({
  contact: contactReducer,
  note: noteReducer,
  auth: authReducer,
});
