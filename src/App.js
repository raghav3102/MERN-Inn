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
  const bookingsInitial = [
    {
      "_id": "6217cf2d0e28e27038bf1ff3",
      "user": "6217cd8a0e28e27038bf1ff0",
      "name": "test test",
      "email": "test@test.com",
      "location": "Bali",
      "phone": 9035642584,
      "rooms": 5,
      "checkin": "2022-02-24T18:32:13.561Z",
      "checkout": "2022-02-24T18:32:13.561Z",
      "total": 5000,
      "__v": 0
    },
    {
      "_id": "621b4a342b7aaf5e1aaced78",
      "user": "6217cd8a0e28e27038bf1ff0",
      "name": "test test 2",
      "email": "test2@test.com",
      "location": "Goa",
      "phone": 9035642584,
      "rooms": 3,
      "checkin": "2022-02-27T09:53:56.753Z",
      "checkout": "2022-02-27T09:53:56.753Z",
      "total": 5000,
      "__v": 0
    },
    {
      "_id": "621b55361625c47a5074b059",
      "user": "6217cd8a0e28e27038bf1ff0",
      "name": "test test 3",
      "email": "test2@test.com",
      "location": "Greece",
      "phone": 9035642584,
      "rooms": 3,
      "checkin": "2022-02-27T10:40:54.214Z",
      "checkout": "2022-02-27T10:40:54.214Z",
      "total": 3000,
      "__v": 0
    },
    {
      "_id": "621b55361625c47a5074b059",
      "user": "6217cd8a0e28e27038bf1ff0",
      "name": "test test 3",
      "email": "test2@test.com",
      "location": "Greece",
      "phone": 9035642584,
      "rooms": 3,
      "checkin": "2022-02-27T10:40:54.214Z",
      "checkout": "2022-02-27T10:40:54.214Z",
      "total": 3000,
      "__v": 0
    }
  ]
  const [bookings, setBookings] = useState(bookingsInitial);
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