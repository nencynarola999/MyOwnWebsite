import React, { useEffect } from 'react'
import Link from 'next/link'
import Aos from 'aos'

const AFoursec = () => {
    useEffect(() => {
        Aos.init();
    }, [])
    let array = [
        {
            img: "/n1.png"
        },
        {
            img: "/n2.png"
        },
        {
            img: "/n3.png"
        },
        {
            img: "/n4.png"
        },
    ]
    return (
        <div className='container-fluid p-0 g-0 py-5'>
            <div className="foursecmaindiv">
                <div className="container p-0 g-0">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-0">
                        {
                            array?.map((x, i) => {
                                return <div className="col mt-5 mb-5 p-2" data-aos="zoom-in-up" data-aos-duration="1500" key={i}>
                                    <div className="setdivvv">
                                        <div>
                                            <h3>FASHION</h3>
                                            <Link href="" legacyBehavior><a >GO NOW</a></Link>
                                        </div>
                                        <img src={x?.img} alt="" />
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
export default AFoursec