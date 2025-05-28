import React from 'react'
import './Home.css'
import avatarImg from '../../assets/images/avataaars.svg';
import { FaStar } from 'react-icons/fa';

export default function Home() {
    return (
        <div className="homeDiv text-white d-flex align-items-center flex-column">
            <div className="container">
                <div className="row flex-column text-center justify-content-center align-items-center g-4">


                    <div className="w-100">
                        <div className="inner">
                            <img src={avatarImg} alt="avatar-img" />
                        </div>
                    </div>


                    <div className="w-100">
                        <div className="inner">
                            <div className="innerText">
                                <h2 className='text-uppercase fw-bold'>Start Framework</h2>
                            </div>
                            <div className="seprate my-3 d-flex align-items-center justify-content-center gap-4 align-baseline">
                                <div className="line"></div>
                                <i className='fs-4 '><FaStar /></i>
                                <div className="line"></div>
                            </div>
                            <div className="lastText">
                                Graphic Artist - Web Designer - Illustrator
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
