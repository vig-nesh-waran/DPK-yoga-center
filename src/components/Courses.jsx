import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChild, faFemale, faHeartbeat, faSun, faLeaf, faRunning } from '@fortawesome/free-solid-svg-icons';
import './Courses.css';
const Courses = () => {
    const courses = [
        { icon: faChild, title: 'Meditation', description: 'Improve mindfulness and reduce stress.' },
        { icon: faFemale, title: 'Pregnancy Yoga', description: 'Safe and supportive yoga for expectant mothers.' },
        { icon: faHeartbeat, title: 'Heart Health Yoga', description: 'Promotes cardiovascular health and wellness.' },
        { icon: faSun, title: 'Sun Salutation', description: 'A series of poses that energize and strengthen the body.' },
        { icon: faLeaf, title: 'Nature Yoga', description: 'Connect with nature while practicing yoga.' },
        { icon: faRunning, title: 'Fitness Yoga', description: 'Boost your fitness and flexibility.' },
        { icon: faLeaf, title: 'More than 20+', description: 'Explore many more yoga styles at our studio.' }
    ];

    return (
        <div className="courses" id="courses">
            <div className="container">
                <h2 className='fw-bold'>Our Courses</h2>
                <span className="line"></span>
                <h4>We offer more than 20+ types of courses in our studio.</h4>
                <div className="row">
                    {courses.map((course, index) => (
                        <div className="col-lg-4 col-md-6 mb-4" key={index}>
                            <div className="card course-card">
                                <div className="card-body">
                                    <FontAwesomeIcon icon={course.icon} size="2x" className="mb-3" />
                                    <h5 className="card-title">{course.title}</h5>
                                    <p className="card-text">{course.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="schedule">
                    <h5 className=' fw-bolder'>Your Time With Us</h5>
                    <span className='line'></span>
                    <h5>🗓️ Days: Monday to Friday</h5>
                    <ul>
                        <li>Morning Sessions timings:</li>
                        <li>5.30 to 6.30am</li>
                        <li>7.45 to 8:45am</li>
                        <li>9.00 to 10.00am</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Courses;
