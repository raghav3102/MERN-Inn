import React from 'react'
import { Carousel } from 'react-bootstrap'
function CarouselAbout() {
    return (
        <>
            <Carousel fade id='carousel' variant=''>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://source.unsplash.com/1280x400/?hotels"
                        alt="First slide" 
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://source.unsplash.com/1280x400/?hotel"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://source.unsplash.com/1280x400/?resort"
                        alt="Third slide"
                    />

                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default CarouselAbout






