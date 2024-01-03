import React, { useEffect } from 'react'
import Link from 'next/link'
import Aos from 'aos'

const SSixdivsec = () => {
    useEffect(() => {
        Aos.init();
    }, [])
    let array = [
        {
            img: "/shortimg.jpg",
            h1: "01",
            h2: "DESIGN & PLANNING",
            h6: "Noimy donecing and vivamus vitae commodo. Ut purus ornare laoreet ultrices are sitac"
        },
        {
            img: "/shortimg3.jpg",
            h1: "02",
            h2: "CUSTOM SOLUTIONS",
            h6: "Noimy donecing and vivamus vitae commodo. Ut purus ornare laoreet ultrices are sitac"
        },
        {
            img: "/shortimg5.jpg",
            h1: "03",
            h2: "FURNITURE & DECOR",
            h6: "Noimy donecing and vivamus vitae commodo. Ut purus ornare laoreet ultrices are sitac"
        },
        {
            img: "/shortimg3.jpg",
            h1: "04",
            h2: "EXTERIOR DESIGN",
            h6: "Noimy donecing and vivamus vitae commodo. Ut purus ornare laoreet ultrices are sitac"
        },
        {
            img: "/shortimg5.jpg",
            h1: "05",
            h2: "INTERIOR",
            h6: "Noimy donecing and vivamus vitae commodo. Ut purus ornare laoreet ultrices are sitac"
        },
        {
            img: "/shortimg.jpg",
            h1: "06",
            h2: "CONCEPT PLANNING",
            h6: "Noimy donecing and vivamus vitae commodo. Ut purus ornare laoreet ultrices are sitac"
        },
    ]
    return (
        <div className='container-fluid g-0'>
            <div className="Sthreeimg">
                <div className="container g-0 px-4">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-0">
                        {
                            array?.map((x, i) => {
                                return <div className="col p-3" data-aos="zoom-in" data-aos-duration="1500" key={i}>
                                    <div className="p-4 bg-white shadow-sm h-100">
                                        <div className="d-flex justify-content-between">
                                            <img src={x?.img} alt="" width="70px" className="mb-3" />
                                            <h2>{x?.h1}</h2>
                                        </div>
                                        <Link href="" legacyBehavior className='p-0' ><a><h3>{x?.h2}</h3></a></Link>
                                        <p className='mb-0'>{x?.h6}</p>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div >
        </div >
    )
}
export default SSixdivsec