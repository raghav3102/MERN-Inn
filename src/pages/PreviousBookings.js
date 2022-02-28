import React, { useContext } from 'react'
import PreviousBookingItem from '../components/PreviousBookingItem'
import bookingContext from '../context/bookings/BookingContext';
import Grid from '@mui/material/Grid';

const PreviousBookings = () => {
    const bookingArray = useContext(bookingContext);
    const { bookings } = bookingArray;
    return (
        <>
            <div className="container mx-auto my-3">
                <div className="h2 mx-auto">Welcome to MERN Inn!</div>
                <div className="h5 mx-auto" style={{ fontWeight: 'bold' }}>Your Previous Booking Details:</div>
                <hr />
                <Grid container spacing={1} className="mx-auto">
                    {bookings.map((booking) => {
                        return (<Grid item xs={12} md={4} lg={4} >
                            <PreviousBookingItem bookingData={booking} />
                        </Grid>)
                    })}
                </Grid>
            </div>
        </>
    )
}

export default PreviousBookings