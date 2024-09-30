import React from "react";
import Slider from "react-slick";
import "./About.css";
import AboutModel from "../Model/AboutModel";

//About image
import aboutPic1 from '../../assets/img/about/about-pic-6.jpg'
import aboutPic2 from '../../assets/img/about/about-pic-7.jpg'


// Import images
import carouselPic1 from "../../assets/img/carousel/carousel-pic-1.jpg";
import carouselPic2 from "../../assets/img/carousel/carousel-pic-2.jpg";
import carouselPic3 from "../../assets/img/carousel/carousel-pic-3.jpg";
import carouselPic4 from "../../assets/img/carousel/carousel-pic-4.jpg";
import carouselPic5 from "../../assets/img/carousel/carousel-pic-5.jpg";
import carouselPic6 from "../../assets/img/carousel/carousel-pic-6.jpg";

// Import slick-carousel CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const About = () => {
  const settings = {
    dots: false,
    arrows: false,
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
    <div className="about" id="about">
      <div className=" text-center">
        <h2 className="fw-bold fs-2">Dhaksha Yoga and Arts Academy (DYAA)</h2>
        <span className="line"></span>
      </div>
      <div className="mt-5">
        <div className="row">
          <div className="col-md-12 col-lg-12 text-center">
            <p className="head mt-5">
              At Dhaksha Yoga and Arts Academy (DYAA), we are passionate about
              empowering individuals through the ancient practice of yoga and
              diverse art forms. Founded with the mission of promoting holistic
              health and wellness, DYAA provides a serene, supportive
              environment where individuals of all levels can find balance,
              health, and happiness.
            </p>
            <p className="head mt-5">
              Our center is led by Dhakshayani K, an experienced yoga instructor
              with over 10+ years of teaching experience. Certified through the
              RV Yoga Kendra in Bangalore, Dhakshayani integrates a unique
              approach to yoga that focuses on breathwork, mindfulness, and
              individual needs. Each class is designed to help students deepen
              their practice, enhance their physical health, and cultivate
              mental calmness.
            </p>
          </div>
        </div>

        <div className="mt-3 row d-flex justify-content-center align-items-center">
          <div className=" row d-flex justify-content-center align-items-center">
            <div className=" col-md-12 col-lg-6 mt-1">
              <Slider {...settings} className="slider rounded-3">
                <div>
                  <img src={carouselPic1} alt="DYAA" className="rounded-3"/>
                </div>
                <div>
                  <img src={carouselPic2} alt="DYAA" className="rounded-3"/>
                </div>
                <div>
                  <img src={carouselPic3} alt="DYAA" className="rounded-3"/>
                </div>
                <div>
                  <img src={carouselPic4} alt="DYAA" className="rounded-3"/>
                </div>
                <div>
                  <img src={carouselPic5} alt="DYAA" className="rounded-3"/>
                </div>
                <div>
                  <img src={carouselPic6} alt="DYAA" className="rounded-3"/>
                </div>
              </Slider>
            </div>
            <div className="col-md-12 ms-1 col-lg-4 d-flex justify-content-around flex-column rounded-3">
              <div className="about-img col-lg-3 m-1 rounded-3">
                <img src={aboutPic1} alt="DYAA" className="rounded-3"/>
              </div>
              <div className="about-img col-md-3 m-1 col-lg-3 rounded-3">
                <img src={aboutPic2} alt="DYAA" className="rounded-3"/>
              </div>
            </div>
          </div>
          <div className="text-center">
            <p className="head mt-5">
              At DYAA, we believe in the transformative power of yoga and the
              arts. By joining our vibrant community, you'll not only improve
              your physical fitness but also discover inner peace, creativity,
              and personal growth. Whether you're new to yoga or a seasoned
              practitioner, there's something for everyone at DYAA.
            </p>
            <p className="subhead m-1">
              "Join us and embark on a journey towards a more balanced, healthy, and fulfilling life."
            </p>
            <a href="#contact" className="button btn about-btn mt-4 mx-md-5">
                Connect with us to start your journey!
            </a>
          </div>
        </div>
      </div>
      <AboutModel />
    </div>
  );
};

export default About;
