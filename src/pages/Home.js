import React from 'react';
import CarouselHome from '../components/Carousel';
import Button from '@mui/material/Button';
import Homecard from '../components/Homecard';

function Home() {
  return (<>
    <div className='home'>
      <CarouselHome></CarouselHome>
    </div>
    <div className="container mt-2 ">
      <h2><strong>The <span id="m">M</span><span id="e">E</span><span id="r">R</span><span id="n">N</span> <span></span> Inn experience</strong></h2>
      <br />
      <p><strong>Access 100+ resorts across India and the world, where a universe of experiences opens up for you. Relax by the beach in Bali. Stay in an igloo in Maldives. Watch the Northern Lights put up a spectacular show in Greece. Dine in a tree-house in Munnar. There's so much waiting for you.</strong></p>
    </div>
    <div className="container  mt-2 ">
      <h2><strong>New Resorts, New Memories</strong></h2>
      <br />
      <p><strong>The world is a large place and we'd like you to experience it in all its beauty and wonder. Which is why, we keep expanding our network of resorts to offer you more than you can imagine. To create new experiences, new exploration, new moments of magic for you.</strong></p>
    </div>
    <div className="homecard d-flex mt-4  mb-5 justify-content-center">
      <Homecard></Homecard>
    </div>
  </>
  );
}

export default Home;
