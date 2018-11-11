import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';

class Header extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
  }
  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to="/notes" className="nav-link">
            <i className="far fa-sticky-note" /> Notes
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/contact" className="nav-link">
            <i className="far fa-address-book" /> Contact
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/contact/add" className="nav-link">
            <i className="fas fa-plus" /> Add Contact
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/note/add" className="nav-link">
            <i className="fas fa-plus" /> Add Note
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">
            <i className="fas fa-users" />
            About
          </Link>
        </li>

        <li className="nav-item">
          <a
            href=""
            onClick={this.onLogoutClick.bind(this)}
            className="nav-link"
          >
            Logout
          </a>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            <i className="fas fa-sign-in-alt" /> Login
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/signup" className="nav-link">
            <i className="fas fa-user-plus" /> Sign Up
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/about" className="nav-link">
            <i className="fas fa-users" />
            About
          </Link>
        </li>
      </ul>
    );

    return (
      <nav
        style={headingStyles}
        className="navbar navbar-expand-sm navbar-dark mb-3 py-0 sb"
      >
        <div className="container">
          <Link to="/" className="navbar-brand">
            {this.props.branding}
          </Link>
          <div>
            <ul className="navbar-nav mr-auto">
              {isAuthenticated ? authLinks : guestLinks}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

Header.defaultProps = {
  branding: 'My app',
};

Header.propTypes = {
  branding: PropTypes.string.isRequired,
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const headingStyles = {
  background: '#6a10b4',
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Header);
