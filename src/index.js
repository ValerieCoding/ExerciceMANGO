import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Connect from "./components/Connect";
import App from "./components/App"
import {BrowserRouter as Router, Route} from "react-router-dom"

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Route path="/" exact render={() => 
    <Connect />} />
    <Route path="/app" render={() => 
    <App />} />
  </Router>
  </React.StrictMode>,
  document.getElementById('root')
);