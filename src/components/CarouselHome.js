import React from "react";
import { Carousel } from "react-bootstrap";
import Image from "./Image";
function CarouselHome(props) {
  const destinations = props.destinationsForCarousel;
  let url = props.urlForCarouselFetch;
  return (
    <>
      <Carousel fade pause="hover" className="mb-3" id="carousel" variant="">
        <Carousel.Item>
          <Image url={url + destinations[0]} destination={destinations[0]} />
          <Carousel.Caption>
            <p>{destinations[0]}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image url={url + destinations[1]} destination={destinations[1]} />
          <Carousel.Caption>
            <p>{destinations[1]}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image url={url + destinations[2]} destination={destinations[2]} />
          <Carousel.Caption>
            <p>{destinations[2]}</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default CarouselHome;
