import React from 'react';
import { useSelector } from 'react-redux';

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems);
  return (
    <div className="container">
      <h1>Cart Page</h1>
    </div>
  );
}

export default Cart;
