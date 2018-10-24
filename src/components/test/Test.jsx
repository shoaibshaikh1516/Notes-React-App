import React, { Component } from 'react';

class Test extends Component {
  state = {
    body: '',
    title: '',
  };
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(data =>
        this.setState({
          title: data.title,
          body: data.body,
        })
      );
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
    const { title, body } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}

export default Test;
