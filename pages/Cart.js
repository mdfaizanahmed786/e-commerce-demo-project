import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Button } from 'react-bootstrap';
import CartItems from '../components/CartItems';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../features/cartSlice';
import CheckOutModal from '../components/Modal/CheckOutModal';
import EmptyCartLogo from '../assets/svg/emptyCart.svg';

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const [showSuccessCartModal, setShowSuccessCartModal] = useState(false);
  const totalPrice = useMemo(() => {
    const rawTotal = cartItems.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.quantity * currentItem.price;
    }, 0);

    return parseFloat(rawTotal.toFixed(2));
  }, [cartItems]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Container className="mt-5" style={{ minHeight: '100vh' }}>
      {cartItems.length > 0 ? (
        <>
          <Row>
            {cartItems.map((item) => (
              <CartItems {...item} key={item.id} />
            ))}
          </Row>
          <div className="shadow p-5">
            <p>
              <span style={{ fontWeight: 'bold' }}> Total Price: </span>$
              {totalPrice}
            </p>
            <div className="d-flex mt-3 justify-content-center ">
              <Button
                variant="outline-danger"
                onClick={() => dispatch(clearCart())}
              >
                Clear Cart
              </Button>
              <Button
                variant="outline-success"
                onClick={() => setShowSuccessCartModal(true)}
                className="ml-3"
              >
                Checkout
              </Button>
            </div>
          </div>
        </>
      ) : (
        <div className="w-100 text-center">
          <h3>No items in your cart!</h3>
          <Button onClick={() => navigate('/products')} className="mt-4 ">
            Explore Products
          </Button>
          <EmptyCartLogo />
        </div>
      )}
      <CheckOutModal
        show={showSuccessCartModal}
        setShow={setShowSuccessCartModal}
      />
    </Container>
  );
}

export default Cart;
