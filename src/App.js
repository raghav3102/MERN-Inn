import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignInSide from './components/SignInSide';
import AboutUs from './pages/AboutUs';
import ourservices from './pages/OurServices';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/aboutus' component={AboutUs} />
          <Route path='/ourservices' component={ourservices} />
          <Route path='/login' component={SignInSide} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
