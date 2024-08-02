import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-custom fixed-top">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <span className='brand'>DPK Yoga Center</span>
                </a>
                <button className="navbar-toggler" type="button" onClick={handleClick} aria-controls="navbarNav" aria-expanded={click} aria-label="Toggle navigation">
                    <span>
                        <FontAwesomeIcon icon={click ? faTimes : faBars} />
                    </span>
                </button>
                <div className={`collapse navbar-collapse ${click ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/" onClick={handleClick}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about" onClick={handleClick}>About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#courses" onClick={handleClick}>Courses</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#instructor" onClick={handleClick}>Instructors</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact" onClick={handleClick}>Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
