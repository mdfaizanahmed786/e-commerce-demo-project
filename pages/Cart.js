import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Button } from 'react-bootstrap';
import CartItems from '../components/CartItems';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../features/cartSlice';

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Container className="mt-5">
      {cartItems.length > 0 ? (
        <Row>
          {cartItems.map((item) => (
            <CartItems {...item} key={item.id} />
          ))}
        </Row>
      ) : (
        <div>
          <h3>No items in your cart!</h3>
          <Button onClick={() => navigate('/products')} className="mt-4 ">
            Explore Products
          </Button>
        </div>
      )}

      <div className="d-flex justify-content-center">
        <Button variant="outline-danger">Clear Cart</Button>
        <Button variant="outline-success" className="ml-3">
          Checkout
        </Button>
      </div>
    </Container>
  );
}

export default Cart;
