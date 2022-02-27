import React, {createContext, useState} from "react";
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
        "total": 5000,
        "__v": 0
    }
  ]
  const [bookings, setBookings] = useState(bookingsInitial);
  return (
    <>
      <bookingContext.Provider value={{bookings, setBookings}}>
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
            <Route path="/booking-history" component={PreviousBookings} />
          </Switch>
        </Router>
      </bookingContext.Provider>
    </>
  );
}

export default App;