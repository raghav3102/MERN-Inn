import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import bali from '../images/bali.jpg'
import goa from '../images/goa.jpg'
import maldives from '../images/maldives.jpg'
import greece from '../images/greece.jpg'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


function PreviousBookingItem(props) {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="200px"
                    image={
                        props.bookingData.location === "Goa" ? goa : props.bookingData.location === "Bali" ? bali : props.bookingData.location === "Maldives" ? maldives : greece
                    }
                    alt="Bali"
                />
                <CardContent>
                    <p className='h5'>
                        {props.bookingData.location}
                    </p>
                    <p>
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </p>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={handleOpen}>Learn More</Button>
                </CardActions>
            </Card>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Booking Details:
                    </Typography>
                    <hr />
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <div className="d-flex flex-column justify-content-between flex-">
                            <p className="d-inline-block h6">Name:</p>
                            <p className="d-inline-block text-muted">{props.bookingData.name}</p>
                            <p className="d-inline-block h6">Email:</p>
                            <p className="d-inline-block text-muted">{props.bookingData.email}</p>
                            <p className="d-inline-block h6">Phone:</p>
                            <p className="d-inline-block text-muted">+91 {props.bookingData.phone}</p>
                            <p className="d-inline-block h6">Rooms:</p>
                            <p className="d-inline-block text-muted">{props.bookingData.rooms}</p>
                            <p className="d-inline-block h6">Destination:</p>
                            <p className="d-inline-block text-muted">{props.bookingData.location}</p>
                            <p className="d-inline-block h6">Start Date:</p>
                            <p className="d-inline-block text-muted">{(props.bookingData.checkin).toString().substring(0, 10)}</p>
                            <p className="d-inline-block h6">End Date:</p>
                            <p className="d-inline-block text-muted">{props.bookingData.checkout.toString().substring(0, 10)}</p>
                            <p className="d-inline-block h6">Number of Days:</p>
                            <p className="d-inline-block text-muted">{props.bookingData.days}</p>
                            <p className="d-inline-block h6"><strong>Final Amount:</strong></p>
                            <p className="d-inline-block text-muted">{props.bookingData.rooms} rooms x ₹1000/day x {props.bookingData.days} days = ₹{props.bookingData.total}</p>
                        </div>
                    </Typography>
                </Box>
            </Modal>
        </>
    )
}

export default PreviousBookingItem