import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/notes');
    }
  }

  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4"> JOTer/SEMIBREVE</h1>
                <p className="lead">
                  {' '}
                  Stay organized , wherever you are , Create an account.
                </p>
                <hr />

                <Link to="/signup" className="btn btn-lg btn-info mr-3">
                  <i className="fas fa-user-plus" /> Sign Up
                </Link>

                <Link to="/login" className="btn btn-lg btn-light">
                  <i className="fas fa-sign-in-alt" /> Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Landing);
