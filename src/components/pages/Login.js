import React, { Component } from 'react';
import MainLogin from '../login/MainLogin';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
class Login extends Component {
  render() {
    return (
      <div className="row ">
        <div className="col offset-6 ">
          <MainLogin />
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
