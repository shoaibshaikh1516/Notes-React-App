import { TEST_DISPATCH } from './types';
import axios from 'axios';

export const registerUser = userData => {
  var extractedObject = {};

  return {
    type: TEST_DISPATCH,
    payload: userData,
  };
  // axios
  //   .post('http://localhost:8080/api/user/add', newUser)
  //   .then(res => console.log(res.data))
  //   .catch(err => {
  // let s = err.response.data.errors;
  // s.map(item => {
  //   extractedObject[item.field] = item.defaultMessage;
  // });

  // this.setState({ errors: extractedObject });
  //   });

  // this.props.registerUser(newUser);
};
