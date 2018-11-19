import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';
// import JsxParser from 'react-jsx-parser';
import { Link } from 'react-router-dom';

export default class NotesWithPaginationChild extends Component {
  render() {
    const { noteid, title } = this.props.contents;
    // const { noteid, body, title } = this.props.contents;
    // console.log('in components  extracted from props', noteid, body, title);

    return (
      <React.Fragment>
        <Table.Row>
          <Table.HeaderCell>{noteid}</Table.HeaderCell>
          <Table.HeaderCell>
            <Link to={`note/edit/${noteid}`} className="link-style">
              {title}
            </Link>{' '}
          </Table.HeaderCell>
        </Table.Row>
      </React.Fragment>
    );
  }
}
