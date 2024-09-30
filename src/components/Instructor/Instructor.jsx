import React from 'react';
import img1 from '../../assets/img/about/about-pic-1.jpg';
import './Instructor.css';
import AboutModel from '../Model/AboutModel';

const Instructor = () => {

    const instructors = [
        { img: img1, name: 'DHAKSHAYANI K', description: 'Yoga instructor with over 10+ years of experience in holistic wellness and mindfulness practices.' },
    ];

    return (
        <div className='instructor text-center' id='instructor'>
            <div>
                <h2 className='fw-bold fs-2 text-center'>Meet Our Instructor</h2>
                <span className='line'></span>
            </div>

            <div className='row d-flex justify-content-center align-items-center'>
                {instructors.map((instructor, index) => (
                    <div className="col-lg-5 col-md-12 mb-4 text-center" key={index}>
                        <div className="card border-0">
                            <div className="card-body">
                                <img src={instructor.img} alt="" className='inst-img rounded-3'/>
                                <h5 className="card-title fw-bold m-3 fs-5">{instructor.name}</h5>
                                <p className="card-text fw-semibold fw-light">{instructor.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
                {/* {instructors.map((instructor, index) => ( */}
                <div className='col-lg-6 col-md-12 text-center'>
                    {/* <h5 className="card-title fw-bold m-3 fs-5">{instructor.name}</h5> */}
                    {/* <p className="card-text fw-semibold fw-light">{instructor.description}</p> */}
                    <p className='head'>Meet <strong>Dhakshayani K</strong>, our lead yoga instructor with over 10+ years of experience in guiding students towards a harmonious balance of body, mind, and soul. With extensive training from <strong>RV Yoga Kendra, Bangalore</strong>, Dhakshayani specializes in <strong>Hatha Yoga, Meditation</strong>, and other holistic wellness practices.</p>
                    <p className='subhead'>"Join Dhakshayani at DYAA to embark on a transformative wellness journey, where you'll connect deeply with yourself through mindful yoga and meditation."</p>   
                </div>
                {/* ))} */}
            </div>
            <AboutModel/>
        </div>
    );
};

export default Instructor;
