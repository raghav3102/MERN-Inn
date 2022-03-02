import React, { useState } from "react";
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
import PreviousBookings from "./pages/PreviousBookings";
import bookingContext from "./context/bookings/BookingContext";

function App() {
  
  const [bookings, setBookings] = useState([]);
  async function getBookingHistory() {
    await fetch("http://localhost:5000/api/bookings/fetchallbookings", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIxN2NkOGEwZTI4ZTI3MDM4YmYxZmYwIn0sImlhdCI6MTY0NTcyNzExNH0.UrN2hTukNN5uZlT-AckpHANli6x0Gk3pC97NItKnxZs"
      }
    }).then((response) => {
      return response.json();
    }
    ).then((data) => {
      setBookings(data)
    });
  }
  return (
    <>
      <bookingContext.Provider value={{ bookings, setBookings, getBookingHistory }}>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route exact path="/aboutus" component={AboutUs} />
            <Route exact path="/ourservices" component={ourservices} />
            <Route exact path="/developer" component={portfolio} />
            <Route exact path="/login" component={SignInSide} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/booking" component={booking} />
            <Route exact path="/booking-history" component={PreviousBookings} />
          </Switch>
        </Router>
      </bookingContext.Provider>
    </>
  );
}

export default App;