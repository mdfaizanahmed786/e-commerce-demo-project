import React from 'react';
import { Carousel } from 'react-bootstrap';

function Slider() {
  return (
    <Carousel fade className="p-3">
      <Carousel.Item className="d-flex justify-content-center">
        <img
          className="d-flex  w-100 img-fluid"
          src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
          alt="First slide"
          style={{
            objectFit: 'cover',
            maxWidth: '350px',
          }}
        />
        <Carousel.Caption>
          <h3>T shirts</h3>
          <p>Explore wide range of t-shirts</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="d-flex justify-content-center">
        <img
          className="d-block w-100 img-fluid"
          src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
          alt="Second slide"
          style={{
            objectFit: 'cover',
            maxWidth: '350px',
          }}
        />
        <Carousel.Caption>
          <h3 classsName="text-dark">Jackets</h3>
          <p>Explore wide range of jackets</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="d-flex justify-content-center">
        <img
          className="d-block w-100 img-fluid"
          src="https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg"
          alt="Third slide"
          style={{
            objectFit: 'cover',
            maxWidth: '350px',
          }}
        />
        <Carousel.Caption>
          <h3>Women wear</h3>
          <p>Pick top collection from women wear</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
