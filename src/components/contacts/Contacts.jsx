import React, { Component } from 'react';
import Contact from './Contact';
import { Consumer } from '../../context';

class Contacts extends Component {
  //As this going to be handled in context

  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <React.Fragment>
              <h1 className="display-4 mb-2">
                <span style={{ color: '#e94e3a' }}>Contact List</span>
              </h1>
              {contacts.map(contact => (
                <Contact
                  key={contact.id}
                  contact={contact} // passing entire object
                  //As this going to be handled in context
                />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
