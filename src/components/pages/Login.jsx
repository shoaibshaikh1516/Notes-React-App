import React, { Component } from 'react';
import MainLogin from '../login/MainLogin';

class Login extends Component {
  render() {
    return (
      <div class="container">
        <div class="row justify-content-md-center">
          <div class="col col-lg-6">
            <MainLogin />{' '}
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
