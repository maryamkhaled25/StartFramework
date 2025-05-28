import React from 'react'
import './About.css'
import { FaStar } from 'react-icons/fa';


export default function About() {
    return (
        <div className='aboutDiv d-flex flex-column justify-content-center align-items-center'>

            <div className='text-center text-white'>

                <div className="innerText">
                    <h2 className='fs-1 text-uppercase fw-bold'>About Component</h2>
                </div>

                <div className="seprate my-3 d-flex align-items-center justify-content-center gap-4 align-baseline">
                    <div className="line"></div>
                    <i className='fs-4 '><FaStar /></i>
                    <div className="line"></div>
                </div>

                <div className="container lastText text-center">
                    <div className="row px-5">
                        <div className="col-md-6">
                            Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                        </div>
                        <div className="col-md-6">
                            Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
