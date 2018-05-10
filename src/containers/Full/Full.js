import React, { Component } from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom';
import { Container } from 'reactstrap';
import Header from '../../components/Header/';
import Sidebar from '../../components/Sidebar/';
import Breadcrumb from '../../components/Breadcrumb/';
import Footer from '../../components/Footer/';

import Dashboard from '../../views/Dashboard';
import ReasonAnalytics from '../../views/ReasonAnalytics';
import AddBranch from '../../views/AddBranch';

class Full extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar {...this.props} />
          <main className="main">
 
              <Switch>
                <Route path="/dashboard" name="Dashboard" component={Dashboard} />
                <Route path="/add_branch" name="Add Branch" component={AddBranch} />
                <Route path="/reason" name="Reason Analytics" component={ReasonAnalytics} />
                <Redirect from="/" to="/login" />
              </Switch>
          </main>

        </div>
        <Footer />
      </div>
    );
  }
}

export default Full;
