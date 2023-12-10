import React from 'react'
import { Form } from 'react-router-dom'
import { Col, Container, FormGroup, Input, Row } from 'reactstrap'

const Contact = () => {
  return (
    <div>
      <Container fluid className='contact' id='contact'>
        <h2 className='text-center fw-bold text-white mb-5 wow bounceInUp' data-wow-delay=".1s" data-wow-duration="1.5s">contact</h2>
        <Row> 
          <Col md="12">

            <Form className='w-50 m-auto'>

              <FormGroup className='wow bounceInUp' data-wow-delay=".3s" data-wow-duration="1.5s">
                <Input id="exampleName" name="text" placeholder="full name" type="text" />
              </FormGroup>

              <FormGroup className='wow bounceInUp' data-wow-delay=".5s" data-wow-duration="1.5s">
                <Input id="exampleEmail" name="email" placeholder="email" type="email" />
              </FormGroup>

              <FormGroup className='wow bounceInUp' data-wow-delay=".7s" data-wow-duration="1.5s">
                <Input id="exampleText" name="text" type="textarea" placeholder="your message" className='p-5' />
              </FormGroup>
              <button type='button' className='btn btn-primary send m-auto d-block w-100 p-3 wow bounceInDown' data-wow-delay="1s" data-wow-duration="1.5s">send</button>
            </Form>
          </Col>

        </Row>
      </Container>
    </div>
  )
}

export default Contact