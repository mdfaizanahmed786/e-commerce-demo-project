import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <Container className="mt-5">
      <h1 className="mb-4">Cart Page</h1>
      <Row>
        {cartItems.map((item) => (
          <Col
            key={item.id}
            md={6}
            lg={4}
            className="mb-4 d-flex w-100 justify-content-center"
          >
            <Card
              className="shadow"
              style={{ width: '23rem', height: 'fit-content' }}
            >
              <div className="d-flex w-100  justify-content-center">
                <Card.Img
                  variant="top"
                  src={item.image}
                  alt={item.title}
                  className="p-3"
                  style={{ width: '12rem' }}
                />
              </div>
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <Button variant="outline-secondary">-</Button>
                    <span className="mx-2 mt-2">{item.quantity}</span>
                    <Button variant="outline-secondary">+</Button>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Cart;
