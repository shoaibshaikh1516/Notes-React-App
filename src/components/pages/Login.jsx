import React, { Component } from 'react';
import MainLogin from '../login/MainLogin';

class Login extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col col-lg-6">
            <MainLogin />{' '}
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
