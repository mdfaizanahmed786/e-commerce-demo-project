import { useEffect, useState } from 'react';
import React from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Product from './Product';

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
          <Product key={product.id} {...product} />
        ))}
      </Row>
    </Container>
  );
}

export default Products;
