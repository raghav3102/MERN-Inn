import bookingContext from './BookingContext'
import { useState } from 'react'
const BookingState = (props) => {
    const bookingsInitial = [
        {
            "_id": "6217cf2d0e28e27038bf1ff3",
            "user": "6217cd8a0e28e27038bf1ff0",
            "name": "test test",
            "email": "test@test.com",
            "location": "bali",
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
            "location": "Goa",
            "phone": 9035642584,
            "rooms": 3,
            "checkin": "2022-02-27T10:40:54.214Z",
            "checkout": "2022-02-27T10:40:54.214Z",
            "total": 5000,
            "__v": 0
        }
    ]
    const [bookings, setBookings] = useState(bookingsInitial)
    return (
        <bookingContext.Provider value={bookings, setBookings}>
            {props.children}
        </bookingContext.Provider>
    )
}

export default BookingState;