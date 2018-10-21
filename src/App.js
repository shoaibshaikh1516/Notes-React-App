import React, { Component } from 'react';
import './App.css';
import Contact from './components/Contact';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Notes" />
        <Contact name="Shyam" email="shyam@gmail.com" phone="333-333-555" />
        <Contact
          name="Shoaib"
          email="shoaibshaikh@gmail.com"
          phone="777-777-777"
        />
      </div>
    );
  }
}

export default App;
