import React from 'react';
import Login from './Login';

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
      <p className="text-secondary">Version 1.0.0</p>
      <Login />
    </div>
  );
};
