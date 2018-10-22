import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(
          Contact => Contact.id !== action.payload
        ),
      };

    default:
      return state;
  }
};
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

    dispatch: action => this.setState(state => reducer(state, action)),
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
