// import { GET_ERRORS, GET_PAYMENT_REQUEST } from './types';
import axios from 'axios';
import Redirect from '../components/payment/Redirect';
import React from 'react';

// import { Route } from 'react-router-dom';

export const paymentRequest = (newPayData, history) => dispatch => {
  const { CUST_ID, ORDER_ID, TXN_AMOUNT } = newPayData;
  window.location.href =
    `http://localhost:8080/pgredirect?CUST_ID=` +
    CUST_ID +
    `&ORDER_ID=` +
    ORDER_ID +
    `&TXN_AMOUNT=` +
    TXN_AMOUNT;
  // axios
  //   .get(
  // `http://localhost:8080/pgredirect?CUST_ID=` +
  //   CUST_ID +
  //   `&ORDER_ID=` +
  //   ORDER_ID +
  //   `&TXN_AMOUNT=` +
  //   TXN_AMOUNT
  //   )
  //   .then(res => history.push('/login')) //redux login action
  //   .catch(err => err.response.data);
};
