import React from 'react';
// import Login from './Login';
// import JsxParser from 'react-jsx-parser';
import TableExampleSortable from "../pagination/paginationWithSort/TableExampleSortable"
import ProductDetails from "../product/ProductDetails"
import NotesWithPagination from '../pagination/NotesWithPagination';

import "../../App.css"

import "./About.css"
export default props => {
  return (
    <div>
      <h1 className="display-4">About Clairvoyant JOTers</h1>
      <p className="lead">
        Passionate About Technology Clairvoyant is a global technology
        consulting and services company. We help organizations build innovative
        products and solutions using big data, analytics, and the cloud. We
        provide the best-in-class solutions and services that leverage big data
        and continually exceed client expectations. Our deep vertical knowledge
        combined with expertise on multiple, enterprise-grade big data platforms
        helps support purpose-built solutions to meet our client’s business
        needs. Our global team consists of experienced professionals, with
        backgrounds in design, software engineering, analytics, and data
        science. Each member of our team is highly energetic and committed to
        helping our clients achieve their goals.
      </p>

      <script src="https://gist.github.com/shoaibshaikh1516/4493c5d33e17245ddfd3b706dbf2e586.js" />
      {/* <JsxParser
        jsx="Passionate About Technology Clairvoyant is a global technology
        consulting and services company. We help organizations build innovative
        products and solutions using big data, analytics, and the cloud. We
        provide the best-in-class solutions and services that leverage big data
        and continually exceed client expectations. Our deep vertical knowledge
        combined with expertise on multiple, enterprise-grade big data platforms
        helps support purpose-built solutions to meet our client’s business
        needs. Our global team consists of experienced professionals, with
        backgrounds in design, software engineering, analytics, and data
        science. Each member of our team is highly energetic and committed to
        helping our clients achieve their goals."
      /> */}

      {/* <NotesWithPagination /> */}
      <div className="flex " >
        <ProductDetails header="Basic" metadata="0$/" description=" Access the Account" noOfUser="1 User"></ProductDetails>
        <ProductDetails header="Premium" metadata="Joined in 2016" description=" Take notes" noOfUser="Less then 5"></ProductDetails>
        <ProductDetails header="Enterprise" metadata="Joined in 2016" description=" Over all access" noOfUser="More the 5 Users"></ProductDetails>
      </div>

      {/* <TableExampleSortable></TableExampleSortable> */}
      {/* <p className="text-secondary">Version 1.0.0</p> */}
      {/* <Login /> */}


    </div>
  );
};
