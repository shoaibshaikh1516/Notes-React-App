import React, { Component } from 'react';
import axios from 'axios';

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

    case 'DELETE_NOTE':
      return {
        ...state,
        notes: state.notes.filter(Note => Note.id !== action.payload),
      };
    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
      };
    case 'ADD_NOTE':
      return {
        ...state,
        notes: [action.payload, ...state.notes],
      };
    case 'UPDATE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.map(
          contact =>
            contact.id === action.payload.id
              ? (contact = action.payload)
              : contact
        ),
      };

    default:
      return state;
  }
};
export class Provider extends Component {
  state = {
    contacts: [],
    notes: [],
    dispatch: action => this.setState(state => reducer(state, action)),
  };

  async componentDidMount() {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    const resNotes = await axios.get('http://localhost:8080/api/note');

    this.setState({ contacts: res.data });

    this.setState({ notes: resNotes.data });
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
