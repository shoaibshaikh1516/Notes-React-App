import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../context';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Contact extends Component {
  state = {
    showContactInfo: false,
  };

  onDeleteClick = async (id, dispatch) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      //no need to use res obj as we are not getting any thing  back | ref get call
      dispatch({ type: 'DELETE_CONTACT', payload: id });
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}
                {showContactInfo ? ( //sort arrow toggle start
                  <i
                    onClick={() =>
                      this.setState({
                        showContactInfo: !this.state.showContactInfo,
                      })
                    }
                    className="fas fa-sort-up"
                    style={{ cursor: 'pointer' }}
                  />
                ) : (
                  <i
                    onClick={() =>
                      this.setState({
                        showContactInfo: !this.state.showContactInfo,
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
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                />

                <Link to={`contact/edit/${id}`}>
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

              {showContactInfo ? ( //display toogle
                <ul className="list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.defaultProps = {
  name: 'User',
  email: 'Nil',
  phone: 'Nil',
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired, //may be check this in future replace string with obj
  phone: PropTypes.string.isRequired,
  //not needed
};

export default Contact;
