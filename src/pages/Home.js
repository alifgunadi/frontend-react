import Container from 'react-bootstrap/Container';
import { Col, Row, Card, ThemeProvider } from 'react-bootstrap';
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
          <Col sm={5} xs={6} className='mt-4 column-1'>
            <h1 style={{ justifyContent: 'center', textAlign: 'left', marginTop: '100px', color: '#8BAC3E', fontSize: '64px', fontFamily: "Rubik", fontWeight: "bold"}}>Good Food Us<br/>Good Mood</h1>

            <p style={{ justifyContent: 'center',textAlign: 'left', marginTop: '30px', fontSize: '18px', fontFamily: 'Rubik', fontWeight: "400px"}}>I would think that conserving our natural resources should be a conservative position: Not to waste food, and not to throw away a lot of the food that we buy.</p>

            <div className='button-container'>
              <button className='btn--signup btn--shadow' style={{fontFamily: "Rubik"}}>Daftar Sekarang</button>
              <button className='btn--about' style={{fontFamily: "Rubik"}}>About us</button>
            </div>
          </Col>

          <Col xs={6}><img src={Image} alt='food-header' className='image--food'/>
            <Row>
              <Col md={4}>
                  <Card className='card--top' style={{ marginTop: "-50px", marginBottom: "50px", width: '400px', height: "93px"}}>
                    <Row>
                      <Col xs={4}>
                        <Card.Img variant="left" src={Image} style={{ width: '78%', height: 'auto',  }} />
                      </Col>
                      <Col xs={8}>
                        <Card.Body>
                          <Card.Title style={{fontFamily: "Rubik", fontWeight: "bold", textAlign: "left", marginBottom: "1px", marginTop: "0px"}}>Green Salad Tomato</Card.Title>
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
        <Category/>
        <Trending/>
        <Footer/>
      </Container>
  );
}

export default Home;
