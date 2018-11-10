import { GET_ERRORS, SET_CURRENT_USER } from './types';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

export const registerUser = (userData, history) => dispatch => {
  axios
    .post('http://localhost:8080/api/user/add', userData)
    .then(res => history.push('/login')) //redux login action
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
      // Save to localStorage
      const { token } = res.data;
      // Set token to ls
      localStorage.setItem('jwtToken', token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

//Set Logged in user

export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};
