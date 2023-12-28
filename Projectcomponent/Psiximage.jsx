import React, { useEffect } from 'react'
import Link from 'next/link'

import Aos from 'aos'
const Psiximage = () => {
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <div className='container-fluid mt-5 mb-5'>
            <div className="container">
                <div className="sixmaindiv">
                    <h1>CHOOSE AN <span>DESIGN</span></h1>
                    <h6>AT VERO EOS ET ACCUSAMUS ET IUSTO ODIO</h6>
                </div>
                <div className=''>
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
                        <div className="col" data-aos="flip-right"  data-aos-duration="1500">
                            <div className="threediv">
                                <div className="subthreediv">
                                    <img src="/A-4.webp" alt="" width="100%" height="100%" />
                                </div>
                                <div className="sssubthreediv">
                                    <img src="/shortimg.jpg" alt="" width="30%" />
                                    <br /><br />
                                    <Link href={'/Architecture/AllArchitecture'} legacyBehavior className='p-0' ><a><h1>FASHION</h1></a></Link>
                                    <h6>FROM<sub className='fs-6'>120</sub> M2</h6>
                                    <h5>Aenean vehicula non mauris maximus elementum. Nulla facilisi.</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col" data-aos="flip-left"  data-aos-duration="1500">
                            <div className="threediv">
                                <div className="subthreedivmid">
                                    <img src="/shortimg3.jpg" alt="" width="30%" />
                                    <br /><br />
                                    <Link href={'/Exterior_Design/AllExterior_Design'} legacyBehavior className='p-0' ><a><h1>FASHION</h1></a></Link>
                                    <h6>FROM <sub className='fs-6'>130</sub> M2</h6>
                                    <h5>Aenean vehicula non mauris maximus elementum. Nulla facilisi.</h5>
                                </div>
                                <div className="sssubthreedivmid">
                                    <img src="/A-6.webp" alt="" width="100%" height="100%" />
                                </div>
                            </div>
                        </div>
                        <div className="col" data-aos="flip-right"  data-aos-duration="1500">
                            <div className="threediv">
                                <div className="subthreediv">
                                    <img src="/A-5.webp" alt="" width="100%" height="100%" />
                                </div>
                                <div className="sssubthreediv">
                                    <img src="/shortimg5.jpg" alt="" width="30%" />
                                    <br /><br />
                                    <Link href={'/Interior/AllInterior'} legacyBehavior className='p-0'><a><h1>FASHION</h1></a></Link>
                                    <h6>FROM <sub className='fs-6'>140</sub> M2</h6>
                                    <h5>Aenean vehicula non mauris maximus elementum. Nulla facilisi.</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Psiximage