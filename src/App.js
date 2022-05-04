import React from "react";
import "./App.scss";

import Header from "./components/Header";
import HomeWrap from "./components/home";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
          <div className="wrapper">
            <div className="home">
              <HomeWrap />
            </div>
          </div>
      </div>
    </Router>
  );
}

export default App;
