import React, { useEffect } from 'react'
import CountUp from 'react-countup'
import Aos from 'aos'
const NumberCountingsec = () => {
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <div className='container-fluid mt-5 mb-5 p-0 p-md-5 g-0 bg-black'>
            <div className="container  p-0">
                <div className="numbermain">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-2">
                        <div className="col">
                            <div className="posi1">
                                <div className="py-3 d-flex" data-aos="zoom-in"  data-aos-duration="1500">
                                    <h1 className="numberdiv">450 <CountUp
                                        start={0}
                                        end={450}
                                        duration={2}
                                        enableScrollSpy
                                        className='text-light'
                                    /></h1>
                                    <div className="posi2">
                                        <h4>LADIES AREAS</h4>
                                        <h6>SALE</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="posi1">
                                <div className="py-3 d-flex ms-2"  data-aos="zoom-in"  data-aos-duration="1500">
                                    <h1 className="numberdiv1">97 <CountUp
                                        start={0}
                                        end={97}
                                        duration={2}
                                        enableScrollSpy
                                        className='text-light' />
                                    </h1>
                                    <div className="posi3">
                                        <h4>HAPPY</h4>
                                        <h6>CLIENTS</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="posi1">
                                <div className="py-3 d-flex ms-2"  data-aos="zoom-in"  data-aos-duration="1500">
                                    <h1 className="numberdiv1">80 <CountUp
                                        start={0}
                                        end={80}
                                        duration={2}
                                        enableScrollSpy
                                        className='text-light'
                                    /></h1>
                                    <div className="posi3">
                                        <h4>COMPLETED</h4>
                                        <h6>PROJECTS</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="posi1">
                                <div className="py-3 d-flex ms-2"  data-aos="zoom-in"  data-aos-duration="1500">
                                    <h1 className="numberdiv1">40 <CountUp
                                        start={0}
                                        end={40}
                                        duration={2}
                                        enableScrollSpy
                                        className='text-light'
                                    /></h1>
                                    <div className="posi3">
                                        <h4>STAFF</h4>
                                        <h6>MEMBERS</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default NumberCountingsec