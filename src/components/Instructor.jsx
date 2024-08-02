import React from 'react';
import img1 from '../assets/img/about/about-pic-1.jpg';
import './Instructor.css';
import AboutModel from './AboutModel';

const Instructor = () => {
  return (
    <div className='instructor' id='instructor'>
        <div>
            <h2 className=' fw-bold'>Our Instructor</h2>
            <span className='line'></span>
        </div>
        <div className='container mt-3'>
            <div className='row d-flex justify-content-center align-items-center flex-md-column flex-lg-row'>
                <div className='col-md-6 text-center'>
                    <img src={img1} className='inst-img mb-3 mx-5' alt="About Us" />
                </div>
                <div className='col-md-6'>
                    <p className=' fw-bold'>DHAKSHAYANI K, <span className=' text-muted'>YOGA INSTRUCTOR</span></p>
                    <p className='head'>Meet Dhakshayani K, our passionate yoga instructor with 9 years of experience. Trained at RV Yoga Kendra in Bangalore, Dhakshayani is dedicated to guiding you through yoga with a focus on breath awareness, unlocking deeper calmness and self-discovery.</p>
                    <p className='subhead'>"Join her at DPK Yoga Centre to transform your wellness journey and experience the true essence of yoga."</p>   
                    <a href="#" className='btn button' data-bs-toggle="modal" data-bs-target="#aboutModal">Explore More</a>
                </div>
            </div>
        </div>
        <AboutModel/>
    </div>
  )
}

export default Instructor