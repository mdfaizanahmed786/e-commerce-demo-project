import { useEffect, useState } from 'react';
import React from 'react';
import { Container, Row, Col, Card, Spinner, Button } from 'react-bootstrap';

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => {
        setLoading(false);
        setProducts(json);
      });
  }, []);

  return (
    <Container>
      <h2 className="mt-5 mb-3">Our Products</h2>

      {loading && (
        <div className="d-flex justify-content-center align-items-center mt-5">
          <Spinner animation="border" variant="primary" />
        </div>
      )}

      <Row>
        {products.slice(8, 16).map((product) => (
          <Col key={product.id} md={4}>
            <Card className="mt-4 shadow">
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description.slice(0, 200)}...</Card.Text>
                <Card.Text style={{ fontWeight: 'bold' }}>
                  ${product.price}
                </Card.Text>
                <Button variant="outline-primary">Add to cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Products;
