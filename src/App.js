import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignInSide from "./components/SignInSide";
import AboutUs from "./pages/AboutUs";
import ourservices from "./pages/OurServices";
import portfolio from "./pages/portfolio";
import SignUp from "./components/signup";
import booking from "./pages/book";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/ourservices" component={ourservices} />
          <Route path="/developer" component={portfolio} />
          <Route path="/login" component={SignInSide} />
          <Route path="/signup" component={SignUp} />
          <Route path="/booking" component={booking} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
