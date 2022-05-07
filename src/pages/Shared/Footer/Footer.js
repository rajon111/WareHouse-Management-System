import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <>
        <footer className='mt-2'>
            <div className='container'>
                <div className="row">
                    <div className="col-12 col-lg-10 mx-auto">
                        <div className="row">
                            <div className="col-6 col-lg-3">
                                <h2 className='footer-sce-title'>Company</h2>
                                <ul>
                                    <li>
                                        <a href="#">About Us</a>
                                
                                    </li>
                                    <li>
                                        <a href="#">Contact Us</a>
                                    </li>
                                    <li>
                                        <a href="#">Intellectual Property</a>
                                    </li>
                                    <li>
                                        <a href="#">about</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-6 col-lg-3">
                                <h2>Information</h2>
                                <ul>
                                    <li>
                                        <a href="#">Exchange & Return</a>
                                    </li>
                                    <li>
                                        <a href="#">Size Guide</a>
                                    </li>
                                    <li>
                                        <a href="#">Loyalty Program</a>
                                    </li>
                                    <li>
                                        <a href="#">Display Centers</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-6 col-lg-3">
                                <h2>Legal</h2>
                                <ul>
                                    <li>
                                        <a href="#">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="#">Payment Policy</a>
                                    </li>
                                    <li>
                                        <a href="#" className='text-white'>Shipping Policy</a>
                                    </li>
                                    <li>
                                        <a href="#">Terms & Conditions</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-6 col-lg-3">
                                <h2>Follow Us</h2>
                                <div className="row">
                                    <div className="col-3 mx-auto">
                                        <a href="">
                                         
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <hr />
                <div className="mt-2 mb-0">
                    <p className='text-center w-100'>copyright&copy; {year} . All right and reserved by Sports warehouse .</p>
                </div>

            </div>
        </footer>
        </>
    );
};

export default Footer;