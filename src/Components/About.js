import React from 'react';
import { Col, Container, Row } from 'reactstrap';

const About = () => {
  return (
    <div>
      <Container fluid className='about text-center' id='about'>
        <Row>
          <Col md="12">
            <h2 className='text-light fw-bold pb-4 wow bounceInDown'>About Me</h2>
            <p className='text-blue fw-bold wow bounceInUp'>
              A self-taught Web Developer with hands on experience of building Websites.<br />
              My name is Sayed, Junior Front-end developer.<br />
              My experience in the field is two years and I work from home.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
