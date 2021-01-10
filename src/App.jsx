import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <Router>

      <div>
        <Nav />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App
