import React from 'react';
import img1 from '../assets/img/about/about-pic-3.jpg';
import './About.css';
import AboutModel from './AboutModel';

const About = () => {
    return (
        <div className='about' id='about'>
            <div>
                <h2 className=' fw-bold'>DPK Yoga Center</h2>
                <span className='line'></span>
            </div>
            <div className='container mt-3'>
                <div className='row d-flex justify-content-center align-items-center flex-md-column flex-lg-row'>
                    <div className='col-md-6 text-center'>
                        <img src={img1} className='img-fluid rounded' alt="About Us" />
                    </div>
                    <div className='col-md-6'>
                        <p className='head'>DPK Yoga Centre is dedicated to promoting the benefits of yoga for a balanced, healthy, and happy life. Located in a serene environment, we offer classes designed to meet individual needs, enhancing physical and mental well-being.</p>
                        <p className='subhead'>"Join us to experience the transformative power of yoga and become part of our vibrant community."</p>   
                        <center>
                            <a href="#" className='btn button' data-bs-toggle="modal" data-bs-target="#aboutModal">Explore More</a>
                        </center>
                    </div>
                </div>
            </div>
            <AboutModel/>
        </div>
    );
};

export default About;
