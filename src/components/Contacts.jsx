import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'Shyam',
        email: 'shyam@gmail.com',
        phone: '333-333-555',
      },
      {
        id: 2,
        name: 'Shoaib',
        email: 'shoaib@gmail.com',
        phone: '777-777-777',
      },
    ],
  };

  render() {
    const { contacts } = this.state;

    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            contact={contact} // passing entire object
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
