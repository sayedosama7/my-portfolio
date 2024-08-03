import React from 'react'
import { Col, Container, Row } from 'reactstrap'

const Footer = () => {
    return (
        <div>
            <Container fluid className='text-center text-white footer'>
                <Row>
                    <Col>
                        <hr />
                        <h5 className='pt-5'> &copy; 2024 by sayed osama <i className='fas fa-heart text-danger'></i> </h5>
                        <div className='icons pb-5'>
                            <a href='https://web.facebook.com/profile.php?id=100074154131174' target='_blank' rel="noreferrer"><i className='fab fa-facebook m-3'></i></a>
                            <a href='https://github.com/sayedosama7' rel="noreferrer" target='_blank'><i className='fab fa-github m-3'></i></a>
                            <a href='https://www.linkedin.com/in/sayed-osama-32b218289/' target='_blank' rel="noreferrer"><i className='fab fa-linkedin m-3'></i></a>
                            <a href='https://wa.me/+201210304516' target='_blank' rel="noreferrer"><i className='fab fa-whatsapp-square whats m-3'></i></a>
                            <a href='mailto:sayedosama088@gmail.com' rel="noreferrer"><i className='fas fa-envelope m-3'></i></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer