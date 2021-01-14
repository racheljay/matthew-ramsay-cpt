import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import VirtualTraining from './components/VirtualTraining';

function App() {
  return (
    <Router>

      <div>
        <Nav />

        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="/virtual-personal-training">
            <VirtualTraining />
          </Route>

        </Switch>

      </div>
    </Router>
  );
}

export default App
