import React, { Component } from 'react';
import TextInputGroup from '../layout/TextInputGroup';
// import axios from 'axios';
import PropTypes from 'prop-types';
import { Editor } from '@tinymce/tinymce-react';
import { connect } from 'react-redux';
import { addNote } from '../../actions/noteActions';

import JsxParser from 'react-jsx-parser';

class AddNote extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {},
  };

  onSubmit = e => {
    e.preventDefault();

    const { title, body, userid } = this.state;

    //Check for errors
    if (title === '') {
      this.setState({ errors: { title: 'Title is required' } });
      return;
    }

    if (body === '') {
      this.setState({ errors: { body: 'Body is required' } });
      return;
    }
    if (userid === '') {
      this.setState({ errors: { userid: 'userid is required' } });
      return;
    }

    const newNote = {
      title,
      body,
      userid,
    };

    this.props.addNote(newNote); //redux thunk is used

    //Clear State post add in list
    this.setState({
      title: '',
      body: '',
      userid: '', //ToDO:user info call to get userid
      errors: {},
    });

    this.props.history.push('/notes');
  };
  // componentDidMount = () => {
  //   this.props.getNotes();
  // };

  // handleEditorChange = e => {
  //   console.log('Content was updated:', e.target.getContent());
  //   this.setState({ body: e.target.getContent() });
  // };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { title, body, userid, errors } = this.state;

    return (
      <div className="card mb-3">
        <div className="card-header">Add Note</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit.bind(this)}>
            <TextInputGroup
              label="Title"
              name="title"
              placeholder="Enter title"
              value={title}
              onChange={this.onChange}
              error={errors.title}
            />

            <TextInputGroup
              label="User id"
              name="userid"
              type="userid"
              placeholder="Enter userid"
              value={userid}
              onChange={this.onChange}
              error={errors.userid}
            />

            <label htmlFor={userid}> Body</label>
            <JsxParser jsx={body} />

            <Editor
              apiKey="2edmaulpnq9gkukbofns3y3ifatfo0yemunty0b62sns25n6"
              initialValue={this.state.body}
              init={{
                plugins: 'link image code',
                // branding: false,
                toolbar:
                  'undo redo | bold italic | alignleft aligncenter alignright | code',
              }}
              onChange={this.handleEditorChange}
            />
            <input
              type="submit"
              value="Add Note"
              className="btn btn-light btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}

AddNote.propTypes = {
  // notes: PropTypes.array.isRequired,
  // getNotes: PropTypes.func.isRequired,
  addNote: PropTypes.func.isRequired,
};

// const mapStateToProps = state => ({ notes: state.note.notes });

export default connect(
  null,
  { addNote }
)(AddNote);
