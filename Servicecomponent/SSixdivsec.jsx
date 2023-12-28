import React, { useEffect } from 'react'
import Link from 'next/link'
import Aos from 'aos'

const SSixdivsec = () => {
    useEffect(() => {
        Aos.init();
    }, [])
  return (
    <div className='container-fluid g-0'>
            <div className="Sthreeimg">
                <div className="container px-4">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
                        <div className="col" data-aos="zoom-in"  data-aos-duration="1500">
                            <div className="p-4 bg-white shadow-sm h-100">
                                <div className="d-flex justify-content-between">
                                    <img src="/shortimg.jpg" alt="" width="70px" className="mb-3" />
                                    <h1>01</h1>
                                </div>
                                <Link href="" legacyBehavior className='p-0' ><a><h2>DESIGN & PLANNING</h2></a></Link>
                                <h6>Noimy donecing and vivamus vitae commodo. Ut purus ornare laoreet ultrices are sitac</h6>
                            </div>
                        </div>
                        <div className="col"  data-aos="zoom-in"  data-aos-duration="1500">
                            <div className="p-4 bg-white shadow-sm h-100">
                                <div className="d-flex justify-content-between">
                                    <img src="/shortimg3.jpg" alt="" width="70px" className="mb-3" />
                                    <h1>02</h1>
                                </div>
                                <Link href="" legacyBehavior className='p-0' ><a><h2>CUSTOM SOLUTIONS</h2></a></Link>
                                <h6>Noimy donecing and vivamus vitae commodo. Ut purus ornare laoreet ultrices are sitac</h6>
                            </div>
                        </div>
                        <div className="col"  data-aos="zoom-in"  data-aos-duration="1500">
                            <div className="p-4 bg-white shadow-sm h-100">
                                <div className="d-flex justify-content-between">
                                    <img src="/shortimg5.jpg" alt="" width="70px" className="mb-3" />
                                    <h1>03</h1>
                                </div>
                                <Link href="" legacyBehavior className='p-0' ><a><h2>FURNITURE & DECOR</h2></a></Link>
                                <h6>Noimy donecing and vivamus vitae commodo. Ut purus ornare laoreet ultrices are sitac</h6>
                            </div>
                        </div>
                        <div className="col"  data-aos="zoom-in"  data-aos-duration="1500">
                            <div className="p-4 bg-white shadow-sm h-100">
                                <div className="d-flex justify-content-between">
                                    <img src="/shortimg3.jpg" alt="" width="70px" className="mb-3" />
                                    <h1>04</h1>
                                </div>
                                <Link href="" legacyBehavior className='p-0' ><a><h2>EXTERIOR DESIGN</h2></a></Link>
                                <h6>Noimy donecing and vivamus vitae commodo. Ut purus ornare laoreet ultrices are sitac</h6>
                            </div>
                        </div>
                        <div className="col"  data-aos="zoom-in"  data-aos-duration="1500">
                            <div className="p-4 bg-white shadow-sm h-100">
                                <div className="d-flex justify-content-between">
                                    <img src="/shortimg5.jpg" alt="" width="70px" className="mb-3" />
                                    <h1>05</h1>
                                </div>
                                <Link href="" legacyBehavior className='p-0' ><a><h2>INTERIOR</h2></a></Link>
                                <h6>Noimy donecing and vivamus vitae commodo. Ut purus ornare laoreet ultrices are sitac</h6>
                            </div>
                        </div>
                        <div className="col"  data-aos="zoom-in"  data-aos-duration="1500">
                            <div className="p-4 bg-white shadow-sm h-100">
                                <div className="d-flex justify-content-between">
                                    <img src="/shortimg.jpg" alt="" width="70px" className="mb-3" />
                                    <h1>06</h1>
                                </div>
                                <Link href="" legacyBehavior className='p-0' ><a><h2>CONCEPT PLANNING</h2></a></Link>
                                <h6>Noimy donecing and vivamus vitae commodo. Ut purus ornare laoreet ultrices are sitac</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
  )
}

export default SSixdivsec