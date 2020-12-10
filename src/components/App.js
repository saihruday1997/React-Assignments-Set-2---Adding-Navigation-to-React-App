import React, { Component, useState } from "react";
import { Route, Switch } from "react-router-dom";
import "../styles/App.css";
import Home from "./home";
import About from "./about";
import Badpage from "./badpage";
import LocationDisplay from "./locationDisplay";

class App extends Component {
  render() {
    return (
      <>
        <div id="main">{/* Do not remove the main div */}</div>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route component={Badpage} />
        </Switch>
        <LocationDisplay />
      </>
    );
  }
}

export default App;
