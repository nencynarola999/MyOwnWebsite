import React, { useEffect } from 'react'
import { FaCamera } from 'react-icons/fa';
import { TbCameraSelfie } from 'react-icons/tb';
import { MdVideoCameraFront } from 'react-icons/md';
import Aos from 'aos'

const Threesec = () => {
    useEffect(() => {
        Aos.init();
    }, [])
    let array = [
        {
            img: "/3-1.jpeg",
            h5: "NEW DESIGN",
            h4: "SEND HER YOUR LOVE",
            h6: "GET IT NOW",
            icon: <FaCamera />
        },
        {
            img: "/3-3.jpg",
            h5: "NEW DESIGN",
            h4: "SEND HER YOUR LOVE",
            h6: "GET IT NOW",
            icon: <TbCameraSelfie />
        },
        {
            img: "/3-2.jpg",
            h5: "NEW DESIGN",
            h4: "SEND HER YOUR LOVE",
            h6: "GET IT NOW",
            icon: <MdVideoCameraFront />
        },
    ]
    return (
        <div className='container-fluid g-0 '>
            <div className="threeimg pb-3">
                <div className="container g-0 px-3 px-md-0">
                    <div className="textwritten" >
                        <h2 className=''>FEATURED PRODUCTS</h2>
                        <p> ipsum, dolor sit amet consectetur adipisicing elit Libero accusantium cuipsum dolor maiores ex</p>
                    </div>

                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-0">
                        {
                            array?.map((x, i) => {
                                return <div className="col m-0 mb-4 mb-md-0  p-0 p-md-3" key={i}>
                                    <div className="bg-white shadow-sm h-100" width="100%" data-aos="zoom-in" data-aos-duration="1500">
                                        <div className="check" width="100%" >
                                            <div>
                                                <img src={x?.img} alt="" className="imageset" />
                                            </div>
                                            <span >
                                                <a className='shadow'>{x?.icon}</a>
                                                <h6 className='fs-5'>{x?.h5}</h6>
                                                <h3 className='fs-4'>{x?.h4}</h3>
                                                <p>{x?.h6}</p>
                                            </span>
                                        </div>

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

export default Threesec