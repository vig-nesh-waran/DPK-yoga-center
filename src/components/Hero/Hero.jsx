import React from 'react';
import './Hero.css';

// Import images
import heropic from '../../assets/img/hero/hero.jpg';

const Hero = () => {

    return (
        <div id='home' className="hero d-flex align-items-center flex-column-reverse position-relative overflow-hidden">
            <div className='hero-bg'>
                <img src={heropic} alt="Hero section background image..." />
            </div>
            <div className="content text-center position-absolute">
                <p className="display-3 fw-bold">Welcome to Dhaksha Yoga & Arts Academy</p>
                <p className="display-6 fst-italic sub-title fw-bold">"Unite your body, mind, and spirit with our personalized yoga and arts programs."</p>
                <a href="#contact" className="btn button fw-bold rounded-5 mt-3">Join Us for a Free One-Week Trial!</a>
            </div>
        </div>
    );
}

export default Hero;
