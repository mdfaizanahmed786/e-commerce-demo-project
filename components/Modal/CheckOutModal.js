import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { clearCart } from '../../features/cartSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function CheckOutModal({ show, setShow }) {
  const dispatch = useDispatch();
  const handleClose = () => {
    setShow(false);
    dispatch(clearCart());
  };
  const navigate = useNavigate();
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Order Placed!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Your order has been successfully placed. Thank you for shopping with
          us!
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={() => {
          navigate("/products")
          dispatch(clearCart())
        }}>
          Continue shopping
        </Button>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CheckOutModal;
