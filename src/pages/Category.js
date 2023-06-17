import React from 'react';
import { Col, Row, Card } from 'react-bootstrap';
import './Category.css';
// import Pagination from './Pagination';
import CupcakeImage from '../images/cupcake.png';
import PizzaImage from '../images/pizza 1.png';
import KebabImage from '../images/kebab 1.png';
import DonutImage from '../images/doughnut 1.png';
import SalmonImage from '../images/salmon 1.png';

function Category() {
  
  return (
    <div>
      <div>
        <div>
          <Row >
            <Col>
              <h1 className='head-category'>
                Browser Our Category 
                <br/>
                <span className='receipt'>Receipt</span>
              </h1>
            </Col>
          </Row>
        </div>
      </div>

      <div className='card-category'>
        <div className="card-container">
          <Card className='card-one'>
            <Card.Body>
              <Card.Img variant="top" src={CupcakeImage} className="card--image" />
              <Card.Title className="card--title">Cupcake</Card.Title>
              <Card.Text className="card--text">22 Items</Card.Text>
            </Card.Body>
          </Card>
          <Card className='card-two'>
            <Card.Body>
              <Card.Img variant="top" src={PizzaImage} className="card--image" />
              <Card.Title className="card--title">Pizza</Card.Title>
              <Card.Text className="card--text">25 Items</Card.Text>
            </Card.Body>
          </Card>
          <Card className='card-three'>
            <Card.Body>
              <Card.Img variant="top" src={KebabImage} className="card--image" />
              <Card.Title className="card--title">Kebab</Card.Title>
              <Card.Text className="card--text">12 Items</Card.Text>
            </Card.Body>
          </Card>
          <Card className='card-four'>
            <Card.Body>
              <Card.Img variant="top" src={SalmonImage} className="card--image" />
              <Card.Title className="card--title">Salmon</Card.Title>
              <Card.Text className="card--text">22 Items</Card.Text>
            </Card.Body>
          </Card>
          <Card className='card-five'>
            <Card.Body>
              <Card.Img variant="top" src={DonutImage} className="card--image" />
              <Card.Title className="card--title">Dougnut</Card.Title>
              <Card.Text className="card--text">11 Items</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className='btn-next-prev'>
        <div>
          <Row className='justify-content-center'>
            <Col xs={4} className='text-end'>
              <button className='next-prev prev-button'>{"<< "}PREV</button>
            </Col>
            <Col xs={4} className='text-start'>
              <button className='next-prev next-button'>NEXT{" >>"}</button>
            </Col>
          </Row>
        </div>
      </div>
  </div>
  )
}

export default Category;