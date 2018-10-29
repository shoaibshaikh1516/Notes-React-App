import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios';

class SignUp extends Component {
  state = {
    name: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    role: '',
    errors: {},
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = async (dispatch, e) => {
    e.preventDefault();

    const {
      name,
      lastName,
      email,
      password,
      passwordConfirmation,
      role,
    } = this.state;

    //Check for errors
    if (name === '') {
      this.setState({ errors: { name: 'name is required' } });
      return;
    }

    console.log(name);

    if (lastName === '') {
      this.setState({ errors: { lastName: 'lastName is required' } });
      return;
    }

    if (email === '') {
      this.setState({ errors: { email: 'email is required' } });
      return;
    }
    if (password === '') {
      this.setState({ errors: { password: 'password is required' } });
      return;
    }
    if (passwordConfirmation === '') {
      this.setState({
        errors: { passwordConfirmation: 'passwordConfirmation is required' },
      });
      return;
    }
    if (role === '') {
      this.setState({
        errors: { role: 'Role is required' },
      });
      return;
    }

    const newSignUp = {
      name,
      lastName,
      email,
      password,
      passwordConfirmation,
      role,
    };

    const res = await axios.post(
      'http://localhost:8080/api/user/add',
      newSignUp
    );
    console.log(JSON.stringify(res.data));
    console.log('adddingssssss' + res);
    dispatch({ type: 'ADD_USER', payload: res.data });

    //Clear State post add in list

    this.setState({
      name: '',
      lastName: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      role,
      errors: {},
    });

    this.props.history.push('/notes');
  };

  render() {
    const {
      name,
      lastName,
      email,
      password,
      passwordConfirmation,
      role,
      errors,
    } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add User/SignUp</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="name"
                    name="name"
                    type="text"
                    placeholder="Enter name"
                    value={name}
                    onChange={this.onChange}
                    error={errors.name}
                  />

                  <TextInputGroup
                    label="last Name"
                    name="lastName"
                    type="text"
                    placeholder="Enter lastName"
                    value={lastName}
                    onChange={this.onChange}
                    error={errors.lastName}
                  />
                  <TextInputGroup
                    label="email"
                    name="email"
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={this.onChange}
                    error={errors.email}
                  />
                  <TextInputGroup
                    label="password"
                    name="password"
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={this.onChange}
                    error={errors.password}
                  />
                  <TextInputGroup
                    label="Confirmation Password"
                    name="passwordConfirmation"
                    type="password"
                    placeholder="Confirmation Password"
                    value={passwordConfirmation}
                    onChange={this.onChange}
                    error={errors.passwordConfirmation}
                  />
                  <TextInputGroup
                    label="Role"
                    name="role"
                    placeholder="Enter Role"
                    value={role}
                    onChange={this.onChange}
                    error={errors.role}
                  />
                  <input
                    type="submit"
                    value="Add User/SignUp"
                    className="btn btn-light btn-block"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default SignUp;
