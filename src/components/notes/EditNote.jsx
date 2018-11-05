import React, { Component } from 'react';
import TextInputGroup from '../layout/TextInputGroup';
import PropTypes from 'prop-types';
import { Editor } from '@tinymce/tinymce-react';
import JsxParser from 'react-jsx-parser';
import { connect } from 'react-redux';
import { getNote, updateNote } from '../../actions/noteActions';
class EditNote extends Component {
  state = {
    title: '',
    body: '',
    userid: '',
    errors: {},
  };

  UNSAFE_componentWillReceiveProps(nextProps, nextState) {
    //deprecated
    const { title, body, userid } = nextProps.note;
    this.setState({ title, body, userid });
  }

  componentDidMount() {
    const { noteid } = this.props.match.params;
    this.props.getNote(noteid);
  }

  onSubmit = e => {
    e.preventDefault();
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
    const { noteid } = this.props.match.params;
    const updateNote = {
      noteid,
      title,
      body,
      userid,
    };

    this.props.updateNote(updateNote);

    //Clear State post add in list
    this.setState({
      title: '',
      body: '',
      userid: '',
      errors: {},
    });

    this.props.history.push('/notes');
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  handleEditorChange = e => {
    console.log('Content was updated:', e.target.getContent());
    this.setState({ body: e.target.getContent() });
  };

  render() {
    const { title, body, userid, errors } = this.state;

    return (
      <div className="card mb-3">
        <div className="card-header">Edit Note</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
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
              initialValue={body}
              init={{
                plugins: 'link image code textcolor textcolor',
                // branding: false,
                toolbar:
                  'undo redo | bold italic | alignleft aligncenter alignright | code| forecolor | backcolor',
              }}
              onChange={this.handleEditorChange}
            />

            <TextInputGroup
              label="User"
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
  }
}

EditNote.propTypes = {
  note: PropTypes.object.isRequired,
  getNote: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
  note: state.note.note, //coming from REDUX
});
export default connect(
  mapStateToProps,
  { getNote, updateNote }
)(EditNote);
