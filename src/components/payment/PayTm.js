import React, { Component } from 'react';

import classnames from 'classnames';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { paymentRequest } from '../../actions/payActions';

class PayTm extends Component {
  constructor() {
    super();
    this.state = {
      CUST_ID: '',
      ORDER_ID: '',
      TXN_AMOUNT: '',
      errors: {},
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/notes');
    }
  }

  //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const newPayData = {
      CUST_ID: this.state.CUST_ID,
      ORDER_ID: this.state.ORDER_ID,
      TXN_AMOUNT: this.state.TXN_AMOUNT,
    };

    this.props.paymentRequest(newPayData, this.props.history);
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Payment</h1>
              <p className="lead text-center">
                Payment for JOTer/SEMIBREVE account
              </p>
              <form noValidate onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames('form-control form-control-lg', {
                      'is-invalid': errors.CUST_ID,
                    })}
                    placeholder="Customer id"
                    name="CUST_ID"
                    value={this.state.CUST_ID}
                    onChange={this.onChange}
                  />
                  {errors.CUST_ID && (
                    <div className="invalid-feedback">{errors.CUST_ID}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames('form-control form-control-lg', {
                      'is-invalid': errors.ORDER_ID,
                    })}
                    placeholder="Order id"
                    name="ORDER_ID"
                    value={this.state.ORDER_ID}
                    onChange={this.onChange}
                  />
                  {errors.ORDER_ID && (
                    <div className="invalid-feedback">{errors.ORDER_ID}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="TXN_AMOUNT"
                    className={classnames('form-control form-control-lg', {
                      'is-invalid': errors.TXN_AMOUNT,
                    })}
                    placeholder="Amount"
                    name="TXN_AMOUNT"
                    value={this.state.TXN_AMOUNT}
                    onChange={this.onChange}
                  />
                  {errors.TXN_AMOUNT && (
                    <div className="invalid-feedback">{errors.TXN_AMOUNT}</div>
                  )}
                  {/* <small className="form-text text-muted">
                    This site uses Gravatar so if you want a profile image, use
                    a Gravatar email
                  </small> */}
                </div>

                <input
                  type="submit"
                  className="btn btn-info btn-block mt-4 mb-4  "
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PayTm.propTypes = {
  paymentRequest: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapstateToProps = state => ({ auth: state.auth, errors: state.errors }); // so what this does is it states value in auth so we can acces it by using// this.props.auth.user  or this.props.auth.isAuthenticated

export default connect(
  mapstateToProps,
  { paymentRequest }
)(withRouter(PayTm));
//best to study till here
