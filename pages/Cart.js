import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import CartItems from '../components/CartItems';

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <Container className="mt-5">
      <h1 className="mb-4">Cart Page</h1>
      <Row>
        {cartItems.map((item) => (
          <CartItems {...item} key={item.id} />
        ))}
      </Row>
    </Container>
  );
}

export default Cart;
