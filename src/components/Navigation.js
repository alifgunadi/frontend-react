import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';
import './Navigation.css';

function Navigation() {
  return (
    <Navbar className="bg-body-tertiary navbar" expand="lg">
      <Container>
        <Navbar.Collapse id="navbar-nav">
          <Nav className="d-flex align-items-center justify-content-between nav-home-about">
            <img
              src={process.env.PUBLIC_URL + '/images/brand_navbar.png'}
              width="180px"
              height="45px"
              className="d-inline-block align-top brand--image"
              alt="Elemes logo"
            />
            <Nav.Link className='navlink' href="/" style={{fontFamily: 'Rubik'}}>Home</Nav.Link>
            <Nav.Link className='navlink' href="/about" style={{fontFamily: 'Rubik'}}>About</Nav.Link>
            <Nav.Link className='navlink' href="/promotions" style={{fontFamily: 'Rubik'}}>Promotions</Nav.Link>
            <Nav.Link className='navlink' href="/blogs" style={{fontFamily: 'Rubik'}}>Blogs</Nav.Link>
            <Nav.Link className='navlink' href="/contact" style={{fontFamily: 'Rubik'}}>Contact Us</Nav.Link>
            
              <Nav.Link className='navlink--login' href="/login">Masuk</Nav.Link>
              <button className='btn--signup'>Daftar Sekarang</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
