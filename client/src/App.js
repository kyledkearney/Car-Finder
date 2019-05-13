import React, { Component } from "react";
// import logo from "./logo.svg";
import Header from "../src/components/header"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "../src/pages/search"
import Saved from "../src/pages/saved"
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header/>
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/saved" component={Saved} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
