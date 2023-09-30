import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { AiOutlineShoppingCart } from 'react-icons/ai';

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav>
          <Navbar.Brand href="/">E-commerce </Navbar.Brand>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/products">Products</Nav.Link>
        </Nav>
        <Button style={{ position: 'relative' }}>
          <AiOutlineShoppingCart size={19} />
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
            3
          </div>
        </Button>
      </Container>
    </Navbar>
  );
}

export default Header;
