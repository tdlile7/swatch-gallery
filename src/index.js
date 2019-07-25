import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import ColorState from "./contexts/Color/ColorState";
import App from "./App";

ReactDOM.render(
  <ColorState>
    <Router>
      <App />
    </Router>
  </ColorState>,
  document.getElementById("root")
);
