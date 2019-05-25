import React, { Component } from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  HashRouter
} from "react-router-dom";
import Home from "./App";
import Login from "./Login";

export default class Navigation extends Component {
  render() {
    return (
      <Router>
        <HashRouter>
          {
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
            </Switch>
          }
        </HashRouter>
      </Router>

      // <Router>
      //   <div>
      //     <Route exact path="/" component={Home} />
      //     <Route path="/login" component={Login} />
      //   </div>
      // </Router>
    );
  }
}
