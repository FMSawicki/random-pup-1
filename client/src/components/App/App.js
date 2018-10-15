import React, { Component } from "react";
// import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import Home from "../Home/Home";
import New from "../New/New";

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <Link to="/">Doggos!</Link>
          <Link to="/new">Add Doggo!</Link>
        </nav>
        <main>
          <Route path="/new" render={() => <New />} />
          <Route path="/" render={() => <Home />} />
        </main>
      </div>
    );
  }
}

export default App;
