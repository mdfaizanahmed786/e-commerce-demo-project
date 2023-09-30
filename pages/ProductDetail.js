import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Spinner, Card, Container } from 'react-bootstrap';
function ProductDetail() {
  const { id } = useParams();
  const [productInfo, setProductInfo] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (id) {
      setLoading(true);
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((json) => {
          setProductInfo(json);
          setLoading(false);
        });
    }
  }, []);

  console.log(productInfo);

  if (loading) {
    return <Spinner animation="border" variant="primary" />;
  }

  return (
    <Container className="mt-4">
      <Card className="shadow">
        <div className="d-md-flex">
          <Card.Img
            variant="top"
            className="p-3"
            shadow
            src={productInfo.image}
          />
          <Card.Body>
            <Card.Title>{productInfo.title}</Card.Title>
            <Card.Text>{productInfo.description}</Card.Text>
            <Card.Text>
              <span style={{ fontWeight: 'bold' }}>Category</span>:{' '}
              {productInfo.category}
            </Card.Text>
            <Card.Text>
              <span style={{ fontWeight: 'bold' }}>Price</span>: $
              {productInfo.price}
            </Card.Text>

            {/* You can add more details as needed */}
          </Card.Body>
        </div>
      </Card>
    </Container>
  );
}

export default ProductDetail;
