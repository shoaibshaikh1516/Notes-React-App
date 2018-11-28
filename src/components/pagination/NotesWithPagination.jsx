import React, { Component } from "react";
import { Table } from "semantic-ui-react";
import { Grid, Pagination } from "semantic-ui-react";
import "./NotesWithPagination.css";
import NotesWithPaginationChild from "./NotesWithPaginationChild";
import { getNotesWithPagination,updateNotesWithPG} from "../../actions/notesWithPaginationActions";
import { connect } from "react-redux";

class NotesWithPagination extends Component {
  state = {
    activePage: 1,
    boundaryRange: 1,
    siblingRange: 1,
    totalPages: 50
  };

  componentDidMount = () => {
    this.props.getNotesWithPagination();
    // this.props.getNotesWithPagination(0,4);

    console.log("Component did mount ", this.props);
  };

  handlePaginationChange = (e, { activePage}) => {
    console.log("activePage", e);
    // this.props.updateNotesWithPG(activePage);
    this.setState({ activePage });
    this.props.getNotesWithPagination(activePage);
  };


  render() {
    const { content, totalPages, size, number, last, first } = this.props.notespg;

    console.log("Contentssssss", content);
    // let inContent = content;

    const {
      activePage,
      boundaryRange,
      siblingRange,
     
      // totalPages,
    } = this.state;

    // this.setState({})

    return (
      <React.Fragment>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell >Note Id</Table.HeaderCell>
              <Table.HeaderCell>Title</Table.HeaderCell>
              {/* <Table.HeaderCell>Body</Table.HeaderCell>  */}
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
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({ notespg: state.notesWith.notespg });

export default connect(
  mapStateToProps,
  { getNotesWithPagination,updateNotesWithPG }
)(NotesWithPagination);
