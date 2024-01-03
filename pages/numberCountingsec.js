import React, { useEffect } from 'react'
import CountUp from 'react-countup'
import Aos from 'aos'
const NumberCountingsec = () => {
    useEffect(() => {
        Aos.init();
    }, [])

    let array = [
        {
            classname: "py-0 py-sm-3 d-flex",
            numberdiv: "numberdiv",
            h1: "450",
            posi: "posi2",
            h4: "LADIES AREAS",
            h6: "SALE"
        },
        {
            classname: "py-0 py-sm-3 d-flex ms-2",
            numberdiv: "numberdiv1",
            h1: "97",
            posi: "posi3",
            h4: "HAPPY",
            h6: "CLIENTS"
        },
        {
            classname: "py-0 py-sm-3 d-flex ms-2",
            numberdiv: "numberdiv1",
            h1: "80",
            posi: "posi3",
            h4: "COMPLETED",
            h6: "PROJECTS"
        },
        {
            classname: "py-0 py-sm-3 d-flex ms-2",
            numberdiv: "numberdiv1",
            h1: "40",
            posi: "posi3",
            h4: "STAFF",
            h6: "MEMBERS"
        },
    ]
    return (
        <div className='container-fluid mt-5 mb-5 p-0 py-5 g-0 bg-black'>
            <div className="container p-0 g-0">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-0">
                    {
                        array?.map((x, i) => {
                            return <div className="col" key={i}>
                                <div className="posi1">
                                    <div className={x?.classname} data-aos="zoom-in" data-aos-duration="1500">
                                        <p className={x?.numberdiv}>{x?.h1} <CountUp
                                            start={0}
                                            end={x?.h1}
                                            duration={2}
                                            enableScrollSpy
                                            className='text-light'
                                        /></p>
                                        <div className={x?.posi}>
                                            <p className='posih4 mb-0'>{x?.h4}</p>
                                            <p className='posih6 mb-0'>{x.h6}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div >
    )
}

export default NumberCountingsec