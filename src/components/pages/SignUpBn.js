import React, { Component } from 'react';
import SignUp from './SignUp';

class SignUpBn extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-7 offset-3 ">
          <SignUp />
        </div>
      </div>
    );
  }
}

export default SignUpBn;
