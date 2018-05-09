import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';

// Styles
// Import Flag Icons Set
import 'flag-icon-css/css/flag-icon.min.css';
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
// Import Main styles for this application
import '../scss/style.scss'
// Temp fix for reactstrap
import '../scss/core/_dropdown-menu-right.scss'

// Containers
import Full from './containers/Full/'
import Login from './views/Login';
import ReasonAnalytics from './views/ReasonAnalytics';
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBbcUA_DOSewEIHbS9la0uFgHFyD3uasfE",
    authDomain: "pleasureordispleasure.firebaseapp.com",
    databaseURL: "https://pleasureordispleasure.firebaseio.com",
    projectId: "pleasureordispleasure",
    storageBucket: "pleasureordispleasure.appspot.com",
    messagingSenderId: "725505693594"
  };
  firebase.initializeApp(config);

ReactDOM.render((
  <HashRouter>
    <Switch>
      <Route path="/login" name="Login" component={Login} />
      <Route path="/" name="Home" component={Full} />
    </Switch>
  </HashRouter>
), document.getElementById('root'));
