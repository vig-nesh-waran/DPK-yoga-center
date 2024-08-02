import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container py-5" id='contact'>
      <h2 className=' fw-bold'>Contact Us</h2>
      <span className='line'></span>
      <div className="container mt-4">
        <div className="row">
          <div className="col-lg-6 mb-4">
            <div className="contact-details">
              <div className="contact-item">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
                <p>Circle, Post, near Sobha Avenue, Kannamangala, Doddabanahalli, Bengaluru, Karnataka 560067</p>
              </div>
              <div className="contact-item">
                <FontAwesomeIcon icon={faPhone} className="contact-icon" />
                <a className='contact' href="callto:9632226708">9632226708</a>
              </div>
              <div className="contact-item">
                <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                <a className='contact' href="mailto:contact@dpkyoga.com">contact@dpkyoga.com</a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 text-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31097.087879031067!2d77.73610401207274!3d13.027011170056896!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae0f8ac5190e89%3A0x64dc0c03650783ea!2sDPK%20YOGA%20CENTRE!5e0!3m2!1sen!2sin!4v1722499059052!5m2!1sen!2sin"
              width="90%"
              height="400"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
