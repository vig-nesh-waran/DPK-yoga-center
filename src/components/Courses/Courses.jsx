import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrayingHands, faGuitar, faRunning, faHandFist, faChalkboardTeacher, faSchool, faSearch } from '@fortawesome/free-solid-svg-icons'; // Updated icons
import "./Courses.css";
const Courses = () => {
  const courses = [
    { icon: faPrayingHands, title: 'Yoga', description: 'Tailored classes for all levels focusing on breath, mindfulness, and relaxation.' },
    { icon: faGuitar, title: 'Music (Vocal & Instrumental)', description: 'Learn various musical instruments and vocal techniques for all ages.' },
    { icon: faRunning, title: 'Dance (All Forms)', description: 'Explore classical, contemporary, and freestyle dance styles.' }, // Changed icon to faMusic
    { icon: faHandFist, title: 'Karate', description: 'Martial arts training focusing on self-defense and discipline.' },
    { icon: faChalkboardTeacher, title: 'Tuition', description: 'Academic support in school subjects to help students excel.' },
    { icon: faSchool, title: 'Preschool (Coming Soon)', description: 'Nurturing environment for early childhood education.' },
    { icon: faSearch, title: 'Explore More', description: 'Join us to discover a range of activities for holistic development.' }
];
    
  return (
    <div className="courses" id="courses">
      <div className="container">
        <h2 className="fw-bold fs-2 text-center">Our Offerings</h2>
        <span className="line"></span>
        <h4 className=" text-center fs-6 pb-3 mb-4">
        Dhaksha Yoga & Arts Academy offers a variety of programs designed to enhance your physical, emotional, and creative well-being.
        </h4>

        <div className="row">
          {courses.map((course, index) => (
            <div className="col-lg-4 col-md-6 mb-4" key={index}>
              <div className="card course-card">
                <div className="card-body">
                  <FontAwesomeIcon
                    icon={course.icon}
                    size="2x"
                    className="mb-3 card-icon"
                  />
                  <h5 className="card-title">{course.title}</h5>
                  <p className="card-text">{course.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="schedule">
                    <h5 className=' fw-bolder'>Your Time With Us</h5>
                    <span className='line'></span>
                    <h5>🗓️ Days: Monday to Friday</h5>
                    <ul>
                        <li>Morning Sessions timings:</li>
                        <li>5.30 to 6.30am</li>
                        <li>7.45 to 8:45am</li>
                        <li>9.00 to 10.00am</li>
                    </ul>
                </div> */}
      </div>
    </div>
  );
};

export default Courses;
