import React, { Component } from 'react';
import Contact from './Contact';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getContacts } from '../../actions/contactActions';
import isEmpty from '../../validation/is-empty';
import Spinner from '../common/spinner';


class Contacts extends Component {
  componentDidMount = () => {
    this.props.getContacts();
    console.log(' componentDidMount() Contacts');
  };

  render() {
    const { contacts } = this.props;
    console.log(' this.props');
    let contactsContent;
    if (isEmpty(contacts)) {
      contactsContent = <Spinner />;
    } else {
      contactsContent = (
        <React.Fragment>
          <h1 className="display-4 mb-2">
            <span className="text-danger">Contact</span> List
          </h1>

          {contacts.map(contact => (
            <Contact key={contact.id} contact={contact} />
          ))}
        </React.Fragment>
      );
    }
    return <React.Fragment> {contactsContent}</React.Fragment>;
  }
}

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  getContacts: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ contacts: state.contact.contacts });

export default connect(
  mapStateToProps,
  { getContacts }
)(Contacts);
