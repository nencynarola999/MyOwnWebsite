import React, { useEffect } from 'react'
import Link from 'next/link'
import Aos from 'aos'

const AFoursec = () => {
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <div className='container-fluid p-0 g-0'>
            <div className="foursecmaindiv">
                <div className="container p-2">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                        <div className="col mt-5 mb-5"  data-aos="zoom-in-up"  data-aos-duration="1500">
                            <div className="setdivvv">
                                <div>
                                    <h3>FASHION</h3>
                                    <Link href="" legacyBehavior><a >GO NOW</a></Link>
                                </div>
                                <img src="/n1.png" alt="" />
                            </div> 
                        </div>
                        <div className="col mt-5 mb-5"   data-aos="zoom-in-up"  data-aos-duration="1500">
                            <div className="setdivvv">
                                <div>
                                    <h3>FASHION</h3>
                                    <Link href="" legacyBehavior><a >GO NOW</a></Link>
                                </div>
                                <img src="/n2.png" alt="" />
                            </div>
                        </div>
                        <div className="col mt-5 mb-5 "   data-aos="zoom-in-up"  data-aos-duration="1500">
                            <div className="setdivvv">
                                <div>
                                    <h3>FASHION</h3>
                                    <Link href="" legacyBehavior><a >GO NOW</a></Link>
                                </div>
                                <img src="/n3.png" alt="" />
                            </div>
                        </div>
                        <div className="col  mt-5 mb-5"   data-aos="zoom-in-up"  data-aos-duration="1500">
                            <div className="setdivvv">
                                <div>
                                    <h3>FASHION</h3>
                                    <Link href="" legacyBehavior><a >GO NOW</a></Link>
                                </div>
                                <img src="/n4.png" alt="" />
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AFoursec