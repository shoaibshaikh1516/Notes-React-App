import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios';
import { Editor } from '@tinymce/tinymce-react';

class AddNote extends Component {
  state = {
    title: '',
    body: '',
    userid: '',
    errors: {},
  };

  handleEditorChange = e => {
    console.log('Content was updated:', e.target.getContent());

    this.setState({ body: e.target.getContent() });
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = async (dispatch, e) => {
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
      userid,
      body,
    };

    const res = await axios.post(
      'https://jsonplaceholder.typicode.com/users',
      newNote
    );

    dispatch({ type: 'ADD_NOTE', payload: res.data });

    //Clear State post add in list
    this.setState({
      title: '',
      body: '',
      userid: '',
      errors: {},
    });

    this.props.history.push('/');
  };

  render() {
    const { title, body, userid, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Note</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Title"
                    name="title"
                    placeholder="Enter title"
                    value={title}
                    onChange={this.onChange}
                    error={errors.title}
                  />

                  <TextInputGroup
                    label="body"
                    name="body"
                    type="body"
                    placeholder="Enter body"
                    value={body}
                    onChange={this.onChange}
                    error={errors.body}
                  />

                  {/* <TextInputGroup
                    label="userid"
                    name="userid"
                    placeholder="Enter userid"
                    value={userid}
                    onChange={this.onChange}
                    error={errors.userid}
                  /> */}
                  <Editor
                    apiKey="2edmaulpnq9gkukbofns3y3ifatfo0yemunty0b62sns25n6"
                    initialValue="<p>This is the initial content of the editor</p>"
                    init={{
                      plugins: 'link image code',
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
        }}
      </Consumer>
    );
  }
}

export default AddNote;
