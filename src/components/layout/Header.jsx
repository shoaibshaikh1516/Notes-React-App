import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = props => {
  const { branding } = props;

  return (
    <nav
      style={headingStyles}
      className="navbar navbar-expand-sm navbar-dark mb-3 py-0 sb"
    >
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                <i className="far fa-address-book" /> Contact
              </Link>
            </li>
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
              <Link to="/notes" className="nav-link">
                <i className="far fa-sticky-note" /> Notes
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
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  branding: 'My app',
};

Header.propTypes = {
  branding: PropTypes.string.isRequired,
};

const headingStyles = {
  background: '#6a10b4',
};

export default Header;
