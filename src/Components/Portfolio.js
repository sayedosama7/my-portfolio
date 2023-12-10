import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'

const Portfolio = () => {
  return (
    <div>
      <Container fluid className='Portfolio text-white text-center fw-bold' id='Portfolio'>
        <Row>
          <h2 className=' wow fadeInDown'>my Portfolio</h2>
          <p className='mb-5 wow fadeInDown'>Here you can see some of my projects</p>

          <Col className='mb-4 wow fadeInUp' data-wow-delay=".1s" md="3">
            <div class="projects">
              <img className='img-fluid' src="images/projects/nike.PNG" alt="projects" />
              <div class="icons">
                <p>nike e-commerce</p>
                <a href='https://github.com/sayedosama7/nike' target='_blank' rel="noreferrer"><i className='fab fa-github text-blue m-2'></i></a>
                <a href='https://nike-iota-nine.vercel.app/' target='_blank' rel="noreferrer"><i className='fas fa-link text-blue m-2'></i></a>
              </div>
            </div>
          </Col>

          <Col className='mb-4 wow fadeInUp' data-wow-delay=".1s" md="3">
            <div class="projects">
              <img className='img-fluid' src="images/projects/amazon.PNG" alt="projects" />
              <div class="icons">
                <p>amazon</p>
                <a href='https://github.com/sayedosama7/amazon' target='_blank' rel="noreferrer"><i className='fab fa-github text-blue m-2'></i></a>
                <a href='https://amazon-delta-sable.vercel.app/' target='_blank' rel="noreferrer"><i className='fas fa-link text-blue m-2'></i></a>
              </div>
            </div>
          </Col>

          <Col className='mb-4 wow fadeInUp' data-wow-delay=".1s" md="3">
            <div class="projects">
              <img className='img-fluid' src="/images/projects/brownies.PNG" alt="projects" />
              <div class="icons">
                <p>brownies dessert shop</p>
                <a href='https://github.com/sayedosama7/brownies-react' target='_blank' rel="noreferrer"><i className='fab fa-github text-blue m-2'></i></a>
                <a href='https://brownies-react.vercel.app/' target='_blank' rel="noreferrer"><i className='fas fa-link text-blue m-2'></i></a>
              </div>
            </div>
          </Col>

          <Col className='mb-4 wow fadeInUp' data-wow-delay=".1s" md="3">
            <div class="projects">
              <img className='img-fluid' src="images/projects/retaurant.PNG" alt="projects" />
              <div class="icons">
                <p>retaurant shop</p>
                <a href='https://github.com/sayedosama7/restaurant-react-app' target='_blank' rel="noreferrer"><i className='fab fa-github text-blue m-2'></i></a>
                <a href='https://restaurant-react-app-five.vercel.app/' target='_blank' rel="noreferrer"><i className='fas fa-link text-blue m-2'></i></a>
              </div>
            </div>
          </Col>

          <Col className='mb-4 wow fadeInUp' data-wow-delay=".5s" md="3">
            <div class="projects">
              <img className='img-fluid' src="images/projects/honey.PNG" alt="projects" />
              <div class="icons">
                <p>honey shop</p>
                <a href='https://github.com/sayedosama7/honey-react-app' target='_blank' rel="noreferrer"><i className='fab fa-github text-blue m-2'></i></a>
                <a href='https://honey-react-app.vercel.app/' target='_blank' rel="noreferrer"><i className='fas fa-link text-blue m-2'></i></a>
              </div>
            </div>
          </Col>

          <Col className='mb-4 wow fadeInUp' data-wow-delay=".5s" md="3">
            <div class="projects">
              <img className='img-fluid' src="images/projects/coffee.PNG" alt="projects" />
              <div class="icons">
                <p>coffee shop</p>
                <a href='https://github.com/sayedosama7/coffee-react-app' target='_blank' rel="noreferrer"><i className='fab fa-github text-blue m-2'></i></a>
                <a href='https://coffee-react-app.vercel.app/' target='_blank' rel="noreferrer"><i className='fas fa-link text-blue m-2'></i></a>
              </div>
            </div>
          </Col>

          <Col className='mb-4 wow fadeInUp' data-wow-delay=".5s" md="3">
            <div class="projects">
              <img className='img-fluid' src="images/projects/friutkha.PNG" alt="projects" />
              <div class="icons">
                <p>friutkha shop</p>
                <a href='https://github.com/sayedosama7/friutkha-react' target='_blank' rel="noreferrer"><i className='fab fa-github text-blue m-2'></i></a>
                <a href='https://friutkha-react.vercel.app/' target='_blank' rel="noreferrer"><i className='fas fa-link text-blue m-2'></i></a>
              </div>
            </div>
          </Col>

          <Col className='mb-4 wow fadeInUp' data-wow-delay=".5s" md="3">
            <div class="projects">
              <img className='img-fluid' src="images/projects/journal.PNG" alt="projects" />
              <div class="icons">
                <p>journal</p>
                <a href='https://github.com/sayedosama7/the-journal-react-app' target='_blank' rel="noreferrer"><i className='fab fa-github text-blue m-2'></i></a>
                <a href='https://the-journal-react-app.vercel.app/' target='_blank' rel="noreferrer"><i className='fas fa-link text-blue m-2'></i></a>
              </div>
            </div>
          </Col>

          <Link className=' wow fadeInUp' data-wow-delay=".6s" to="/allprojects"><button type='button' className='btn btn-primary'>all projects<i className='fas fa-arrow-right ml-2 animate__animated animate__flash animate__infinite animate__slow'></i></button></Link>


        </Row>
      </Container>
    </div>
  )
}

export default Portfolio