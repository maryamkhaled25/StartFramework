import React from 'react'
import { FaStar } from 'react-icons/fa';
import './Contact.css'


export default function Contact() {
    return (
        <>
            <div className="contactDiv">
                <div className="innerText">
                    <h2 className='fs-1 text-uppercase fw-bold'>Contact Section</h2>
                </div>

                <div className="seprate my-3 d-flex align-items-center justify-content-center gap-4 align-baseline">
                    <div className="line bg-warning-subtle"></div>
                    <i className='fs-4 '><FaStar /></i>
                    <div className="line"></div>
                </div>


                <div className="container mt-5">
                    <form className='d-flex flex-column justify-content-center align-items-center'>

                        <div className="form-floating mb-4 w-50">
                            <input type="text" className="form-control" id="nameInput" placeholder="Enter Your Name" />
                            <label htmlFor="nameInput">Name</label>
                        </div>

                        <div className="form-floating mb-4 w-50">
                            <input type="number" className="form-control" id="ageInput" placeholder="Enter Your Age" />
                            <label htmlFor="ageInput">Age</label>
                        </div>

                        <div className="form-floating mb-4 w-50">
                            <input type="email" className="form-control" id="emailInput" placeholder="name@example.com" />
                            <label htmlFor="emailInput">Email address</label>
                        </div>

                        <div className="form-floating mb-4 w-50">
                            <input type="password" className="form-control" id="passwordInput" placeholder="Password" />
                            <label htmlFor="passwordInput">Password</label>
                        </div>
                        <button className='btn btn-success px-5'>Submit</button>

                    </form>
                </div>
            </div>
        </>
    )
}
