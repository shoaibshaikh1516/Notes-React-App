import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';
import { Grid, Pagination } from 'semantic-ui-react';
import './NotesWithPagination.css';
import NotesWithPaginationChild from './NotesWithPaginationChild';
import { getNotesWithPagination } from '../../actions/notesWithPaginationActions';
import { connect } from 'react-redux';

class NotesWithPagination extends Component {
  state = {
    activePage: 1,
    boundaryRange: 1,
    siblingRange: 1,
    showEllipsis: true,
    showFirstAndLastNav: true,
    showPreviousAndNextNav: true,
    // totalPages: 50,
  };

  componentDidMount = () => {
    this.props.getNotesWithPagination(1, 10);

    console.log('Component did mount ', this.props);
  };
  //WARNING! To be deprecated in React v17. Use componentDidUpdate instead.
  componentWillUpdate(nextProps, nextState) {}

  handleCheckboxChange = (e, { checked, name }) =>
    this.setState({ [name]: checked });

  handleInputChange = (e, { name, value }) => this.setState({ [name]: value });

  handlePaginationChange = (e, { activePage }) => {
    this.props.getNotesWithPagination();
    this.setState({ activePage });
  };

  render() {
    const { content } = this.props.notespg;

    console.log('Contentssssss', content);

    // let inContent = content;

    const {
      activePage,
      boundaryRange,
      siblingRange,
      showEllipsis,
      showFirstAndLastNav,
      showPreviousAndNextNav,
      // totalPages,
    } = this.state;

    const { number, totalPages, size } = this.props.notespg;

    console.log('pagination value', number, totalPages);

    let currentPage;
    if (number) {
      this.setState({ activePage: number });
      // activePage = number;
    }
    // activePage= currentPage ;
    return (
      <React.Fragment>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Note Id</Table.HeaderCell>
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
                      onPageChange={this.handlePaginationChange.bind(
                        this,
                        size,
                        activePage
                      )}
                      size="mini"
                      siblingRange={siblingRange}
                      totalPages={totalPages}
                      // Heads up! All items are powered by shorthands, if you want to hide one of them, just pass `null` as value
                      ellipsisItem={showEllipsis ? undefined : null}
                      firstItem={showFirstAndLastNav ? undefined : null}
                      lastItem={showFirstAndLastNav ? undefined : null}
                      prevItem={showPreviousAndNextNav ? undefined : null}
                      nextItem={showPreviousAndNextNav ? undefined : null}
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
  { getNotesWithPagination }
)(NotesWithPagination);
