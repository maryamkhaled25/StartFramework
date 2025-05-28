import React from 'react'
import './Footer.css'

import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaGlobe } from 'react-icons/fa';


export default function Footer() {
    return (
        <>
        <div className='footerDiv  pt-3'>
            <div className="upper">
                <div className="container">
                    <div className="row text-center text-white justify-content-between py-5">

                        <div className="col-md-3">
                            <div className="inner">
                                <h3>Location</h3>
                                <p>2215 John Daniel Drive</p>
                                <p>Clark, MO 65243</p>
                            </div>
                        </div>

                        <div className="col-md-3 ">
                            <div className="inner">
                                <h3>AROUND THE WEB</h3>
                                <ul className="links list-unstyled d-flex justify-content-center align-items-center gap-4 ">
                                    <li className='border border-1 rounded-circle align-middle'><FaFacebook /></li>
                                    <li className='border border-1 rounded-circle align-middle'><FaLinkedinIn /></li>
                                    <li className='border border-1 rounded-circle align-middle'><FaTwitter /></li>
                                    <li className='border border-1 rounded-circle align-middle'><FaGlobe /></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="inner">
                                <h3>About Freelancer</h3>
                                <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="lower text-center text-white">
                <p>Copyright © Your Website 2021</p>
            </div>

        </div>
        </>
    )
}
