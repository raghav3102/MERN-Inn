import React from 'react'
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { DateRangePickerComponent } from '@syncfusion/ej2-react-calendars';
// import { useForm } from "react-hook-form";
function BookingForm(props) {
    const location = [
        {
            value: 'Goa',
            label: 'Goa',
        },
        {
            value: 'Maldives',
            label: 'Maldives',
        },
        {
            value: 'Bali',
            label: 'Bali',
        },
        {
            value: 'Greece',
            label: 'Greece',
        },
    ];
    // const { register, handleSubmit, errors } = useForm();
    // let updateDate=(args)=>{
    //     props.setSdate(args.startDate);
    //     props.setEdate(args.endDate);
    //     props.setDays(args.daySpan);
    // }
    const minDate = new Date();
    return (
        <>
            <form className='d-flex flex-column'>
                {/* Name */}
                <TextField id="name" required className='my-2 mx-auto' label="Full Name" variant="standard" style={{ "width": "60%" }} value={props.bookingData.name} onChange={(event) => { props.setName(event.target.value); }} />


                {/* //Email */}
                <TextField id="email" required className='my-2 mx-auto' type='email' label="Email ID" variant="standard" style={{ "width": "60%" }} value={props.bookingData.email} onChange={(event) => { props.setEmail(event.target.value) }} />


                {/* //Phone */}
                <TextField id="phone" required className='my-2 mx-auto' label="Phone" variant="standard" style={{ "width": "60%" }} value={props.bookingData.phone} onChange={(event) => { props.setPhone(event.target.value) }} />


                {/* //Destination */}
                <TextField
                    id="destination"
                    select
                    required
                    label="Destination"
                    value={props.bookingData.destination}
                    onChange={(event) => {
                        props.setDestination(event.target.value);
                    }}
                    className='my-4 mx-auto'
                    style={{ "width": "60%" }}
                >
                    {location.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>

                {/* //No of rooms */}
                <TextField id="rooms" className='mx-auto' required label="No. of Rooms" variant="standard" style={{ "width": "60%" }} value={props.bookingData.rooms} onChange={(event) => { props.setRoom(event.target.value) }} />

                {/* // checkin check out */}
                <div className='mx-auto my-4' style={{ "width": "60%" }}>

                    <DateRangePickerComponent
                        placeholder='Enter Check-In & Check-Out Dates'
                        min={minDate}
                        minDays={1}
                        format='dd MMM yyyy'
                        required
                    // change = {updateDate(this)}
                    >
                    </DateRangePickerComponent>
                </div>
            </form>
        </>


    )
}

export default BookingForm