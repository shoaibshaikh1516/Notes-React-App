import React from 'react';

export default props => {
  return (
    <div>
      <h1 className="display-4">About CLNotes</h1>
      <p className="lead">Simple App to manage</p>
      <p className="text-secondary">Version 1.0.0</p>

      <h1 className="display-4">{props.match.params.id}</h1>
    </div>
  );
};
