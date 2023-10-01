import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addItemToCart, removeItemFromCart } from '../features/cartSlice';
function CartItems({ id, title, image, quantity, price }) {
  const dispatch = useDispatch();
  const addItem = () => {
    dispatch(
      addItemToCart({
        id,
        title,
        image,
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
          <div>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <Button variant="outline-secondary" onClick={removeItem}>
                  -
                </Button>
                <span className="mx-2 mt-2">{quantity}</span>
                <Button variant="outline-secondary" onClick={addItem}>
                  +
                </Button>
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
