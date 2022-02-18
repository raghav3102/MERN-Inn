import React, { useState } from 'react'
import Bill from '../components/Bill';
import BookingForm from '../components/BookingForm';
import Button from '@mui/material/Button';

function Booking() {
    const [c, setC] = useState(0);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [room, setRoom] = useState('');
    const [sdate, setSdate] = useState(new Date());
    const [edate, setEdate] = useState(new Date());
    const [days, setDays] = useState('');
    const [destination, setDestination] = useState('Goa');
    let bookingData = {
        name:  name ,
        email:  email ,
        phone:  phone ,
        rooms:  room ,
        sdate:  sdate ,
        edate:  edate ,
        days:  days ,
        destination: destination
    }
    const bbtn = <>
        <Button variant="outlined" id='nextcnfbtn' className='mx-auto' style={{ "width": "30%" }}
            onClick={(c) => {
                setC(0);
            }}
        >Back</Button>
    </>
    function getCardContent(c) {
        switch (c) {
            case 0:
                return <BookingForm bookingData={bookingData} setName={setName}  setEmail={setEmail}  setPhone={setPhone}  setDestination={setDestination}  setRoom={setRoom}  setSdate={setSdate}  setEdate={setEdate}  setDays={setDays} />;
            case 1:
                return <Bill bookingData={bookingData} setName={setName}  setEmail={setEmail}  setPhone={setPhone}  setDestination={setDestination}  setRoom={setRoom}  setSdate={setSdate}  setEdate={setEdate}  setDays={setDays} />
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

export default Booking