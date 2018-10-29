import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios';

class NewLogin extends Component {
  state = {
    email: '',
    password: '',
    errors: {},
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = async (dispatch, e) => {
    e.preventDefault();

    const { email, password } = this.state;

    //Check for errors

    if (email === '') {
      this.setState({ errors: { email: 'Email is required' } });
      return;
    }
    if (password === '') {
      this.setState({ errors: { password: 'Password is required' } });
      return;
    }

    const newSignUp = {
      email,
      password,
    };

    try {
      const res = await axios.post(
        'http://localhost:8080/auth/login',
        newSignUp
      );
      console.log(JSON.stringify(res.data));
      console.log('adddingssssss' + res);
      dispatch({ type: 'USER_LOGIN', payload: res.data });
    } catch (e) {
      console.log(e);
    }

    //Clear State post add in list

    this.setState({
      email: '',
      password: '',
      errors: {},
    });

    this.props.history.push('/notes');
  };
  render() {
    const { email, password, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="row">
              <div className="col-md-4 offset-4 ">
                <div className="card mb-3">
                  <div className="card-header">Add User/SignUp</div>
                  <div className="card-body">
                    <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                      <TextInputGroup
                        label="email"
                        name="email"
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={this.onChange}
                        error={errors.email}
                      />
                      <TextInputGroup
                        label="password"
                        name="password"
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={this.onChange}
                        error={errors.password}
                      />

                      <input
                        type="submit"
                        value="LogIn"
                        className="btn btn-light btn-block"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default NewLogin;
