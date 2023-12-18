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
                                src="/images/my-Logo.png"
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
                                <Link className="nav-link" to="/">Home</Link>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#about">about</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#skills">skills</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#Portfolio">Portfolio</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#contact">contact</a>
                            </li>

                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <a className='text-white animate__heartBeat  animate__animated animate__infinite' href="https://wa.me/+201210304516"><i className='fab fa-whatsapp'></i></a>
                        </form>
                    </div>
                </Container>
            </nav>

        </div>
    )
}

export default NavBar








