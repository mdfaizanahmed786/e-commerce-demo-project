import React from 'react';
import { Carousel } from 'react-bootstrap';

function Slider() {
  return (
    <Carousel fade>
      <Carousel.Item className="d-flex justify-content-center">
        <img
          className="d-flex  w-100 img-fluid"
          src="https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="First slide"
          style={{
            objectFit: 'cover',
            width: 'auto',
            maxHeight: '550px',
          }}
        />
      </Carousel.Item>
      <Carousel.Item className="d-flex justify-content-center">
        <img
          className="d-block w-100 img-fluid"
          src="https://images.pexels.com/photos/5264900/pexels-photo-5264900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Second slide"
          style={{
            objectFit: 'cover',
            width: 'auto',
            maxHeight: '550px',
          }}
        />
      </Carousel.Item>
      <Carousel.Item className="d-flex justify-content-center">
        <img
          className="d-block w-100 img-fluid"
          src="https://images.pexels.com/photos/3760081/pexels-photo-3760081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Third slide"
          style={{
            objectFit: 'cover',
            width: 'auto',
            maxHeight: '550px',
          }}
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
