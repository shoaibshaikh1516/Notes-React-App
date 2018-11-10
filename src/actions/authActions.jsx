import { GET_ERRORS } from './types';
import axios from 'axios';

export const registerUser = userData => dispatch => {
  axios
    .post('http://localhost:8080/api/user/add', userData)
    .then(res => console.log(res.data))
    .catch(err => {
      var extractedObject = {};

      let s = err.response.data.errors;
      s.map(item => {
        extractedObject[item.field] = item.defaultMessage;
      });

      // this.setState({ errors: extractedObject });

      dispatch({
        type: GET_ERRORS,
        payload: extractedObject,
      });
    });
};
