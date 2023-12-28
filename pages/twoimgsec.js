import React, { useEffect } from 'react'
import CountUp from 'react-countup'
import Aos from 'aos'
const Twoimgsec = () => {
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <div className='container-fluid'>
            <div className="twoimgmaindiv">
                <div className="container">
                    <div className='row'>
                        <div className="col-12 col-lg-7 ">
                            <div className="twoimgset" data-aos="fade-right" data-aos-duration="1500">
                                <h4>
                                    <img src="/bgi4.jpg" alt="" />
                                </h4>
                                <img src="/bgi8.jpg" alt="" />
                                <div>
                                    <h1><CountUp
                                        start={10}
                                        end={25}
                                        duration={2}
                                        enableScrollSpy
                                    />%</h1>
                                    <h3 className='mt-3'>SALE</h3>
                                </div>
                                <h2 ></h2>
                                <h4>

                                </h4>
                            </div>
                        </div>
                        <div className="col-12 col-lg-5">
                            <div className="twoimgsettext" data-aos="fade-left" data-aos-duration="1500">
                                <h6>BEST DESIGN</h6>
                                <h1>A SMALL EFFICIENT</h1>
                                <h2>FASION</h2>
                                <h3>DESIGNING TEAM</h3>
                                <h5>WELCOME TO HENDON CLOTHING SHOWCASE</h5>
                                <img src="/shortimg.jpg" alt="" width="70%" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Twoimgsec