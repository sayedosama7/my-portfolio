import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { TypeAnimation } from 'react-type-animation';

const Header = () => {
    return (
        <div>
            <Container className='header'>
                <Row>
                    <Col className='header-caption' md="12" lg="6">
                        <h4 className='text-blue  m-0 p-0'>hi, i'm sayed osama</h4>
                        <p className='text-blue m-0 p-0'>i'm</p>
                        <TypeAnimation
                            sequence={[
                                'front end developer',
                                1000,
                                ' react developer',
                                1000
                            ]}
                            speed={50}
                            className='text-animation'
                            repeat={Infinity}
                        />
                        <button className='btn btn-primary btn-block w-25 p-3'>Download CV</button>
                    </Col>

                    <Col md="12" lg="6">

                        <div className='position-realative'>
                            <img className='m-auto d-block' src='images/my-photo.jpeg' alt='my-img' />
                        </div>
                        <div className='header-icons'>
                            <div className='bootstrap'>
                                <img className='position-absolute' src='images/header-icons/bootstrap.png' alt='my-img' />
                            </div>

                            <div className='css'>
                                <img className='position-absolute' src='images/header-icons/css.png' alt='my-img' />
                            </div>

                            <div className='html'>
                                <img className='position-absolute' src='images/header-icons/html.png' alt='my-img' />
                            </div>

                            <div className='js'>
                                <img className='position-absolute' src='images/header-icons/js.png' alt='my-img' />
                            </div>

                            <div className='react'>
                                <img className='position-absolute' src='images/header-icons/react.png' alt='my-img' />
                            </div>

                            <div className='github'>
                                <img className='position-absolute' src='images/header-icons/github.png' alt='my-img' />
                            </div>

                            <div className='git'>
                                <img className='position-absolute' src='images/header-icons/git.png' alt='my-img' />
                            </div>

                            <div className='tailwind'>
                                <img className='position-absolute' src='images/header-icons/tailwind.jpg' alt='my-img' />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Header