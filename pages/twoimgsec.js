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
                                <div className='twoimgsetdiv'>
                                    <h1 className='twoimgsetdivh1'><CountUp
                                        start={10}
                                        end={25}
                                        duration={2}
                                        enableScrollSpy
                                    />%</h1>
                                    <h3 className='mt-3 twoimgsetdivh3'>SALE</h3>
                                </div>
                                <h2 className='twoimgseth2'></h2>
                                <h4 className='twoimgseth4'></h4>
                            </div>
                        </div>
                        <div className="col-12 col-lg-5">
                            <div className="twoimgsettext" data-aos="fade-left" data-aos-duration="1500">
                                <p className='mb-0 twoimgsettexth6'>BEST DESIGN</p>
                                <p className='mb-0 twoimgsettexth1'>A SMALL EFFICIENT</p>
                                <p className='mb-0 twoimgsettexth2'>FASION</p>
                                <p className='mb-0 twoimgsettexth3'>DESIGNING TEAM</p>
                                <p className='mb-0 twoimgsettexth5'>WELCOME TO HENDON CLOTHING SHOWCASE</p>
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