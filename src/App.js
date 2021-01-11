import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import OperatorContextProvider from "./services/contexts/OperatorContext";

import Home from './views/Home/Home';
import Refill from './views/Refill/Refill';

function App() {
  return (
    <div className="app-wrapper">
      <Router>
        <header>
          <div className="logo-container">
            <Link to="/">
              <div className="logo"/>
              <span>Payments</span>
            </Link>
          </div>
        </header>

        <OperatorContextProvider>
          <Switch>
            <Route path="/refill/:id">
              <Refill/>
            </Route>
            <Route path="/">
              <Home/>
            </Route>
          </Switch>
        </OperatorContextProvider>
      </Router>
    </div>
  );
}

export default App;
