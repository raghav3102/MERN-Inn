import { React, useState } from 'react'
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { DateRangePickerComponent, DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import { useForm } from "react-hook-form";

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
    // let updateDate=(args)=>{
    //     props.setSdate(args.startDate);
    //     props.setEdate(args.endDate);
    //     props.setDays(args.daySpan);
    // }
    const minDate = new Date();
    const maxDate = new Date();
    maxDate.setDate(minDate.getDate() + 1);
    const [checkInDate, setCheckInDate] = useState(minDate);
    const [checkOutDate, setCheckOutDate] = useState(maxDate);
    return (
        <>

            {/* Name */}
            <TextField name="name" required className='my-2 mx-auto' label="Full Name" variant="standard" style={{ "width": "60%" }} value={props.bookingData.name} onChange={(event) => { props.setName(event.target.value); }} ref={props.register({
                required: "Name is required"
            })} />
            <p>{props.errors.name?.message}</p>
            {/* //Email */}
            <TextField name="email" required className='my-2 mx-auto' type='email' label="Email ID" variant="standard" style={{ "width": "60%" }} value={props.bookingData.email} onChange={(event) => { props.setEmail(event.target.value) }} ref={props.register({
                required: "Email is required",
                pattern: {value:/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, message: "This is not a valid email."}
            })} />
            <p>{props.errors.email?.message}</p>

            {/* //Phone */}
            <TextField name="phone" required className='my-2 mx-auto' label="Phone" variant="standard" style={{ "width": "60%" }} value={props.bookingData.phone} onChange={(event) => { props.setPhone(event.target.value) }} ref={props.register({
                required: "Phone is required"
            })} />
            <p>{props.errors.phone?.message}</p>

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
            <TextField name="rooms" className='mx-auto' required label="No. of Rooms" variant="standard" style={{ "width": "60%" }} value={props.bookingData.rooms} onChange={(event) => { props.setRoom(event.target.value) }} ref={props.register({
                required: "No. of Rooms is required", min:{value: 1, message: "You need to book atleast one room."}
            })} />
            <p>{props.errors.rooms?.message}</p>
            {/* // checkin check out */}
            <div className='mx-auto my-4' style={{ "width": "60%" }}>

                {/* <DateRangePickerComponent
                        placeholder='Enter Check-In & Check-Out Dates'
                        min={minDate}
                        minDays={1}
                        format='dd MMM yyyy'
                        required
                    // change = {updateDate(this)}
                    >
                    </DateRangePickerComponent> */}
                <DatePickerComponent
                    min={minDate}
                    value={checkInDate}
                    onChange={(e) => {
                        setCheckInDate(e.target.value)
                        props.setSdate(e.target.value)
                        maxDate.setDate(e.target.value + 1);
                    }}
                    onBlur={
                        (e) => {
                            setCheckInDate(e.target.value)
                            props.setSdate(e.target.value)
                            console.log(checkInDate)
                        }
                    }
                >
                </DatePickerComponent>
                <DatePickerComponent
                    min={maxDate}
                    value={checkOutDate}
                    onChange={(e) => {
                        setCheckOutDate(e.target.value)
                        props.setEdate(e.target.value)
                    }}
                    onBlur={
                        (e) => {
                            setCheckOutDate(e.target.value)
                            props.setEdate(e.target.value)
                            console.log(checkOutDate)
                        }
                    }
                >
                </DatePickerComponent>
            </div>
        </>


    )
}

export default BookingForm