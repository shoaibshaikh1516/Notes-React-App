import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../context';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Note extends Component {
  state = {
    showNoteInfo: false,
  };

  onDeleteClick = async (noteid, dispatch) => {
    try {
      await axios.delete(`http://localhost:8080/api/note/delete/${noteid}`);
      //no need to use res obj as we are not getting any thing  back | ref get call
      dispatch({ type: 'DELETE_NOTE', payload: noteid });
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    const { noteid, title, body, userid } = this.props.note;
    const { showNoteInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {title}
                {''}
                <i
                  onClick={() =>
                    this.setState({
                      showNoteInfo: !this.state.showNoteInfo,
                    })
                  }
                  className="fas fa-sort-down"
                  style={{ cursor: 'pointer' }}
                />

                <i
                  className="fas fa-times"
                  style={{
                    cursor: 'pointer',
                    float: 'right',
                    color: '#e94e3a',
                  }}
                  onClick={this.onDeleteClick.bind(this, noteid, dispatch)}
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
              </h4>

              {showNoteInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">body: {body}</li>
                  <li className="list-group-item">userid: {userid}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Note.defaultProps = {
  title: 'User',
  body: 'Nil',
  userid: 'Nil',
};

Note.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired, //may be check this in future replace string with obj
  userid: PropTypes.string.isRequired,
  //not needed
};

export default Note;
