import React, { Component } from 'react';
import MainLogin from '../login/MainLogin';
import SignUp from './SignUp';

class Login extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col col-lg-6">
            <MainLogin />
            <SignUp />
          </div>
        </div>
      </div>
    );
  }
}

export default Login;

{
  /* <div className="row">
<div className="col-md col-md-off-4"> */
}
