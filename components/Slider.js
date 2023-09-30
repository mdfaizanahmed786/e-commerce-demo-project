import React from 'react';
import { Carousel } from 'react-bootstrap';

function Slider() {
  return (
    <Carousel fade data-bs-theme="dark">
      <Carousel.Item className="d-flex justify-content-center">
        <img
          className="d-flex  w-100 img-fluid"
          src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
          alt="First slide"
          style={{
            maxWidth: '300px',
            maxHeight: '300px',
            objectFit: 'contain',
          }}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="d-flex justify-content-center">
        <img
          className="d-block w-100 img-fluid"
          src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
          alt="Second slide"
          style={{ maxWidth: '300px', maxHeight: '300px' }}
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="d-flex justify-content-center">
        <img
          className="d-block w-100 img-fluid"
          src="https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg"
          alt="Third slide"
          style={{ maxWidth: '300px', maxHeight: '300px' }}
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
