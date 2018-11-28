import { GET_NOTES_USING_SORTING,GET_NOTES_USING_PAGINATION,UPDATE_NOTES_USING_PAGINATION } from './types';
import axios from 'axios';

// export const getNotesWithPagination = (page=1, size=10,direction="DESC") => async dispatch => {
//   console.log("this is page, size", page, size);
//   page=page-1;
//   const res = await axios.get(
//     `http://localhost:8080/api/notes?page=${page}&size=${size},${direction}`
//   );
//   // console.log(res.data.content);
//   dispatch({ type: GET_NOTES_USING_PAGINATION, payload: res.data });
// };


export const getNotesWithPagination = (page=1, size=10,direction="ASC",sort="noteid") => async dispatch => {
  console.log("this is page, size", page, size);
  page=page-1;
  const res = await axios.get(
    `http://localhost:8080/api/notes?page=${page}&size=${size}&sort=${sort},${direction}`
  );
  // console.log(res.data.content);
  dispatch({ type: GET_NOTES_USING_PAGINATION, payload: res.data });
};

export const getNotesWithSorting = (page=1, size=10,direction="ASC",sort="noteid") => async dispatch => {
  console.log("this is page, size", page, size);
  page=page-1;

  if(direction==="ascending")
  {
    direction="ASC";
  }
  else if(direction==="descending")
  {
    direction="DESC";
  }
  console.log("sorting mai");
  
  const res = await axios.get(
    `http://localhost:8080/api/notes?page=${page}&size=${size}&sort=${sort},${direction}`
  );
  // console.log(res.data.content);
  dispatch({ type: GET_NOTES_USING_SORTING, payload: res.data });
};



export const updateNotesWithPG = (page=1, size=10,direction="DESC",sort="noteid") => async dispatch => {
  console.log("this is page, size", page, size);
  page=page-1;
  const res = await axios.get(
    `http://localhost:8080/api/notes?page=${page}&size=${size},${direction}`
  );
  console.log("resssssss",res.data.content);
  dispatch({ type: UPDATE_NOTES_USING_PAGINATION, payload: res.data });
};


