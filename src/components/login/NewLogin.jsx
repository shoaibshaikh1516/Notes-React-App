import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SetAuthToken from '../../SetAuthToken';
class NewLogin extends Component {
  state = {
    username: '',
    password: '',
    errors: {},
  };

  notify = () => toast('Wow so easy !');
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = async (dispatch, e) => {
    e.preventDefault();

    const { username, password } = this.state;

    //Check for errors

    if (username === '') {
      this.setState({ errors: { username: 'Email is required' } });
      return;
    }
    if (password === '') {
      this.setState({ errors: { password: 'Password is required' } });
      return;
    }

    const newSignUp = {
      username,
      password,
    };

    try {
      const res = await axios.post(
        'http://localhost:8080/auth/login',
        newSignUp
      );
      localStorage.setItem('jwttoken', res.data.token);
      SetAuthToken(res.data.token);
      dispatch({ type: 'USER_LOGIN', payload: res.data });
    } catch (e) {
      console.log(e);

      return (
        <div>
          <button onClick={this.notify}>Notify !</button>
          <ToastContainer />
        </div>
      );
    }

    //Clear State post add in list

    this.setState({
      username: '',
      password: '',
      errors: {},
    });

    this.props.history.push('/notes');
  };
  render() {
    const { username, password, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="row">
              <div className="col-md-4 offset-4 ">
                <div className="card mb-3">
                  <div className="card-header text-center">
                    <div className="row">
                      <div className="col ">
                        <i className="fas fa-lock" />
                      </div>
                      <div className="col mr-auto"> Login</div>
                    </div>
                  </div>

                  <div className="card-body">
                    <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                      <TextInputGroup
                        label="Email"
                        name="username"
                        type="username"
                        placeholder="Enter Email"
                        value={username}
                        onChange={this.onChange}
                        error={errors.username}
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
