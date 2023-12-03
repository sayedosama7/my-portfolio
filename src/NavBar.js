/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'reactstrap'

const NavBar = () => {
    return (
        <div>


            <nav className="navbar navbar-expand-lg navbar-dark">
                <Container>
                    <a className="navbar-brand" to="#">
                        <Link classNameName="navbar-brand mt-2 mt-lg-0" to="/">
                            <img
                                src="images/my-photo.jpeg"
                                alt="Logo"
                                loading="lazy"
                            />
                        </Link></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">
                            <i className='fas fa-bars text-light'></i>
                        </span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="#">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">about</Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/Portfolio" className="nav-link">Portfolio</Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/resume" className="nav-link">my resume</Link>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <Link to="/contact"><button className="btn btn-outline-primary my-2 my-sm-0 text-light fw-bold btn-lg" type="button">Contact</button></Link>
                        </form>
                    </div>
                </Container>
            </nav>

        </div>
    )
}

export default NavBar








