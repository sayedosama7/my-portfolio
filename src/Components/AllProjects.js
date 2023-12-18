import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import NavBar from '../NavBar'
import ScrollToTop from 'react-scroll-to-top'
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
const AllProjects = () => {

    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <div>
            <NavBar />
            <Container fluid className='Portfolio all-portfolio text-white text-center fw-bold' id='Portfolio'>
                <Row>
                    <h2 className=''>All Projects</h2>
                    <p className='mb-5'>Here you can see some of my projects</p>

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
                            <img className='img-fluid' src="/images/projects/amazon.PNG" alt="projects" />
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

                    <Col className='mb-4 wow fadeInUp' data-wow-delay=".3s" md="3">
                        <div class="projects">
                            <img className='img-fluid' src="images/projects/click2.PNG" alt="projects" />
                            <div class="icons">
                                <p>click here please</p>
                                <a href='https://github.com/sayedosama7/click-here-please' target='_blank' rel="noreferrer"><i className='fab fa-github text-blue m-2'></i></a>
                                <a href='https://click-here-please.vercel.app/' target='_blank' rel="noreferrer"><i className='fas fa-link text-blue m-2'></i></a>
                            </div>
                        </div>
                    </Col>

                    <Col className='mb-4 wow fadeInUp' data-wow-delay=".3s" md="3">
                        <div class="projects">
                            <img className='img-fluid' src="images/projects/honey.PNG" alt="projects" />
                            <div class="icons">
                                <p>honey shop</p>
                                <a href='https://github.com/sayedosama7/honey-react-app' target='_blank' rel="noreferrer"><i className='fab fa-github text-blue m-2'></i></a>
                                <a href='https://honey-react-app.vercel.app/' target='_blank' rel="noreferrer"><i className='fas fa-link text-blue m-2'></i></a>
                            </div>
                        </div>
                    </Col>

                    <Col className='mb-4 wow fadeInUp' data-wow-delay=".3s" md="3">
                        <div class="projects">
                            <img className='img-fluid' src="images/projects/coffee.PNG" alt="projects" />
                            <div class="icons">
                                <p>coffee shop</p>
                                <a href='https://github.com/sayedosama7/coffee-react-app' target='_blank' rel="noreferrer"><i className='fab fa-github text-blue m-2'></i></a>
                                <a href='https://coffee-react-app.vercel.app/' target='_blank' rel="noreferrer"><i className='fas fa-link text-blue m-2'></i></a>
                            </div>
                        </div>
                    </Col>

                    <Col className='mb-4 wow fadeInUp' data-wow-delay=".3s" md="3">
                        <div class="projects">
                            <img className='img-fluid' src="images/projects/friutkha.PNG" alt="projects" />
                            <div class="icons">
                                <p>friutkha shop</p>
                                <a href='https://github.com/sayedosama7/friutkha-react' target='_blank' rel="noreferrer"><i className='fab fa-github text-blue m-2'></i></a>
                                <a href='https://friutkha-react.vercel.app/' target='_blank' rel="noreferrer"><i className='fas fa-link text-blue m-2'></i></a>
                            </div>
                        </div>
                    </Col>

                    <Col className='mb-4 wow fadeInUp' data-wow-delay=".3s" md="3">
                        <div class="projects">
                            <img className='img-fluid' src="images/projects/journal.PNG" alt="projects" />
                            <div class="icons">
                                <p>journal</p>
                                <a href='https://github.com/sayedosama7/the-journal-react-app' target='_blank' rel="noreferrer"><i className='fab fa-github text-blue m-2'></i></a>
                                <a href='https://the-journal-react-app.vercel.app/' target='_blank' rel="noreferrer"><i className='fas fa-link text-blue m-2'></i></a>
                            </div>
                        </div>
                    </Col>

                    <Col className='mb-4 wow fadeInUp' data-wow-delay=".3s" md="3">
                        <div class="projects">
                            <img className='img-fluid' src="images/projects/henna-app.PNG" alt="projects" />
                            <div class="icons">
                                <p>henna app</p>
                                <a href='https://github.com/sayedosama7/team-4-task-1' target='_blank' rel="noreferrer"><i className='fab fa-github text-blue m-2'></i></a>
                                <a href='https://team-4-task-1.vercel.app/' target='_blank' rel="noreferrer"><i className='fas fa-link text-blue m-2'></i></a>
                            </div>
                        </div>
                    </Col>

                    <Col className='mb-4 wow fadeInUp' data-wow-delay=".3s" md="3">
                        <div class="projects">
                            <img className='img-fluid' src="images/projects/phone-app.PNG" alt="projects" />
                            <div class="icons">
                                <p>phone app</p>
                                <a href='https://github.com/sayedosama7/task-lec-21-22' target='_blank' rel="noreferrer"><i className='fab fa-github text-blue m-2'></i></a>
                                <a href='https://task-lec-21-22.vercel.app/' target='_blank' rel="noreferrer"><i className='fas fa-link text-blue m-2'></i></a>
                            </div>
                        </div>
                    </Col>

                    <Col className='mb-4 wow fadeInUp' data-wow-delay=".3s" md="3">
                        <div class="projects">
                            <img className='img-fluid' src="images/projects/validate.PNG" alt="projects" />
                            <div class="icons">
                                <p>form validation with js</p>
                                <a href='https://github.com/sayedosama7/form-validation-with-javascript' target='_blank' rel="noreferrer"><i className='fab fa-github text-blue m-2'></i></a>
                                <a href='https://form-validation-with-javascript-delta.vercel.app/registeration.html' target='_blank' rel="noreferrer"><i className='fas fa-link text-blue m-2'></i></a>
                            </div>
                        </div>
                    </Col>

                    <Col className='mb-4 wow fadeInUp' data-wow-delay=".3s" md="3">
                        <div class="projects">
                            <img className='img-fluid' src="images/projects/ai-images.PNG" alt="projects" />
                            <div class="icons">
                                <p>ai images generator</p>
                                <a href='https://github.com/sayedosama7/ai' target='_blank' rel="noreferrer"><i className='fab fa-github text-blue m-2'></i></a>
                                <a href='https://ai-sigma-five.vercel.app/' target='_blank' rel="noreferrer"><i className='fas fa-link text-blue m-2'></i></a>
                            </div>
                        </div>
                    </Col>

                    <Col className='mb-4 wow fadeInUp' data-wow-delay=".3s" md="3">
                        <div class="projects">
                            <img className='img-fluid' src="images/projects/scroll.PNG" alt="projects" />
                            <div class="icons">
                                <p>scroll to top</p>
                                <a href='https://github.com/sayedosama7/scroll-to-top-with-js' target='_blank' rel="noreferrer"><i className='fab fa-github text-blue m-2'></i></a>
                                <a href='https://scroll-to-top-with-js.vercel.app/' target='_blank' rel="noreferrer"><i className='fas fa-link text-blue m-2'></i></a>
                            </div>
                        </div>
                    </Col>

                    <Col className='mb-4 wow fadeInUp' data-wow-delay=".3s" md="3">
                        <div class="projects">
                            <img className='img-fluid' src="images/projects/portfolio.PNG" alt="projects" />
                            <div class="icons">
                                <p>portfolio</p>
                                <a href='https://github.com/sayedosama7/portfolio' target='_blank' rel="noreferrer"><i className='fab fa-github text-blue m-2'></i></a>
                                <a href='https://portfolio-sayed.vercel.app/' target='_blank' rel="noreferrer"><i className='fas fa-link text-blue m-2'></i></a>
                            </div>
                        </div>
                    </Col>

                    <Col className='mb-4 wow fadeInUp' data-wow-delay=".3s" md="3">
                        <div class="projects">
                            <img className='img-fluid' src="images/projects/clothing.PNG" alt="projects" />
                            <div class="icons">
                                <p>clothing shop</p>
                                <a href='https://github.com/sayedosama7/sixteen-clothing-shop' target='_blank' rel="noreferrer"><i className='fab fa-github text-blue m-2'></i></a>
                                <a href='https://sixteen-clothing-shop.vercel.app/' target='_blank' rel="noreferrer"><i className='fas fa-link text-blue m-2'></i></a>
                            </div>
                        </div>
                    </Col>

                    <Col className='mb-4 wow fadeInUp' data-wow-delay=".3s" md="3">
                        <div class="projects">
                            <img className='img-fluid' src="images/projects/hospital.PNG" alt="projects" />
                            <div class="icons">
                                <p>hospital</p>
                                <a href='https://github.com/sayedosama7/hospital' target='_blank' rel="noreferrer"><i className='fab fa-github text-blue m-2'></i></a>
                                <a href='https://hospital-lake.vercel.app/' target='_blank' rel="noreferrer"><i className='fas fa-link text-blue m-2'></i></a>
                            </div>
                        </div>
                    </Col>

                    <Col className='mb-4 wow fadeInUp' data-wow-delay=".3s" md="3">
                        <div class="projects">
                            <img className='img-fluid' src="images/projects/Browniess.PNG" alt="projects" />
                            <div class="icons">
                                <p>Brownies</p>
                                <a href='https://github.com/sayedosama7/Brownies-full-react' target='_blank' rel="noreferrer"><i className='fab fa-github text-blue m-2'></i></a>
                                <a href='https://brownies-full-react.vercel.app/' target='_blank' rel="noreferrer"><i className='fas fa-link text-blue m-2'></i></a>
                            </div>
                        </div>
                    </Col>

                    <Col className='mb-4 wow fadeInUp' data-wow-delay=".3s" md="3">
                        <div class="projects">
                            <img className='img-fluid' src="images/projects/browniees.PNG" alt="projects" />
                            <div class="icons">
                                <p>Brownies</p>
                                <a href='https://github.com/sayedosama7/brownies-html-css' target='_blank' rel="noreferrer"><i className='fab fa-github text-blue m-2'></i></a>
                                <a href='https://brownies-html-css.vercel.app/' target='_blank' rel="noreferrer"><i className='fas fa-link text-blue m-2'></i></a>
                            </div>
                        </div>
                    </Col>

                    <Col className='mb-4 wow fadeInUp' data-wow-delay=".3s" md="3">
                        <div class="projects">
                            <img className='img-fluid' src="images/projects/restaurants.PNG" alt="projects" />
                            <div class="icons">
                                <p>restaurants</p>
                                <a href='https://github.com/sayedosama7/restaurants' target='_blank' rel="noreferrer"><i className='fab fa-github text-blue m-2'></i></a>
                                <a href='https://restaurants-rho.vercel.app/' target='_blank' rel="noreferrer"><i className='fas fa-link text-blue m-2'></i></a>
                            </div>
                        </div>
                    </Col>

                    <Col className='mb-4 wow fadeInUp' data-wow-delay=".3s" md="3">
                        <div class="projects">
                            <img className='img-fluid' src="images/projects/template.PNG" alt="projects" />
                            <div class="icons">
                                <p>elzero template 3</p>
                                <a href='https://github.com/sayedosama7/elzero-template-3' target='_blank' rel="noreferrer"><i className='fab fa-github text-blue m-2'></i></a>
                                <a href='https://elzero-template-3.vercel.app/' target='_blank' rel="noreferrer"><i className='fas fa-link text-blue m-2'></i></a>
                            </div>
                        </div>
                    </Col>

                    <Col className='mb-4 wow fadeInUp' data-wow-delay=".3s" md="3">
                        <div class="projects">
                            <img className='img-fluid' src="images/projects/coffee_2.PNG" alt="projects" />
                            <div class="icons">
                                <p>coffee</p>
                                <a href='https://github.com/sayedosama7/coffee_2' target='_blank' rel="noreferrer"><i className='fab fa-github text-blue m-2'></i></a>
                                <a href='https://coffee-2.vercel.app/' target='_blank' rel="noreferrer"><i className='fas fa-link text-blue m-2'></i></a>
                            </div>
                        </div>
                    </Col>

                    <Col className='mb-4 wow fadeInUp' data-wow-delay=".3s" md="3">
                        <div class="projects">
                            <img className='img-fluid' src="images/projects/coffee_3.PNG" alt="projects" />
                            <div class="icons">
                                <p>coffee</p>
                                <a href='https://github.com/sayedosama7/coffee' target='_blank' rel="noreferrer"><i className='fab fa-github text-blue m-2'></i></a>
                                <a href='https://coffee-amber.vercel.app/' target='_blank' rel="noreferrer"><i className='fas fa-link text-blue m-2'></i></a>
                            </div>
                        </div>
                    </Col>

                    <Col className='mb-4 wow fadeInUp' data-wow-delay=".3s" md="3">
                        <div class="projects">
                            <img className='img-fluid' src="images/projects/icream.PNG" alt="projects" />
                            <div class="icons">
                                <p>icream</p>
                                <a href='https://github.com/sayedosama7/icream' target='_blank' rel="noreferrer"><i className='fab fa-github text-blue m-2'></i></a>
                                <a href='https://icream.vercel.app/' target='_blank' rel="noreferrer"><i className='fas fa-link text-blue m-2'></i></a>
                            </div>
                        </div>
                    </Col>

                    <Col className='mb-4 wow fadeInUp' data-wow-delay=".3s" md="3">
                        <div class="projects">
                            <img className='img-fluid' src="images/projects/food-hut.PNG" alt="projects" />
                            <div class="icons">
                                <p>food hut</p>
                                <a href='https://github.com/sayedosama7/food-hut' target='_blank' rel="noreferrer"><i className='fab fa-github text-blue m-2'></i></a>
                                <a href='https://food-hut.vercel.app/' target='_blank' rel="noreferrer"><i className='fas fa-link text-blue m-2'></i></a>
                            </div>
                        </div>
                    </Col>

                    <Col className='mb-4 wow fadeInUp' data-wow-delay=".3s" md="3">
                        <div class="projects">
                            <img className='img-fluid' src="images/projects/Nikee.PNG" alt="projects" />
                            <div class="icons">
                                <p>Nike</p>
                                <a href='https://github.com/sayedosama7/Nike-E-commerce' target='_blank' rel="noreferrer"><i className='fab fa-github text-blue m-2'></i></a>
                                <a href='https://nike-e-commerce-two.vercel.app/' target='_blank' rel="noreferrer"><i className='fas fa-link text-blue m-2'></i></a>
                            </div>
                        </div>
                    </Col>

                    <Col className='mb-4 wow fadeInUp' data-wow-delay=".3s" md="3">
                        <div class="projects">
                            <img className='img-fluid' src="images/projects/Drniks.PNG" alt="projects" />
                            <div class="icons">
                                <p>Restaurant Drniks</p>
                                <a href='https://github.com/sayedosama7/Restaurant-and-Drniks' target='_blank' rel="noreferrer"><i className='fab fa-github text-blue m-2'></i></a>
                                <a href='https://restaurant-and-drniks.vercel.app/' target='_blank' rel="noreferrer"><i className='fas fa-link text-blue m-2'></i></a>
                            </div>
                        </div>
                    </Col>

                    <Col className='mb-4 wow fadeInUp' data-wow-delay=".3s" md="3">
                        <div class="projects">
                            <img className='img-fluid' src="images/projects/brownies2.PNG" alt="projects" />
                            <div class="icons">
                                <p>brownies</p>
                                <a href='https://github.com/sayedosama7/brownies2' target='_blank' rel="noreferrer"><i className='fab fa-github text-blue m-2'></i></a>
                                <a href='https://brownies-two.vercel.app/' target='_blank' rel="noreferrer"><i className='fas fa-link text-blue m-2'></i></a>
                            </div>
                        </div>
                    </Col>


                </Row>
            </Container>
            <ScrollToTop smooth color='#7241dc' />
        </div>
    )
}

export default AllProjects