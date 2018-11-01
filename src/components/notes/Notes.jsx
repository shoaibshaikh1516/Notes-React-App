import React, { Component } from 'react';
import Note from './Note';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getNotes } from '../../actions/noteActions';

class Notes extends Component {
  componentDidMount = () => {
    this.props.getNotes();
  };

  render() {
    const { notes } = this.props;
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
  }
}

Notes.propTypes = {
  notes: PropTypes.array.isRequired,
  getNotes: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ notes: state.note.notes });

export default connect(
  mapStateToProps,
  { getNotes }
)(Notes);
