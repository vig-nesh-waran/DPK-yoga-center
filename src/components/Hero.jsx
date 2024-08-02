import React from 'react';
import Slider from 'react-slick';
import './Hero.css';

// Import images
import carouselPic1 from '../assets/img/carousel/carousel-pic-1.jpg';
import carouselPic2 from '../assets/img/carousel/carousel-pic-2.jpg';
import carouselPic3 from '../assets/img/carousel/carousel-pic-3.jpg';

// Import slick-carousel CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        pauseOnHover: false,
    };

    return (
        <div className="hero">
            <Slider {...settings} className="slider">
                <div>
                    <img src={carouselPic1} alt="Slide 1" />
                </div>
                <div>
                    <img src={carouselPic2} alt="Slide 2" />
                </div>
                <div>
                    <img src={carouselPic3} alt="Slide 3" />
                </div>
            </Slider>
            <div className="content">
                <p className="display-3 fw-bold title">Welcome to DPK Yoga Centre</p>
                <p className="lead display-6 fst-italic sub-title">Yoga is the journey of the self, through the self, to the self.</p>
                <a href="#contact" className="btn button mt-3 fw-bold">FREE 1-week trial class!</a>
            </div>
        </div>
    );
}

export default Hero;
