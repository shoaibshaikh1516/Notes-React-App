import React, { Component } from 'react';

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
          <h1>{contact.name}</h1>
        ))}
      </div>
    );
  }
}

export default Contacts;
