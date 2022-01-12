import React from 'react'
import { Carousel } from 'react-bootstrap'
function CarouselHome() {
    return (
        <>
            <Carousel fade id='carousel' variant=''>
                <Carousel.Item>
                    <img
                        className="d-block "
                        src="https://source.unsplash.com/1280x400/?bali"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        
                        <p>Bali, Indonesia</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block "
                        src="https://source.unsplash.com/1280x400/?maldives"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <p>Maldives</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block "
                        src="https://source.unsplash.com/1280x400/?greece"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <p>Greece</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default CarouselHome






