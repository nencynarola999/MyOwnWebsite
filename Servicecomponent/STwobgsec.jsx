import React, { useEffect } from 'react'
import Aos from 'aos'

const STwobgsec = () => {
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <div className='container-fluid g-0'>
            <div className="STwobgsecdiv">
                <div className="row row-cols-1 row-cols-lg-2">
                    <div className="col"  data-aos="fade-down"  data-aos-duration="1500">
                        <div className="Stwobg1">
                            <h1></h1>
                            <h2></h2>
                        </div>
                    </div>
                    <div className="col"  data-aos="fade-up"  data-aos-duration="1500">
                        <div className="Stwobg2">
                        <div className="d-flex">
                            <h3 className='d-none d-md-block'></h3>
                            <h1>RESTAURANTS</h1>
                        </div>
                        <h2>SCHOOL <br /> SHOPPING MALL <br />HOSPITAL</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default STwobgsec