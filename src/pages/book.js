import React, { useState } from 'react'
import Button from '@mui/material/Button';
// import { useForm } from "react-hook-form";
import { DateRangePickerComponent } from '@syncfusion/ej2-react-calendars';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Bill from '../components/Bill';

function Book() {
    // const { register, handleSubmit, errors } = useForm();
    const [c, setC] = useState(0);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [room, setRoom] = useState('');
    const [sdate, setSdate] = useState(new Date());
    const [edate, setEdate] = useState(new Date());
    const [days, setDays] = useState(1);
    const [destination, setDestination] = useState('Goa');
    const [total, setTotal] = useState(0);
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
    let bookingData = {
        name: name,
        email: email,
        phone: phone,
        room: room,
        sdate: sdate,
        edate: edate,
        days: days,
        destination: destination,
        total: total
    }
    const bbtn = <>
        <Button variant="outlined" id='nextcnfbtn' className='mx-auto' style={{ "width": "30%" }}
            onClick={(c) => {
                setC(0);
            }}
        >Back</Button>
    </>
    const minDate = new Date();
    const updateDate = (args) => {
        setSdate(args.startDate);
        setEdate(args.endDate);
        setDays(args.daySpan);
    };
    const onSubmit = () => {
        console.log('')
    }
    const bookingForm = <>
        <form className='d-flex flex-column' onSubmit={onSubmit}>
            {/* Name */}
            <TextField name="name" required className='my-2 mx-auto' label="Name" variant="standard" style={{ "width": "60%" }} value={name} onChange={(event) => { setName(event.target.value); }}
            // inputProps={{
            //     ...register("name", {
            //         required: "Name is required"
            //     })
            // }} 
            />
            {/* <p>{errors.name?.message}</p> */}
            {/* //Email */}
            <TextField name="email" required className='my-2 mx-auto' type='email' label="Email" variant="standard" style={{ "width": "60%" }} value={email} onChange={(event) => { setEmail(event.target.value) }}
            // inputProps={{
            //     ...register("email", {
            //         required: "Email is required",
            //         pattern: { value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, message: "This is not a valid email." }
            //     })
            // }}
            />
            {/* <p>{errors.email?.message}</p> */}

            {/* //Phone */}
            <TextField name="phone" required className='my-2 mx-auto' label="Phone" variant="standard" style={{ "width": "60%" }} value={phone} onChange={(event) => { setPhone(event.target.value) }}
            // inputProps={{
            //     ...register("phone", {
            //         required: "Phone is required"
            //     })
            // }}
            />
            {/* <p>{errors.phone?.message}</p> */}

            {/* //Destination */}
            <TextField
                id="destination"
                select
                required
                label="Destination"
                value={destination}
                onChange={(event) => {
                    setDestination(event.target.value);
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
            <TextField name="rooms" className='mx-auto' required label="No. of Rooms" variant="standard" style={{ "width": "60%" }} value={room} onChange={(event) => { setRoom(event.target.value) }}
                // inputProps={{
                //     ...register("rooms", {
                //         required: "No. of Rooms is required", min: { value: 1, message: "You need to book atleast one room." }
                //     })
                // }}
            />
            {/* <p>{errors.rooms?.message}</p> */}
            {/* // checkin check out */}
            <div className='mx-auto my-4' style={{ "width": "60%" }}>
                <DateRangePickerComponent

                    placeholder="Enter Check-In and Check-Out dates"

                    min={minDate}

                    minDays={1}

                    format="dd MMM yyyy"

                    change={updateDate}

                />
            </div>
        </form>
    </>
    function getCardContent(c) {
        switch (c) {
            case 0:
                return bookingForm;
            case 1:
                return <Bill bookingData={bookingData} setTotal={setTotal} />;
            default:
                return "Wrong input";
        }
    }
    return (
        <>
            <div className="card mx-auto d-flex mt-5 px-5 py-3 col-md-7 col-sm-9 col-xs-9" >

                <div className="h2 mx-auto">Book your Holiday with us!</div>
                <hr />
                <div className="h5 mx-auto" style={{ fontWeight: 'bold' }}>Booking Details:</div>
                    {getCardContent(c)}
                <div className="d-flex flex-row">
                    {c === 1 ? bbtn : ''}
                    <Button variant="outlined" id='nextcnfbtn' className='mx-auto' style={{ "width": c === 1 ? "30%" : "60%" }}
                        onClick={(c) => {
                            setC(1);
                        }}
                    >{c === 1 ? "Finish" : "Next"}</Button>
                </div>
            </div>
        </>
    )
}

export default Book