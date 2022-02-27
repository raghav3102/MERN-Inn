import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import bali from '../images/bali.jpg'
import goa from '../images/goa.jpg'
import maldives from '../images/maldives.jpg'
import greece from '../images/greece.jpg'
function PreviousBookingItem(props) {
    return (
        <>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="200px"
                    image={
                        props.bookingData.location === "Goa"?goa:props.bookingData.location === "Bali"?bali:props.bookingData.location === "Maldives"?maldives:greece
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
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </>
    )
}

export default PreviousBookingItem