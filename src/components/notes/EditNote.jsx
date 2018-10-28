import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios';
import { Editor } from '@tinymce/tinymce-react';
import JsxParser from 'react-jsx-parser';
class EditNote extends Component {
  state = {
    title: '',
    body: '',
    userid: '',
    errors: {},
  };

  async componentDidMount() {
    const { noteid } = this.props.match.params;

    const res = await axios.get(`http://localhost:8080/api/note/${noteid}`);

    const note = res.data;
    this.setState({
      title: note.title,
      body: note.body,
      userid: note.userid,
      noteid: note.noteid,
    });
  }

  onChange = e => this.setState({ [e.target.title]: e.target.value });

  onSubmit = async (dispatch, e) => {
    e.preventDefault();
    console.log(this.state);
    const { title, body, userid } = this.state;

    //Check for errors
    if (title === '') {
      this.setState({ errors: { title: 'title is required' } });
      return;
    }

    if (body === '') {
      this.setState({ errors: { body: 'body is required' } });
      return;
    }
    if (userid === '') {
      this.setState({ errors: { userid: 'userid is required' } });
      return;
    }

    const updateNote = {
      title,
      body,
      userid,
    };

    const { noteid } = this.props.match.params;

    console.log(noteid);

    const res = await axios.put(
      `http://localhost:8080/api/note/update/${noteid}`,
      updateNote
    );

    dispatch({ type: 'UPDATE_NOTE', payload: res.data });

    //Clear State post add in list
    this.setState({
      title: '',
      body: '',
      userid: '',
      errors: {},
    });

    this.props.history.push('/notes');
  };

  render() {
    const { title, body, userid, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Edit Note</div>
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
                  <label htmlFor={userid}> Body</label>
                  {/* <JsxParser jsx={body} /> */}

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

                  <TextInputGroup
                    label="User Id"
                    name="userid"
                    type="userid"
                    placeholder="Enter userid"
                    value={userid}
                    onChange={this.onChange}
                    error={errors.userid}
                  />

                  <input
                    type="submit"
                    value="Update Note"
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

export default EditNote;
