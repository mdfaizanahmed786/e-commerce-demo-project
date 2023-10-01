import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Spinner, Card, Container, Button } from 'react-bootstrap';
import { addItemToCart } from '../features/cartSlice';
import { AiFillStar } from 'react-icons/ai';
import AddToCartModal from '../components/Modal/AddToCartModal';
function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
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

  const addItem = () => {
    setShow(true);
    dispatch(
      addItemToCart({
        id: productInfo.id,
        title: productInfo.title,
        image: productInfo.image,
        price: productInfo.price,
        rating: productInfo.rating,
      })
    );
  };

  if (loading) {
    return (
      <div
        style={{ minHeight: '100vh' }}
        className="d-flex justify-content-center align-items-center"
      >
        <Spinner animation="border" variant="primary" />
      </div>
    );
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
            <Card.Text>
              {Array(parseInt(productInfo.rating?.rate) || 5)
                .fill()
                .map((_, i) => (
                  <AiFillStar key={i} color="#007bff" />
                ))}
            </Card.Text>
            <Card.Text>{productInfo.description}</Card.Text>
            <Card.Text>
              <span style={{ fontWeight: 'bold' }}>Category: </span>
              {productInfo.category}
            </Card.Text>
            <Card.Text>
              <span style={{ fontWeight: 'bold' }}>Price</span>: $
              {productInfo.price}
            </Card.Text>

            <Button variant="outline-primary" onClick={addItem}>
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
