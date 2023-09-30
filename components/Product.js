import React from 'react';
import { useState } from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import AddToCartModal from './Modal/AddToCartModal';
function Product({ title, description, price, image }) {
  const [show, setShow] = useState(false);

  return (
    <>
      <Col md={4} className="d-flex w-100 justify-content-center ">
        <Card className="mt-4 shadow"  style={{width:"25rem"}}>
          <Card.Img variant="top" src={image} className="p-3"/>
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
