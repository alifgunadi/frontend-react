import React from 'react';
import { Col, Container, Row, Card } from 'react-bootstrap';
import './Trending.css';
import Stars from '../images/Vector.png';
import EmptyStars from '../images/Vector kosong.png';
import PizzaPapperoni from '../images/pizza papperoni.png';
import PizzaMeat from '../images/Pizza Meat.png';
import DonnerKebab from '../images/Donner Kebab.png';
import SalmonRoll from '../images/Salmon Roll.png';
import CupcakeCoco from '../images/Cupcake Coco.png';
import DoughnutMilk from '../images/Doughnut Muilk.png';
import DoughnutUnicorn from '../images/Doughnut Unicorn.png';
import KathiKebab from '../images/Kathi Kebab.png';

function Trending() {
  
  return (
    <div>
      <div>
        <div>
          <Row >
            <Col>
              <h1 className='head-trend'>
                Browser Our Trending 
                <br/>
                <span className='receipt'>Receipt</span>
              </h1>
            </Col>
          </Row>
        </div>
      </div>

      <div className='kartu-category'>
        <div className="card-container">
          <Card className='card-satu'>
            <Card.Body>
              <Card.Img variant="top" src={PizzaPapperoni} className="card--image--trends" />
              <Card.Title className="card--title">Pizza Paperoni</Card.Title>
              <Card.Text className="card--text">Pizza</Card.Text>
              <Card.Text className="card--text">
                <img src={Stars} alt='stars' className='star'/>
                <img src={Stars} alt='stars' className='star'/>
                <img src={Stars} alt='stars' className='star'/>
                <img src={Stars} alt='stars' className='star'/>
                <img src={EmptyStars} alt='stars' className='star'/>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className='card-dua'>
            <Card.Body>
              <Card.Img variant="top" src={PizzaMeat} className="card--image--trends" />
              <Card.Title className="card--title">Pizza Meat</Card.Title>
              <Card.Text className="card--text">Pizza</Card.Text>
              <Card.Text className="card--text">
                <img src={Stars} alt='stars' className='star'/>
                <img src={Stars} alt='stars' className='star'/>
                <img src={Stars} alt='stars' className='star'/>
                <img src={EmptyStars} alt='stars' className='star'/>
                <img src={EmptyStars} alt='stars' className='star'/>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className='card-tiga'>
            <Card.Body>
              <Card.Img variant="top" src={DonnerKebab} className="card--image--trends" />
              <Card.Title className="card--title">Doner Kebab</Card.Title>
              <Card.Text className="card--text">Kebab</Card.Text>
              <Card.Text className="card--text">
                <img src={Stars} alt='stars' className='star'/>
                <img src={Stars} alt='stars' className='star'/>
                <img src={Stars} alt='stars' className='star'/>
                <img src={Stars} alt='stars' className='star'/>
                <img src={Stars} alt='stars' className='star'/>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className='card-empat'>
            <Card.Body>
              <Card.Img variant="top" src={SalmonRoll} className="card--image--trends" />
              <Card.Title className="card--title">Salmon Roll</Card.Title>
              <Card.Text className="card--text">Salmon</Card.Text>
              <Card.Text className="card--text">
                <img src={Stars} alt='stars' className='star'/>
                <img src={Stars} alt='stars' className='star'/>
                <img src={Stars} alt='stars' className='star'/>
                <img src={Stars} alt='stars' className='star'/>
                <img src={EmptyStars} alt='stars' className='star'/>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className='card-lima'>
            <Card.Body>
              <Card.Img variant="top" src={CupcakeCoco} className="card--image--trends" />
              <Card.Title className="card--title">Cupcake Choco</Card.Title>
              <Card.Text className="card--text">Cupcake</Card.Text>
              <Card.Text className="card--text">
                <img src={Stars} alt='stars' className='star'/>
                <img src={Stars} alt='stars' className='star'/>
                <img src={Stars} alt='stars' className='star'/>
                <img src={Stars} alt='stars' className='star'/>
                <img src={EmptyStars} alt='stars' className='star'/>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className='card-enam'>
            <Card.Body>
              <Card.Img variant="top" src={DoughnutMilk} className="card--image--trends" />
              <Card.Title className="card--title">Doughnut Milk</Card.Title>
              <Card.Text className="card--text">Doughnut</Card.Text>
              <Card.Text className="card--text">
                <img src={Stars} alt='stars' className='star'/>
                <img src={Stars} alt='stars' className='star'/>
                <img src={Stars} alt='stars' className='star'/>
                <img src={Stars} alt='stars' className='star'/>
                <img src={Stars} alt='stars' className='star'/>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className='card-tujuh'>
            <Card.Body>
              <Card.Img variant="top" src={DoughnutUnicorn} className="card--image--trends" />
              <Card.Title className="card--title">Doughnut Unicorn</Card.Title>
              <Card.Text className="card--text">Doughnut</Card.Text>
              <Card.Text className="card--text">
                <img src={Stars} alt='stars' className='star'/>
                <img src={Stars} alt='stars' className='star'/>
                <img src={Stars} alt='stars' className='star'/>
                <img src={Stars} alt='stars' className='star'/>
                <img src={EmptyStars} alt='stars' className='star'/>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className='card-delapan'>
            <Card.Body>
              <Card.Img variant="top" src={KathiKebab} className="card--image--trends" />
              <Card.Title className="card--title">Kathi Kebab</Card.Title>
              <Card.Text className="card--text">Kebab</Card.Text>
              <Card.Text className="card--text">
                <img src={Stars} alt='stars' className='star'/>
                <img src={Stars} alt='stars' className='star'/>
                <img src={Stars} alt='stars' className='star'/>
                <img src={Stars} alt='stars' className='star'/>
                <img src={EmptyStars} alt='stars' className='star'/>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className='btn justify-content-center tombol-container'>
        <div>
              <button className='btn--peralihan tombol--shadow' style={{fontSize: "16px"}}>ALL Receipt</button>
        </div>
      </div>
  </div>
  )
}

export default Trending;