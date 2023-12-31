import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-light mt-5">
      <Container className="p-3">
        <Row>
          <Col md={4}>
            <h5>Contact Us</h5>
            <p>Email: ecommerce@information.com</p>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <p>Home</p>
              </li>
              <li>
                <p>Products</p>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Admin</h5>
            <p>Email: faizan@gmail.com</p>
          </Col>
        </Row>
      </Container>
      <div className="text-center pt-2  bg-secondary d-flex justify-content-center align-items-center w-100 h-100">
        <p className="mt-2">
          &copy; 2023 Our E-commerce site. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
