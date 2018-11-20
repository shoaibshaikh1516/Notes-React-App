import React, { Component } from "react";

import classnames from "classnames";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { registerUser } from "../../actions/authActions";
import TextInputGroup from "../../components/layout/TextInputGroup";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      role: "1",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/notes");
    }
  }

  //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      passwordConfirmation: this.state.passwordConfirmation,
      role: this.state.role
    };

    this.props.registerUser(newUser, this.props.history);
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Sign Up</h1>
              <p className="lead text-center">
                Create your JOTer/SEMIBREVE account
              </p>
              <form noValidate onSubmit={this.onSubmit}>
                <TextInputGroup
                  placeholder="Name"
                  name="name"
                  type="text"
                  value={this.state.name}
                  onChange={this.onChange}
                  error={errors.name}
                />

                <TextInputGroup
                  placeholder="Last Name"
                  name="lastName"
                  type="text"
                  value={this.state.lastName}
                  onChange={this.onChange}
                  error={errors.lastName}
                />

                <TextInputGroup
                  placeholder="Email Address"
                  name="email"
                  type="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  error={errors.email}
                />

                <TextInputGroup
                  placeholder="Password"
                  name="password"
                  type="password"
                  value={this.state.password}
                  onChange={this.onChange}
                  error={errors.password}
                />

                <TextInputGroup
                  placeholder="Confirm Password"
                  name="passwordConfirmation"
                  type="password"
                  value={this.state.passwordConfirmation}
                  onChange={this.onChange}
                  error={errors.passwordConfirmation}
                />

                <input
                  type="submit"
                  className="btn btn-info btn-block mt-4 mb-4  "
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapstateToProps = state => ({ auth: state.auth, errors: state.errors }); // so what this does is it states value in auth so we can acces it by using// this.props.auth.user  or this.props.auth.isAuthenticated

export default connect(
  mapstateToProps,
  { registerUser }
)(withRouter(Register));
//best to study till here
