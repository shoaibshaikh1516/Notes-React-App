import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        {
          name: 'Shyam',
          email: 'shyam@gmail.com',
          phone: '333-333-555',
        },
        {
          name: 'Shoaib',
          email: 'shoaib@gmail.com',
          phone: '777-777-777',
        },
      ],
    };
  }
  render() {
    const { contacts } = this.state;

    return (
      <div>
        {contacts.map(contact => (
          <Contact
            name={contact.name}
            phone={contact.phone}
            email={contact.email}
          />
        ))}
      </div>
    );
  }
}

export default Contacts;
