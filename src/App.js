import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';

import './App.css';
import Contacts from './components/contacts/Contacts';
import PayTm from './components/payment/PayTm';
import Notes from './components/notes/Notes';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import About from './components/pages/About';
import AddContact from './components/contacts/AddContact';
import AddNote from './components/notes/AddNote';
import EditContact from './components/contacts/EditContact';
import EditNote from './components/notes/EditNote';
import Test from './components/test/Test';

// import SignUpBn from './components/pages/SignUpBn';
import { Provider } from 'react-redux';
// import NewLogin from './components/login/NewLogin';
import store from './store';
// import Login from './components/auth/Login';

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // TODO: Clear current Profile

    // Redirect to login
    window.location.href = '/login';
  }
}
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header branding="JOTter / SEMIBREVE" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/contact" component={Contacts} />
                <Route exact path="/pay" component={PayTm} />
                {/* <Route exact path="/login" component={NewLogin} /> */}
                <Route exact path="/login" component={Login} />
                {/* <Route exact path="/signup" component={SignUpBn} /> */}
                <Route exact path="/signup" component={Register} />
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
