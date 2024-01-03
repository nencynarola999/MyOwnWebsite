import React, { useEffect } from 'react'
import Aos from 'aos'

const STwobgsec = () => {
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <div className='container-fluid g-0'>
            <div className="STwobgsecdiv">
                <div className="row row-cols-1 row-cols-lg-2 g-0">
                    <div className="col"  data-aos="fade-down"  data-aos-duration="1500">
                        <div className="Stwobg1">
                            <h2></h2>
                            <h3></h3>
                        </div>
                    </div>
                    <div className="col"  data-aos="fade-up"  data-aos-duration="1500">
                        <div className="Stwobg2">
                        <div className="d-flex">
                            <h4 className='d-none d-md-block'></h4>
                            <h2>RESTAURANTS</h2>
                        </div>
                        <h3>SCHOOL <br /> SHOPPING MALL <br />HOSPITAL</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default STwobgsec