import React, { Component } from 'react';

class Test extends Component {
  state = {
    test: 'test',
  };
  componentDidMount() {
    console.log('componentDidMount..');
  }
  // componentWillMount() {
  //   console.log('componentWillMount..');
  // }
  // componentDidUpdate() {
  //   console.log('componentDidUpdate..');
  // }
  //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
  // componentWillReceiveProps(nextProps) {

  // }
  // static getDerivedStateFromProps(nextProps, prevState) {
  //   //new
  //   return null;
  // }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log('getSnapshotBeforeUpdate..');
  //   return;
  // }

  render() {
    return (
      <div>
        <h1>Test Component</h1>
      </div>
    );
  }
}

export default Test;
