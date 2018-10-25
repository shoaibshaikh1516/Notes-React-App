import React, { Component } from 'react';
import Note from './Note';
import { Consumer } from '../../context';

class Notes extends Component {
  //As this going to be handled in context

  render() {
    return (
      <Consumer>
        {value => {
          const { notes } = value;
          return (
            <React.Fragment>
              <h1 className="display-4 mb-2">
                <span style={{ color: '#e94e3a' }}>Note List</span>
              </h1>
              {notes.map(note => (
                <Note
                  key={note.noteid}
                  note={note} // passing entire object
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

export default Notes;
