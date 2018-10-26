import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Contacts from './components/contacts/Contacts';
import Notes from './components/notes/Notes';
import Header from './components/layout/Header';
import About from './components/pages/About';
import AddContact from './components/contacts/AddContact';
import AddNote from './components/notes/AddNote';
import EditContact from './components/contacts/EditContact';
import Test from './components/test/Test';

import { Provider } from './context';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            {/* <Header branding="JOTter" /> */}

            <Header branding="JOTter / SEMIBREVE" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/notes" component={Notes} />
                <Route exact path="/contact/add" component={AddContact} />
                <Route exact path="/contact/edit/:id" component={EditContact} />
                <Route exact path="/about" component={About} />
                <Route exact path="/test" component={Test} />
                <Route exact path="/note/add" component={AddNote} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
