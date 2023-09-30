import React from 'react';
import { useState } from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import AddToCartModal from './Modal/AddToCartModal';
import { useNavigate } from 'react-router-dom';
function Product({ id, title, description, price, image }) {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <Col md={4} className="d-flex w-100 justify-content-center">
        <Card className="mt-4 shadow cursor-pointer" style={{ width: '23rem', height:"fit-content" }}>
          <Card.Img variant="top" src={image} className="p-3" />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text style={{ fontWeight: 'bold' }}>${price}</Card.Text>
            <div className="d-flex">
              <Button variant="outline-primary" onClick={() => setShow(true)}>
                Add to cart
              </Button>
              <Button
                variant="outline-info"
                className="ml-2"
                onClick={() => navigate(`/products/${id}`)}
              >
                See More
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <AddToCartModal show={show} setShow={setShow} />
    </>
  );
}

export default Product;
