import React from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Product from './Product';
import useFetchProducts from '../hooks/useFetchProducts';

function Products({ slice = true }) {
  const { loading, products } = useFetchProducts();

  return (
    <Container>
      <h2 className="mt-5 mb-3">Our Products</h2>

      {loading && (
        <div className="d-flex justify-content-center align-items-center mt-5">
          <Spinner animation="border" variant="primary" />
        </div>
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
