import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Spinner, Card, Container, Button } from 'react-bootstrap';
import AddToCartModal from '../components/Modal/AddToCartModal';
function ProductDetail() {
  const { id } = useParams();
  const [productInfo, setProductInfo] = useState({});
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

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

  if (loading) {
    return <Spinner animation="border" variant="primary" />;
  }

  return (
    <Container className="mt-4" style={{ minHeight: '100vh' }}>
      <Card className="shadow">
        <div className="d-md-flex">
          <div className="d-flex justify-content-center w-100">
            <Card.Img
              variant="top"
              className="p-3"
              shadow
              src={productInfo.image}
              style={{ width: '20rem' }}
            />
          </div>
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

            <Button variant="outline-primary" onClick={() => setShow(true)}>
              Add to cart
            </Button>
          </Card.Body>
        </div>
      </Card>
      <AddToCartModal show={show} setShow={setShow} />
    </Container>
  );
}

export default ProductDetail;
