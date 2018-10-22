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
