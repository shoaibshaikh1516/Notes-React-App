import { GET_NOTES_USING_PAGINATION,UPDATE_NOTES_USING_PAGINATION } from './types';
import axios from 'axios';

export const getNotesWithPagination = (page=1, size=10) => async dispatch => {
  console.log("this is page, size", page, size);
  page=page-1;
  const res = await axios.get(
    `http://localhost:8080/api/notes?page=${page}&size=${size}`
  );
  // console.log(res.data.content);
  dispatch({ type: GET_NOTES_USING_PAGINATION, payload: res.data });
};


export const updateNotesWithPG = (page=1, size=10) => async dispatch => {
  console.log("this is page, size", page, size);
  page=page-1;
  const res = await axios.get(
    `http://localhost:8080/api/notes?page=${page}&size=${size}`
  );
  console.log("resssssss",res.data.content);
  dispatch({ type: UPDATE_NOTES_USING_PAGINATION, payload: res.data });
};
