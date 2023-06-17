import React from 'react'
import { Col, Container, Form, Nav, Row } from 'react-bootstrap';
import ElemesBrand from '../images/brand_navbar.png';
import './Footer.css';
import Contact from '../images/Contact.png';
import Instagram from '../images/Instagran.png';
import EmailDua from '../images/email (2).png';

function Footer() {
  return (
    <div>
      <div className='top-footer'>
        <Container>
          <Row>
            <Col xs={4}>
              <div>
                <img className='brand-footer' src={ElemesBrand} alt='brand'/>
              </div>
              <div className='descript'>
                <p>Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan, <br/> 
                  Kecamatan Setiabudi, Kota Jakarta Selatan, <br/>
                  Daerah Khusus Ibukota Jakarta 12950
                </p>
              </div>
              <div>
                <button className='button-footer'><img src={EmailDua} alt='email'/></button>
                <button className='button-footer'><img src={Contact} alt='contact'/></button>
                <button className='button-footer'><img src={Instagram} alt='instagram'/></button>
              </div>
            </Col>
            <Col>
              <div>
                <h3 className='judul-category'>Categories</h3>
              </div>
              <div className='isi-category'>
                <Nav.Link href='/category/cupcake'><h6 className='per-kategori'>Cupcake</h6></Nav.Link>
                <Nav.Link href='/category/cupcake'><h6 className='per-kategori'>Pizza</h6></Nav.Link>
                <Nav.Link href='/category/cupcake'><h6 className='per-kategori'>Kebab</h6></Nav.Link>
                <Nav.Link href='/category/cupcake'><h6 className='per-kategori'>Salmon</h6></Nav.Link>
                <Nav.Link href='/category/cupcake'><h6 className='per-kategori'>Dougnut</h6></Nav.Link>
              </div>
            </Col>
            <Col>
            <div>
                <h3 className='judul-category'>About Us</h3>
              </div>
              <div className='isi-category'>
                <Nav.Link href='/category/cupcake'><h6 className='per-kategori'>About Us</h6></Nav.Link>
                <Nav.Link href='/category/cupcake'><h6 className='per-kategori'>FAQ</h6></Nav.Link>
                <Nav.Link href='/category/cupcake'><h6 className='per-kategori'>Report Platform</h6></Nav.Link>
              </div>
            </Col>
            <Col>
            <div>
                <h3 className='judul-category'>Newsletter</h3>
              </div>
              <div className='isi-category'>
                <h6 className='per-kategori'>Get now free 50% discount for all <br/> products on your first order</h6>
                <h6 className='per-kategori'>FAQ</h6>
              <div>
              <Form className="d-flex per-kategori">
                <Form.Control
                  type="email"
                  placeholder="Your email address"
                  aria-label="email"
                />
                <button className='btn-send'>SEND</button>
              </Form>
              </div>
                <Nav.Link href='/category/cupcake'><h6 className='per-kategori'><img src={EmailDua} alt='icon'/>{" "}elemesid@gmail.com</h6></Nav.Link>
                <Nav.Link href='/category/cupcake'><h6 className='per-kategori'><img src={Contact} alt='icon'/>{" "}0888 1111 2222</h6></Nav.Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
      <footer className="text-center bottom-footer">
        &copy; 2021 ELEMES ID. ALL RIGHTS RESERVED
      </footer>
      </div>
    </div>
  )
}

export default Footer;