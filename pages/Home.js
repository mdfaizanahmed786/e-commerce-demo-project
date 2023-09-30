import React from 'react';
import { Container } from 'react-bootstrap';
import Slider from '../components/Home/Slider';
import Products from '../components/Home/Products';

function Home() {
  return (
    <>
      <Slider />

      <div>
<Products/>
      </div>
    </>
  );
}

export default Home;
