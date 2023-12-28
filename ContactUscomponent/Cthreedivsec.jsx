import React, { useEffect } from 'react'
import Link from 'next/link'
import Aos from 'aos'

const Cthreedivsec = () => {
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <div className='container-fluid mt-5'>
            <div className="container">
                <div className="Cthreemaindiv">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
                        <div className="col"  data-aos="zoom-out"  data-aos-duration="1500">
                            <div className="Cthreediv1">
                                <img src="/4-1.webp" alt="" width="100px" style={{ paddingBottom: "40px" }} />
                                <h6>20 Broklyn Street, New Town</h6>
                                <h6>New York, United States</h6><br />
                               <Link href=""><h5>Learn more</h5></Link>
                                <div className="Cthreediv2">
                                </div>
                                <div className="Cthreediv3">
                                </div>
                            </div>
                        </div>
                        <div className="col" data-aos="zoom-out"  data-aos-duration="1500">
                            <div className="Cthreediv1">
                                <img src="/4-2.webp" alt="" width="100px" style={{ paddingBottom: "40px" }} />
                                <h6>20 Broklyn Street, New Town</h6>
                                <h6>New York, United States</h6><br />
                               <Link href=""><h5>Learn more</h5></Link>
                                <div className="Cthreediv2">
                                </div>
                                <div className="Cthreediv3">
                                </div>
                            </div>
                        </div>
                        <div className="col" data-aos="zoom-out"  data-aos-duration="1500">
                            <div className="Cthreediv1">
                                <img src="/4-4.webp" alt="" width="100px" style={{ paddingBottom: "40px" }} />
                                <h6>20 Broklyn Street, New Town</h6>
                                <h6>New York, United States</h6><br />
                               <Link href=""><h5>Learn more</h5></Link>
                                <div className="Cthreediv2">
                                </div>
                                <div className="Cthreediv3">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cthreedivsec