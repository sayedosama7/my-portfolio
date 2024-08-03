import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Container } from 'reactstrap';
import { HashLink as Link } from 'react-router-hash-link';

const NavBar = () => {
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
    const [menu_class, setMenuClass] = useState("menu hidden");
    const [isMenuClicked, setIsMenuClicked] = useState(false);
    const location = useLocation();

    const updateMenu = () => {
        if (!isMenuClicked) {
            setBurgerClass("burger-bar clicked");
            setMenuClass("menu visible");
        } else {
            setBurgerClass("burger-bar unclicked");
            setMenuClass("menu hidden");
        }
        setIsMenuClicked(!isMenuClicked);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <Container>
                <Link className="navbar-brand mt-2 mt-lg-0" to="/">
                    <img
                        src="/images/my-Logo.png"
                        alt="Logo"
                        loading="lazy"
                    />
                </Link>
                <div data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <div className='nav2 '>
                        <div className={menu_class}></div>
                        <div className="burger-menu" onClick={updateMenu}>
                            <div className={burger_class}></div>
                            <div className={burger_class}></div>
                            <div className={burger_class}></div>
                        </div>
                    </div>
                </div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto">
                        <li className="nav-item">
                            <Link smooth to="/" className={`nav-link ${location.hash === '/' ? 'active' : ''}`}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth to="#about" className={`nav-link ${location.hash === '#about' ? 'active' : ''}`}>
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth to="#skills" className={`nav-link ${location.hash === '#skills' ? 'active' : ''}`}>
                                Skills
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth to="#portfolio" className={`nav-link ${location.hash === '#portfolio' ? 'active' : ''}`}>
                                Portfolio
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth to="#contact" className={`nav-link ${location.hash === '#contact' ? 'active' : ''}`}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <a className='text-white animate__heartBeat animate__animated animate__infinite' href="https://wa.me/+201210304516">
                            <i className='fab fa-whatsapp'></i>
                        </a>
                    </form>
                </div>
            </Container>
        </nav>
    );
};

export default NavBar;
