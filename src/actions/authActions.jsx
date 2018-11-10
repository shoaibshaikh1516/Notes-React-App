import { GET_ERRORS, SET_CURRENT_USER } from './types';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

export const registerUser = (userData, history) => dispatch => {
  axios
    .post('http://localhost:8080/api/user/add', userData)
    .then(res => history.push('/login'))
    .catch(err => {
      var extractedObject = {};

      let s = err.response.data.errors;
      s.map(item => {
        extractedObject[item.field] = item.defaultMessage;
      });
      dispatch({
        type: GET_ERRORS,
        payload: extractedObject,
      });
    });
};

//login get USER Token

export const loginUser = userData => dispatch => {
  axios
    .post('http://localhost:8080/auth/login', userData)
    .then(res => {
      //save to localstoreage
      const { token } = res.data;
      //seet token to ls
      localStorage.setItem('jwtToken', token);
      //Set token to auth header
      setAuthToken(token);

      const decoded = jwt_decode(token);
      //Set current user

      dispatch(setCurrentUser(decoded));
    })
    .catch(err => {
      var extractedObject = {};

      let s = err.response.data.errors;
      s.map(item => {
        extractedObject[item.field] = item.defaultMessage;
      });
      dispatch({
        type: GET_ERRORS,
        payload: extractedObject,
      });
    });
};

//Set Logged in user

export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};
