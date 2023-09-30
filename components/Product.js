import React from 'react';
import { useState } from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import AddToCartModal from './Modal/AddToCartModal';
function Product({ title, description, price, image }) {
  const [show, setShow] = useState(false);

  return (
    <>
      <Col md={4}>
        <Card className="mt-4 shadow">
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description.slice(0, 200)}...</Card.Text>
            <Card.Text style={{ fontWeight: 'bold' }}>${price}</Card.Text>
            <Button variant="outline-primary" onClick={() => setShow(true)}>
              Add to cart
            </Button>
          </Card.Body>
        </Card>
      </Col>
      <AddToCartModal show={show} setShow={setShow} />
    </>
  );
}

export default Product;
