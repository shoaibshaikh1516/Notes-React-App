import React from 'react';
import PropTypes from 'prop-types';

const Header = props => {
  const { branding } = props;
  return (
    <div>
      <h1 style={headerStyle}>{branding}</h1>
    </div>
  );
};

Header.defaultProps = {
  branding: 'My app',
};

Header.propTypes = {
  branding: PropTypes.string.isRequired,
};

const headerStyle = {
  color: 'green',
  fontSize: '50px',
};
export default Header;
