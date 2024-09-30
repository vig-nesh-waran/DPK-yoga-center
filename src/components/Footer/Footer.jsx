import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faGoogle, faTwitter} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';
import AboutModel from '../Model/AboutModel';
import TermsModel from '../Model/TermsModel';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-6">
                        <h5 className='fs-5 fw-bold'>Quick links</h5>
                        <ul>
                            {/* <li><a href="#" className='fs-5' data-bs-toggle="modal" data-bs-target="#aboutModal">About</a></li> */}
                            <li><a href="#" className='fs-6' data-bs-toggle="modal" data-bs-target="#termsModal">Terms of Policy</a></li>
                        </ul>
                    </div>
                    <div className="col-md-6 col-sm-6 d-flex gap-2 justify-content-end">
                        <a className='icons' href="mailto:dpkyogadummymail.com"><FontAwesomeIcon icon={faEnvelope} className=' fs-4'/></a>
                        <a className='icons' href="#"><FontAwesomeIcon icon={faFacebook} className=' fs-4'/></a>
                        <a className='icons' href="#"><FontAwesomeIcon icon={faInstagram} className=' fs-4'/></a>
                        <a className='icons' href="#"><FontAwesomeIcon icon={faGoogle} className=' fs-4'/></a>
                        <a className='icons' href="#"><FontAwesomeIcon icon={faTwitter} className=' fs-4'/></a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 text-center">
                        <p>&copy; 2024 <span className='brand-span'>DYAA</span>. All rights reserved.</p>
                    </div>
                </div>
            </div>
            <AboutModel/>
            <TermsModel/>
        </footer>
    );
};

export default Footer;
