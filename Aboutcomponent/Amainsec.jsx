import React, { useEffect } from 'react'
import Aos from 'aos'
import { FaPlus } from 'react-icons/fa';

const Amainsec = () => {
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <div>
            <div className="container-fluid g-0 mb-5">
                <div className="aboutblackbgimg">
                    <div className="container">
                        <div className="blackmain">
                            <h1>MEET THE  <span>TEAM</span></h1>
                            <h6>OUR TEAM MEMBERS</h6>
                        </div>
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
                            <div className="col h-100 p-3 mt-2" data-aos="zoom-in-down" data-aos-duration="1500">
                                <div className="blackthreeimg">
                                    <div>
                                        <img src="/member1.png" alt="" />
                                        <h2 className='m-0'></h2>
                                        <a className='iconhover'><FaPlus /></a>
                                    </div>
                                    <div className="px-5 py-3">
                                        <h3>IVET HOUZE</h3>
                                        <h6>ARCHITECT ASSISTANT</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col h-100  p-3 mt-2 " data-aos="zoom-in-down" data-aos-duration="1500">
                                <div className="blackthreeimg">
                                    <div>
                                        <img src="/member2.png" alt="" width="100%" />
                                        <h2 className='m-0'></h2>
                                        <a className='iconhover'><FaPlus /></a>
                                    </div>
                                    <div className="px-5 py-3">
                                        <h3>JONEY VINO</h3>
                                        <h6>ARCHITECT ASSISTANT</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col h-100 p-3 mt-2" data-aos="zoom-in-down" data-aos-duration="1500">
                                <div className="blackthreeimg">
                                    <div>
                                        <img src="/member3.png" alt="" width="100%" />
                                        <h2 className='m-0'></h2>
                                        <a className='iconhover'><FaPlus /></a>
                                    </div>
                                    <div className="px-5 py-3">
                                        <h3>MARIA BILL</h3>
                                        <h6>ARCHITECT ASSISTANT</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Amainsec