/* eslint-disable react/style-prop-object */
import React from 'react'
import { Col, Container, Row } from 'reactstrap'

const Skills = () => {
    return (
        <div>
            <Container className='skills' id='skills'>
                <Row>
                    <h2 className='text-white text-center fw-bold wow bounceInDown'>my skills</h2>
                    <Col md="12" className='text-center mt-5'>
                        <img className='wow bounceInUp' data-wow-delay=".1s" src='/images/header-icons/html.png' alt='' />
                        <img className='wow bounceInUp' data-wow-delay=".1s"  src='/images/header-icons/css.png' alt='' />
                        <img className='wow bounceInUp' data-wow-delay=".2s"  src='/images/header-icons/bootstrap.png' alt='' />
                        <img className='wow bounceInUp' data-wow-delay=".2s"  src='/images/header-icons/tailwind.jpg' alt='' />
                        <img className='wow bounceInUp' data-wow-delay=".3s"  src='/images/header-icons/js.png' alt='' />
                        <img className='wow bounceInUp' data-wow-delay=".3s"  src='/images/header-icons/react.png' alt='' />
                        <img className='wow bounceInUp' data-wow-delay=".4s"  src='/images/header-icons/sass.png' alt='' />
                        <img className='wow bounceInUp' data-wow-delay=".4s"  src='/images/header-icons/git.png' alt='' />
                        <img className='wow bounceInUp' data-wow-delay=".5s"  src='/images/header-icons/github.png' alt='' />
                        <img className='wow bounceInUp' data-wow-delay=".5s"  src='/images/header-icons/react-redux.png' alt='' />
                        <img className='wow bounceInUp' data-wow-delay=".6s"  src='/images/header-icons/material-ui.png' alt='' />
                    </Col>
                    <div className='d-flex justify-content-center mt-5'>


                    </div>

                    {/* <Col className='text-light' md="6">
                        <div class="skills">
                            <div class="skill">
                                <h3>html<span>95%</span></h3>
                                <div class="progress">
                                    <span style={{width:"95%"}}></span>
                                </div>
                            </div>
                            <div class="skill">
                                <h3>css<span>90%</span></h3>
                                <div class="progress">
                                    <span style={{width:"90%"}}></span>
                                </div>
                            </div>
                            <div class="skill">
                                <h3>javascript<span>80%</span></h3>
                                <div class="progress">
                                    <span style={{width:"80%"}}></span>
                                </div>
                            </div>
                            <div class="skill">
                                <h3>react<span>80%</span></h3>
                                <div class="progress">
                                    <span style={{width:"85%"}}></span>
                                </div>
                            </div>
                        </div>
                    </Col> */}

                </Row>
            </Container>
        </div>
    )
}

export default Skills