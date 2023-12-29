import React, { useEffect } from 'react'
import Aos from 'aos'
import { FaPlus } from 'react-icons/fa';

const Amainsec = () => {
    useEffect(() => {
        Aos.init();
    }, [])
    let array = [
        {
            img: "/member1.png",
            h3:"IVET HOUZE",
            p:"ARCHITECT ASSISTANT"
        },
        {
            img: "/member2.png",
            h3:"JONEY VINO",
            p:"ARCHITECT ASSISTANT"
        },
        {
            img: "/member3.png",
            h3:"MARIA BILL",
            p:"ARCHITECT ASSISTANT"
        },
    ]
    return (
        <div>
            <div className="container-fluid g-0 mb-5">
                <div className="aboutblackbgimg">
                    <div className="container g-0 p-0">
                        <div className="blackmain">
                            <h2>MEET THE  <span>TEAM</span></h2>
                            <p>OUR TEAM MEMBERS</p>
                        </div>
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-0">
                            {
                                array?.map((x, i) => {
                                    return <div className="col h-100 p-3 mt-2" data-aos="zoom-in-down" data-aos-duration="1500" key={i}>
                                        <div className="blackthreeimg">
                                            <div>
                                                <img src={x?.img} alt=""   width="100%"/>
                                                <h2 className='m-0'></h2>
                                                <a className='iconhover'><FaPlus /></a>
                                            </div>
                                            <div className="px-5 py-3">
                                                <h3>{x?.h3}</h3>
                                                <p className='fs-6 mb-0'>{x?.p}</p>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Amainsec