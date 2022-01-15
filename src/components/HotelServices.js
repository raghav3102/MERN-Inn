import React from 'react'


function HotelServices(props) {
    return (
        <>
            <div className="container px-5 d-flex flex-row mt-5 mb-5">
                <img src={props.src} alt="" className="h-auto col-lg-4 col-md-4 col-sm-8 col-xs-12 rounded" />
                <div className="container d-flex col-lg-8 col-md-8 col-sm-12 col-xs-12">
                    <h3 className=' mt-4 mb-5'>{props.title}</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus eum provident alias, ipsa unde quidem perferendis inventore harum quibusdam placeat odit architecto ad deserunt dignissimos vero ipsam voluptates? Excepturi magnam eveniet odit! Quam numquam culpa eaque vel, cupiditate expedita harum, labore explicabo molestiae molestias fuga laboriosam, itaque sed incidunt soluta eos repellat autem repudiandae praesentium. Consectetur esse praesentium harum tempore!</p>
                    <h5 className="mt-4 text-secondary">Service Hours</h5>
                    <h5 className="mt-2 text-danger">7:00 AM - 8:00 PM</h5>
                </div>
            </div>
        </>
    )
}

export default HotelServices
