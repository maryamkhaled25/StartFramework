import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        
        <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary p-4 fw-bold text-uppercase">
            <div className="container">
                <a className="navbar-brand fs-3" href="/home">Start Framework</a>
                
                <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon " />
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav  ms-auto mb-2 mb-lg-0">

                        <li className="nav-item ms-4">
                            <NavLink className="nav-link" to="/home">Home</NavLink>
                        </li>

                        <li className="nav-item ms-4">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>

                        <li className="nav-item ms-4">
                            <NavLink className="nav-link" to="/portfolio">Portfolio</NavLink>
                        </li>

                        <li className="nav-item ms-4">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>

    )
}
