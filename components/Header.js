import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems);
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav>
          <Navbar.Brand as={Link} to="/">
            E-commerce
          </Navbar.Brand>
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/products">
            Products
          </Nav.Link>
        </Nav>
        <Button
          style={{ position: 'relative' }}
          onClick={() => navigate('/cart')}
        >
          <AiOutlineShoppingCart size={19} />
          {cartItems.length > 0 && (
            <div
              style={{
                position: 'absolute',
                backgroundColor: 'red',
                borderRadius: '30px',
                height: '1.2rem',
                width: '1.2rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                top: -7,
                right: -10,
                flexGrow: 0,
                flexShrink: 0,
              }}
            >
              {cartItems.length}
            </div>
          )}
        </Button>
      </Container>
    </Navbar>
  );
}

export default Header;
