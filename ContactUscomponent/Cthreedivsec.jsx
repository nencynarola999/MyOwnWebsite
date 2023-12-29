import React, { useEffect } from 'react'
import Link from 'next/link'
import Aos from 'aos'

const Cthreedivsec = () => {
    useEffect(() => {
        Aos.init();
    }, [])
    let array = [
        {
            img: "/4-1.webp"
        },
        {
            img: "/4-2.webp"
        },
        {
            img: "/4-4.webp"
        },
    ]
    return (
        <div className='container-fluid mt-5 g-0'>
            <div className="container g-0">
                <div className="Cthreemaindiv">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-0">
                        {
                            array?.map((x, i) => {
                                return <div className="col p-3" data-aos="zoom-out" data-aos-duration="1500" key={i}>
                                    <div className="Cthreediv1">
                                        <img src={x?.img} alt="" width="100px" style={{ paddingBottom: "40px" }} />
                                        <h6>20 Broklyn Street, New Town</h6>
                                        <h6>New York, United States</h6><br />
                                        <Link href=""><h5>Learn more</h5></Link>
                                        <div className="Cthreediv2">
                                        </div>
                                        <div className="Cthreediv3">
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cthreedivsec