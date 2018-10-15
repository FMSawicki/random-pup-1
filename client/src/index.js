import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App.js";
import { BrowserRouter as Router } from "react-router-dom";

ReactDom.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
