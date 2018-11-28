import _ from 'lodash'
import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'
import { Grid, Pagination } from "semantic-ui-react";
import { connect } from "react-redux";
import { getNotesWithSorting } from "../../../actions/notesWithPaginationActions";
import NotesWithPaginationChild from "../../pagination/NotesWithPaginationChild";
// import "../NotesWithPagination.css";

class TableExampleSortable extends Component {
  state = {
    column: null,
    direction: null,
    activePage: 1,
    boundaryRange: 1,
    siblingRange: 1,
    totalPages: 1
  }

  componentDidMount = () => {
    this.props.getNotesWithSorting();
    console.log("Component did mount ", this.props);
  };

  handleSort = clickedColumn => () => {
    const { column, direction } = this.state

    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        direction: 'ascending',
      })
      this.props.getNotesWithSorting(undefined, undefined, direction, clickedColumn);
      return
    }

    this.setState({
      // data: data.reverse(),
      direction: direction === 'ascending' ? 'descending' : 'ascending',
    })
    this.props.getNotesWithSorting(undefined, undefined, direction, clickedColumn);
  }


  handlePaginationChange = (e, { activePage }) => {
    console.log("activePage", e);
    // this.props.updateNotesWithPG(activePage);
    this.setState({ activePage });
    this.props.getNotesWithSorting(activePage);
  };



  render() {

    const { column, direction } = this.state
    const { content, totalPages, size, number, last, first } = this.props.notesorting;
    const { activePage,
      boundaryRange,
      siblingRange,
      // totalPages,
    } = this.state;
    return (
      <Table sortable celled >
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell
              sorted={column === 'noteid' ? direction : null}
              onClick={this.handleSort('noteid')}
            >
              Note Id
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'body' ? direction : null}
              onClick={this.handleSort('body')}
            >
              Title
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

             <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan="3">
                <Grid columns={1}>
                  <Grid.Column
                    width={7}
                    className="no-right-padding"
                    floated="right"
                  >
                    <Pagination
                      activePage={activePage}
                      boundaryRange={boundaryRange}
                      onPageChange={this.handlePaginationChange}
                      size="mini"
                      siblingRange={siblingRange}
                      totalPages={totalPages}
                      // Heads up! All items are powered by shorthands, if you want to hide one of them, just pass `null` as value
                      ellipsisItem={true ? undefined : null}
                      firstItem={true ? undefined : null}
                      lastItem={true ? undefined : null}
                      prevItem={true ? undefined : null}
                      nextItem={true ? undefined : null}
                    />
                  </Grid.Column>
                </Grid>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
      </Table>
    )
  }
}


const mapStateToProps = state => ({ notesorting: state.notesWith.notespg });

export default connect(
  mapStateToProps,
  { getNotesWithSorting }
)(TableExampleSortable);
