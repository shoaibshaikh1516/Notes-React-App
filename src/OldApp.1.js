import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Contacts from './components/contacts/Contacts';
import Notes from './components/notes/Notes';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import About from './components/pages/About';
import AddContact from './components/contacts/AddContact';
import AddNote from './components/notes/AddNote';
import EditContact from './components/contacts/EditContact';
import EditNote from './components/notes/EditNote';
import Test from './components/test/Test';
import SignUpBn from './components/pages/SignUpBn';
import { Provider } from 'react-redux';
import NewLogin from './components/login/NewLogin';
import store from './store';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            {/* <Header branding="JOTter" /> */}

            <Header branding="JOTter / SEMIBREVE" />
            <div className="container">
              <Switch>
                {/* <Route exact path="/" component={Contacts} /> //change */}
                <Route exact path="/" component={Landing} /> //change
                <Route exact path="/contact" component={Contacts} />
                {/* <Route exact path="/login" component={Login} /> */}
                {/* <Route exact path="/login" component={NewLogin} /> */}
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={SignUpBn} />
                <Route exact path="/notes" component={Notes} />
                <Route exact path="/login" component={Notes} />
                <Route exact path="/contact/add" component={AddContact} />
                <Route exact path="/contact/edit/:id" component={EditContact} />
                <Route exact path="/note/edit/:noteid" component={EditNote} />
                <Route exact path="/about" component={About} />
                <Route exact path="/test" component={Test} />
                <Route exact path="/note/add" component={AddNote} />
              </Switch>
            </div>

            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
