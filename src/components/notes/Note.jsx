import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import JsxParser from 'react-jsx-parser';
import { connect } from 'react-redux';
import { deleteNote } from '../../actions/noteActions';

class Note extends Component {
  state = {
    showNoteInfo: false,
  };

  onDeleteClick = noteid => {
    this.props.deleteNote(noteid);
  };

  render() {
    const { noteid, title, body, userid } = this.props.note;
    const { showNoteInfo } = this.state;

    return (
      <div className="card card-body mb-3">
        <h5>
          {title}

          {showNoteInfo ? ( //sort arrow toggle start
            <i
              onClick={() =>
                this.setState({
                  showNoteInfo: !this.state.showNoteInfo,
                })
              }
              className="fas fa-sort-up"
              style={{ cursor: 'pointer' }}
            />
          ) : (
            <i
              onClick={() =>
                this.setState({
                  showNoteInfo: !this.state.showNoteInfo,
                })
              }
              className="fas fa-sort-down"
              style={{ cursor: 'pointer' }}
            />
          ) //sort arrow toggle End
          }

          <i
            className="fas fa-times"
            style={{
              cursor: 'pointer',
              float: 'right',
              color: '#e94e3a',
            }}
            onClick={this.onDeleteClick.bind(this, noteid)}
          />

          <Link to={`note/edit/${noteid}`}>
            <i
              className="fas fa-pencil-alt"
              style={{
                color: 'black',
                cursor: 'pointer',
                float: 'right',
                marginRight: '1rem',
              }}
            />
          </Link>
        </h5>

        {showNoteInfo ? (
          <ul className="list-group">
            <li className="list-group-item">
              body: <JsxParser jsx={body} />
            </li>
            <li className="list-group-item">userid: {userid}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

// Note.defaultProps = {
//   title: 'User',
//   body: 'Nil',
//   userid: 'Nil',
// };

// Note.propTypes = {
//   title: PropTypes.string.isRequired,
//   body: PropTypes.string.isRequired, //may be check this in future replace string with obj
//   userid: PropTypes.string.isRequired,

//   //not needed
// };

Note.propTypes = {
  note: PropTypes.object.isRequired,
  deleteNote: PropTypes.func.isRequired,
};

export default connect(
  null,
  { deleteNote }
)(Note);
