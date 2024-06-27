import React from 'react';
import { Container, Row, Col, Button, Card, Carousel } from 'react-bootstrap';
import './Home.css';
import SS from '../Images/SS.jpg';
import NT from '../Images/NT.jpg';
import PT from '../Images/Pt.jpg';
import GRP from '../Images/group.jpg';
import BT from '../Images/BT.jpg';

export const Home: React.FC = () => {
  return (
    <>
      <Container fluid className="hero-section text-center text-white">
        <Row className="align-items-center">
          <Col>
            <h1>Welcome to Fitness World</h1>
            <p>Your journey to a healthier life starts here</p>
            <Button variant="primary"  >Join Now</Button>
          </Col>
        </Row>
      </Container>
        <h2 className="text-center mb-5">Our Services</h2>
      <Container className="mt-5">
        <Row className="single-row">
          <Col md={4}>
            <Card className="service-card">
              <Card.Img variant="top" src={PT} />
              <Card.Body>
                <Card.Title>Personal Training</Card.Title>
                <Card.Text>Get personalized workout plans and one-on-one training.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="service-card">
              <Card.Img variant="top" src={GRP} />
              <Card.Body>
                <Card.Title>Group Classes</Card.Title>
                <Card.Text>Join our group classes for an engaging workout experience.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="service-card">
              <Card.Img variant="top" src={NT} />
              <Card.Body>
                <Card.Title>Nutrition Plans</Card.Title>
                <Card.Text>Get customized nutrition plans to complement your workouts.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container className="mt-5">
        <h2 className="text-center mb-4">Success Stories</h2>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={SS} alt="First slide" />
            <Carousel.Caption>
              <h3>John's Transformation</h3>
              <p>John lost 50 pounds and gained muscle in 6 months.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={BT} alt="Second slide" />
            <Carousel.Caption>
              <h3>Emily's Journey</h3>
              <p>Emily improved her fitness and mental health through our programs.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>

      <footer className="text-center py-4 mt-5">
        <Container>
          <p>&copy; 2024 Fitness World. All rights reserved.</p>
        </Container>
      </footer>
    </>
  );
};

export default Home;
