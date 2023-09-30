import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Product from './Product';
import useFetchProducts from '../hooks/useFetchProducts';
import Skeleton from 'react-loading-skeleton';

function Products({ slice = true }) {
  const { loading, products } = useFetchProducts();

  return (
    <Container>
      <h2 className="mt-5 mb-3 text-center">Our Products</h2>

      {loading && (
        <Row>
          {[1, 2, 3, 4, 5, 6].map((item, i) => (
            <Col key={i} md={4} style={{ marginBottom: '20px' }}>
              <Card>
                <Card.Img variant="top" as={Skeleton} height={150} />
                <Card.Body>
                  <Card.Title as={Skeleton} />
                  <Card.Text as={Skeleton} count={3} />
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}

      <Row>
        {slice
          ? products
              .slice(8, 16)
              .map((product) => <Product key={product.id} {...product} />)
          : products.map((product) => (
              <Product key={product.id} {...product} />
            ))}
      </Row>
    </Container>
  );
}

export default Products;
