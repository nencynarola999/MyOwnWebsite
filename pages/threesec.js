import React, { useEffect } from 'react'
import {  FaCamera } from 'react-icons/fa';
import { TbCameraSelfie } from 'react-icons/tb';
import { MdVideoCameraFront } from 'react-icons/md';
import Aos from 'aos'

const Threesec = () => {
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <div className='container-fluid g-0'>
            <div className="threeimg">
                <div className="container px-4">
                    <div className="textwritten" >
                        <h1>FEATURED PRODUCTS</h1>
                        <h6> ipsum, dolor sit amet consectetur adipisicing elit Libero accusantium cuipsum dolor maiores ex</h6>
                    </div>

                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
                        <div className="col m-0 mb-4 mb-lg-0 ">
                            <div className="shadowsetting" >
                                <div className="check" width="100%" data-aos="zoom-in" data-aos-duration="1500">
                                    <div>
                                        <img src="/3-1.jpeg" alt="" className="imageset" />
                                    </div>
                                    <span >
                                        <a className='shadow'><FaCamera /></a>
                                        <h5>NEW DESIGN</h5>
                                        <h4>SEND HER YOUR LOVE</h4>
                                        <h6>GET IT NOW</h6>
                                    </span>
                                </div>

                            </div>
                        </div>
                        <div className="col m-0 mb-4 mb-lg-0">
                            <div className="bg-white shadow-sm h-100" width="100%" data-aos="zoom-in" data-aos-duration="1500">
                                <div className="check" width="100%">
                                    <div >
                                        <img src="/3-3.jpg" alt="" className="imageset" />
                                    </div>
                                    <span >
                                        <a className='shadow'><TbCameraSelfie /></a>
                                        <h5>NEW DESIGN</h5>
                                        <h4>SEND HER YOUR LOVE</h4>
                                        <h6>GET IT NOW</h6>
                                    </span>
                                </div>

                            </div>
                        </div>
                        <div className="col m-0 mb-4 mb-lg-0" >
                            <div className="bg-white shadow-sm h-100" width="100%" data-aos="zoom-in" data-aos-duration="1500">
                                <div className="check" width="100%" >
                                    <div >
                                        <img src="/3-2.jpg" alt="" className="imageset" />
                                    </div>
                                    <span >
                                        <a className='shadow'><MdVideoCameraFront /> </a>
                                        <h5>NEW DESIGN</h5>
                                        <h4>SEND HER YOUR LOVE</h4>
                                        <h6>GET IT NOW</h6>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Threesec