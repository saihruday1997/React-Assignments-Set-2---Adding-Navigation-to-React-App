import React, { Component, useState } from "react";
import { Route } from "react-router-dom";
import "../styles/App.css";
import Home from "./home";
import About from "./about";

class App extends Component {
  render() {
    return (
      <>
        <div id="main">{/* Do not remove the main div */}</div>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
      </>
    );
  }
}

export default App;
