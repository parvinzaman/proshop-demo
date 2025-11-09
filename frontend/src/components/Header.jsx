import React from 'react';
import { Navbar, Nav, Container, NavbarBrand, NavbarCollapse } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';

const Header = () => {
  return (
    <header>
        <Navbar bg="dark" variant='dark' expand="md" >
            <Container>
                <NavbarBrand href="/">Proshop</NavbarBrand>
                <NavbarToggle aria-controls='basic-navbar-nav' />
                <NavbarCollapse>
                    <Nav className="ms-auto">
                        <Nav.Link href='/cart'><FaShoppingCart /> Cart</Nav.Link>
                        <Nav.Link href='/login'><FaUser /> Sign In</Nav.Link>
                    </Nav>
                </NavbarCollapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header