import React, { useContext } from 'react'
import PreviousBookingItem from '../components/PreviousBookingItem'
import bookingContext from '../context/bookings/BookingContext';
const PreviousBookings = () => {
    const bookingArray = useContext(bookingContext);
    const { bookings } = bookingArray;
    return (
        <>
            <div className="container my-3">
                <div className="h2 mx-auto">Welcome to MERN Inn!</div>
                <div className="h5 mx-auto" style={{ fontWeight: 'bold' }}>Your Previous Booking Details:</div>
                <hr />
                <div className="d-flex flex-row">
                    {bookings.map((booking) => {
                        return (<div className="mx-2">
                            <PreviousBookingItem bookingData={booking} />
                        </div>)
                    })}
                </div>
            </div>
        </>
    )
}

export default PreviousBookings