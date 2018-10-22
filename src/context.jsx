import React, { Component } from 'react';

const Context = React.createContext();

export class Provider extends Component {
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
      {
        id: 3,
        name: 'Joe',
        email: 'shoaib@gmail.com',
        phone: '777-777-777',
      },
    ],
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
