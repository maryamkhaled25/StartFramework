import React, { useState } from 'react'
import './Portfolio.css'
import { FaStar } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';
import poert1 from '../../assets/images/poert1.png';
import port2 from '../../assets/images/port2.png';
import port3 from '../../assets/images/port3.png';


export default function Portfolio() {

    let [isOpened, setIsOpened] = useState(false)
    let [selectImg, setSelectImg] = useState(null)

    function openImg(imgSrc) {
        setSelectImg(imgSrc)
        setIsOpened(true)
    }

    function closeImg() {
        setSelectImg(null)
        setIsOpened(false)
    }

    return (
        <>
            <div className="portfolioDiv">
                <div className="innerText">
                    <h2 className='fs-1 text-uppercase fw-bold'>Portfolio Component</h2>
                </div>

                <div className="seprate my-3 d-flex align-items-center justify-content-center gap-4 align-baseline">
                    <div className="line"></div>
                    <i className='fs-4 '><FaStar /></i>
                    <div className="line"></div>
                </div>

                <div className="container">
                    <div className="row g-5">

                        <div className="col-md-4">
                            <div className="inner">
                                <div className="imgCont rounded-3 overflow-hidden">
                                    <img className='w-100 rounded-3' src={poert1} alt="poert1-img" />
                                    <div className="layer d-flex justify-content-center align-items-center" onClick={() => openImg(poert1)}
>
                                        <FaPlus className='text-white fs-1 fw-bolder' />
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="inner">
                                <div className="imgCont rounded-3 overflow-hidden">
                                    <img className='w-100 rounded-3' src={port2} alt="port2-img" />
                                    <div className="layer d-flex justify-content-center align-items-center" onClick={() => openImg(port2)}
>
                                        <FaPlus className='text-white fs-1 fw-bolder' />
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="inner">
                                <div className="imgCont rounded-3 overflow-hidden">
                                    <img className='w-100 rounded-3' src={port3} alt="port3-img" />
                                    <div className="layer d-flex justify-content-center align-items-center"onClick={() => openImg(port3)}
>
                                        <FaPlus className='text-white fs-1 fw-bolder' />
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="inner">
                                <div className="imgCont rounded-3 overflow-hidden">
                                    <img className='w-100 rounded-3' src={poert1} alt="poert1-img" />
                                    <div className="layer d-flex justify-content-center align-items-center" onClick={() => openImg(poert1)}
>
                                        <FaPlus className='text-white fs-1 fw-bolder' />
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="inner">
                                <div className="imgCont rounded-3 overflow-hidden">
                                    <img className='w-100 rounded-3' src={port2} alt="port2-img" />
                                    <div className="layer d-flex justify-content-center align-items-center" onClick={() => openImg(port2)}
>
                                        <FaPlus className='text-white fs-1 fw-bolder' />
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="inner">
                                <div className="imgCont rounded-3 overflow-hidden">
                                    <img className='w-100 rounded-3' src={port3} alt="port3-img" />
                                    <div className="layer d-flex justify-content-center align-items-center" onClick={() => openImg(port3)}
>
                                        <FaPlus className='text-white fs-1 fw-bolder' />
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                {isOpened && (
                    <div className="imgLayer d-flex justify-content-center align-items-center z-3" onClick={closeImg}>
                        <div className="image">
                            <img src={selectImg} alt="selected" />
                        </div>
                    </div>

                )}
            </div>

        </>
    )
}
