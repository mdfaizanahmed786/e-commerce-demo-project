import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { AiFillStar } from 'react-icons/ai';
import { addItemToCart, removeItemFromCart } from '../features/cartSlice';
function CartItems({ id, title, image, quantity, price, rating }) {
  const dispatch = useDispatch();
  const addItem = () => {
    dispatch(
      addItemToCart({
        id,
        title,
        image,
        rating,
      })
    );
  };

  const removeItem = () => {
    dispatch(
      removeItemFromCart({
        id,
        title,
        image,
      })
    );
  };
  return (
    <Col md={6} lg={4} className="mb-4 d-flex w-100 justify-content-center">
      <Card
        className="shadow"
        style={{ width: '23rem', height: 'fit-content' }}
      >
        <div className="d-flex w-100  justify-content-center">
          <Card.Img
            variant="top"
            src={image}
            alt={title}
            className="p-3"
            style={{ width: '12rem' }}
          />
        </div>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {Array(parseInt(rating.rate))
              .fill()
              .map((_, i) => (
                <AiFillStar key={i} color="#007bff" />
              ))}
          </Card.Text>
          <div>
            <div className="d-flex align-items-center">
            <div style={{fontWeight:"bold"}}>Quantity: </div>
            <div className="d-flex justify-content-between ml-3 align-items-center">
              <div className="btn-group">
                <Button variant="outline-secondary" onClick={removeItem}>
                  -
                </Button>
                <span className="mx-2 mt-2">
                  <span> </span>
                  {quantity}
                </span>
                <Button variant="outline-secondary" onClick={addItem}>
                  +
                </Button>
              </div>
            </div>
            </div>
            <p className="mt-4">
              <span style={{ fontWeight: 'bold' }}>Product Price: </span> $
              {parseFloat((quantity * price).toFixed(2))}
            </p>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default CartItems;
