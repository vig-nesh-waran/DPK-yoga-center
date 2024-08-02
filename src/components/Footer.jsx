import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faGoogle, faTwitter} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';
import AboutModel from './AboutModel';
import TermsModel from './TermsModel';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-6">
                        <h5>Quick links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" data-bs-toggle="modal" data-bs-target="#aboutModal">About</a></li>
                            <li><a href="#" data-bs-toggle="modal" data-bs-target="#termsModal">Terms of Policy</a></li>
                        </ul>
                    </div>
                    <div className="col-md-6 col-sm-6 text-sm-end">
                        <a className='icons' href="mailto:dpkyogadummymail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
                        <a className='icons' href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                        <a className='icons' href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a className='icons' href="#"><FontAwesomeIcon icon={faGoogle} /></a>
                        <a className='icons' href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                    </div>
                </div>
                <div className="row">
                    <div className="copyright col-12 text-center">
                        <p>&copy; 2024<a href="/" className='brand-span'>DPK Yoga Center</a>. All rights reserved.</p>
                    </div>
                </div>
            </div>
            <AboutModel/>
            <TermsModel/>
        </footer>
    );
};

export default Footer;
