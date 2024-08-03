import React from 'react'
import { Col, Container, Row } from 'reactstrap'

const MyLogo = () => {
  return (
    <div>
        <Container fluid className='text-center logo'>
            <Row>
                <Col>
                <img src='/images/my-Logo.png' alt='' />
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default MyLogo