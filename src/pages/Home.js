import Container from 'react-bootstrap/Container';
import { Col, Row, Card } from 'react-bootstrap';
import './Home.css';
import Image from '../images/food1.png';
import Category from './Category';
import Trending from './Trending';
import Stars from '../images/Vector.png';
import EmptyStars from '../images/Vector kosong.png';
import Footer from '../components/Footer';

function Home() {
  return (
      <Container>
        <Row>
          <Col sm className='mt-4'>
            <h1 className='head-awal'>Good Food Us<br/>Good Mood</h1>

            <p className='p-1'>I would think that conserving our natural resources should be a conservative position: Not to waste food, and not to throw away a lot of the food that we buy.</p>

            <div className='button-container'>
              <button className='btn--signup btn--shadow' style={{fontFamily: "Rubik"}}>Daftar Sekarang</button>
              <button className='btn--about' style={{fontFamily: "Rubik"}}>About us</button>
            </div>
          </Col>

          <Col sm>
            <img src={Image} alt='food-header' className='image--food'/>
            <Row>
              <Col md={4}>
                  <Card className='card--top' style={{ marginTop: "-50px", marginBottom: "50px" }}>
                    <Row>
                      <Col sm={4}>
                        <Card.Img variant="left" src={Image} style={{ width: '78%', height: 'auto' }} />
                      </Col>
                      <Col sm={8}>
                        <Card.Body>
                          <Card.Title className='card-title' style={{fontFamily: "Rubik", fontWeight: "bold", textAlign: "left", marginBottom: "1px", marginTop: "0px"}}>Green Salad Tomato</Card.Title>
                          <Card.Text style={{textAlign: "left", color: "#757575"}}>Tomato 
                          <br/>
                          <img src={Stars} alt='stars' className='star'/>
                          <img src={Stars} alt='stars' className='star'/>
                          <img src={Stars} alt='stars' className='star'/>
                          <img src={Stars} alt='stars' className='star'/>
                          <img src={EmptyStars} alt='stars' className='star'/></Card.Text>
                        </Card.Body>
                      </Col>
                    </Row>
                  </Card>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col sm>
          </Col>
        </Row>
        <Category/>
        <Trending/>
        <Footer/>
      </Container>
  );
}

export default Home;
