import {
  GET_NOTES,
  DELETE_NOTE,
  ADD_NOTE,
  GET_NOTE,
  UPDATE_NOTE,
} from './types';
import axios from 'axios';
///
///
export const getNotes = () => async dispatch => {
  const res = await axios.get(`http://localhost:8080/api/note`);

  dispatch({ type: GET_NOTES, payload: res.data });
};
///
///
export const getNote = noteid => async dispatch => {
  console.log(noteid);
  const res = await axios.get(`http://localhost:8080/api/note/${noteid}`);

  console.log(noteid);

  dispatch({ type: GET_NOTE, payload: res.data });
};
///
///
export const deleteNote = noteid => async dispatch => {
  try {
    await axios.delete(`http://localhost:8080/api/note/delete/${noteid}`);
    dispatch({ type: DELETE_NOTE, payload: noteid }); //for  jsonplaceholder only
  } catch (e) {
    // dispatch({ type: DELETE_NOTE, payload: noteid }); //for  jsonplaceholder only
  }
};
///
///
export const addNote = note => async dispatch => {
  const res = await axios.post('http://localhost:8080/api/note/add', note);
  dispatch({
    type: ADD_NOTE,
    payload: res.data,
  });
};
///
///
export const updateNote = note => async dispatch => {
  const res = await axios.put(
    `http://localhost:8080/api/note/update/${note.noteid}`,
    note
  );
  dispatch({
    type: UPDATE_NOTE,
    payload: res.data,
  });
};
