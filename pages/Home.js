import React from 'react';
import { Container } from 'react-bootstrap';
import Carousel from '../components/Home/Carousel';

function Home() {
  return (
    <Container>
      <h2 className="mt-5">Welcome!</h2>
      <Carousel />
    </Container>
  );
}

export default Home;
