import { combineReducers } from 'redux';
import contactReducer from './contactReducer';
import noteReducer from './noteReducer';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import notesWithPaginationReducer from './notesWithPaginationReducer';

export default combineReducers({
  contact: contactReducer,
  note: noteReducer,
  auth: authReducer,
  errors: errorReducer,
  notesWith: notesWithPaginationReducer,
 
});
