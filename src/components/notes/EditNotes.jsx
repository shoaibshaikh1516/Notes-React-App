import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios';

class EditNote extends Component {
  state = {
    title: '',
    body: '',
    phone: '',
    errors: {},
  };

  async componentDidMount() {
    const { noteid } = this.props.match.params;

    const res = await axios.get(`http://localhost:8080/api/note/${noteid}`);

    const note = res.data;
    this.setState({
      title: note.title,
      body: note.body,
      phone: note.phone,
    });
  }

  onChange = e => this.setState({ [e.target.title]: e.target.value });

  onSubmit = async (dispatch, e) => {
    e.preventDefault();

    const { title, body, phone } = this.state;

    //Check for errors
    if (title === '') {
      this.setState({ errors: { title: 'title is required' } });
      return;
    }

    if (body === '') {
      this.setState({ errors: { body: 'body is required' } });
      return;
    }
    if (phone === '') {
      this.setState({ errors: { phone: 'Phone is required' } });
      return;
    }

    const updateNote = {
      title,
      body,
      phone,
    };

    const { noteid } = this.props.match.params;
    const res = await axios.put(
      `http://localhost:8080/api/note/update/${noteid}`,
      updateNote
    );

    dispatch({ type: 'UPDATE_CONTACT', payload: res.data });

    //Clear State post add in list
    this.setState({
      title: '',
      body: '',
      phone: '',
      errors: {},
    });

    this.props.history.push('/');
  };

  render() {
    const { title, body, phone, errors } = this.state;

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
                    label="Name"
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

                  <TextInputGroup
                    label="Phone"
                    name="phone"
                    placeholder="Enter Phone"
                    value={phone}
                    onChange={this.onChange}
                    error={errors.phone}
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
