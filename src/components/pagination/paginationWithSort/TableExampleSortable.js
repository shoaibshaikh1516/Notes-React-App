import _ from 'lodash'
import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'
import { connect } from "react-redux";
// import { getNotesWithSorting} from "../../actions/notesWithPaginationActions";
import { getNotesWithSorting } from "../../../actions/notesWithPaginationActions";
import NotesWithPaginationChild from "../../pagination/NotesWithPaginationChild";

const tableData = [
  { name: 'John', age: 15, gender: 'Male' },
  { name: 'Amber', age: 40, gender: 'Female' },
  { name: 'Leslie', age: 25, gender: 'Female' },
  { name: 'Ben', age: 70, gender: 'Male' },
]

class TableExampleSortable extends Component {
  state = {
    column: null,
    data: null,
    direction: null,
  }

  componentDidMount = () => {
    this.props.getNotesWithSorting();
    console.log("Component did mount ", this.props);
  };

  handleSort = clickedColumn => () => {
    const { column, data, direction } = this.state

    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        // data: _.sortBy(data, [clickedColumn]),
        direction: 'ascending',
      })

      console.log("getNotesWithSorting did mount ", this.props.notesorting);
      this.props.getNotesWithSorting(undefined,undefined,direction, clickedColumn);
      console.log("getNotesWithSorting did mount ", direction, clickedColumn);

      return
    }


    this.setState({
      // data: data.reverse(),
      direction: direction === 'ascending' ? 'descending' : 'ascending',
    })

    this.props.getNotesWithSorting(undefined,undefined,direction, clickedColumn);
    console.log("getNotesWithSorting did mount ", direction, clickedColumn);

  }

  render() {

    const { column, data, direction } = this.state
    const { content, totalPages, size, number, last, first } = this.props.notesorting;

    return (
      <Table sortable celled fixed>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell
              sorted={column === 'noteid' ? direction : null}
              onClick={this.handleSort('noteid')}
            >
              Name
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'body' ? direction : null}
              onClick={this.handleSort('body')}
            >
              Age
            </Table.HeaderCell>
      
          </Table.Row>
        </Table.Header>
        <Table.Body>
            {content
              ? content.map(con => (
                  <NotesWithPaginationChild key={con.noteid} contents={con} />
                ))
              : null}
          </Table.Body>
      </Table>
    )
  }
}


const mapStateToProps = state => ({ notesorting: state.notesWith.notespg });

export default connect(
  mapStateToProps,
  { getNotesWithSorting }
)(TableExampleSortable);
