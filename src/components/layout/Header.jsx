import React from 'react';
import PropTypes from 'prop-types';

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
              <a href="/" className="nav-link">
                Home
              </a>
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
