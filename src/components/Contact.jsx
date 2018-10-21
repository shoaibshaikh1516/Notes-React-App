import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {
  render() {
    const { name, email, phone } = this.props.contact;
    return (
      <div className="card card-body mb-3">
        <h4>{name}</h4>
        <ul className="list-group">
          <li className="list-group-item">
            Email:
            {email}
          </li>
          <li className="list-group-item">
            Phone:
            {phone}
          </li>
        </ul>
      </div>
    );
  }
}

Contact.defaultProps = {
  name: 'User',
  email: 'Nil',
  phone: 'Nil',
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired, //may be check this in future replace string with obj
  phone: PropTypes.string.isRequired,
};

export default Contact;
