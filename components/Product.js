import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';
function Product({ title, description, price, image }) {
  return (
    <Col md={4}>
      <Card className="mt-4 shadow">
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description.slice(0, 200)}...</Card.Text>
          <Card.Text style={{ fontWeight: 'bold' }}>${price}</Card.Text>
          <Button variant="outline-primary">Add to cart</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Product;
