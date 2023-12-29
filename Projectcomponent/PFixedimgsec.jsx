import React, { useEffect } from 'react'
import { Carousel } from 'react-bootstrap'
import Aos from 'aos'
import { BiSolidQuoteLeft } from 'react-icons/bi'


const PFixedimgsec = () => {
    useEffect(() => {
        Aos.init();
    }, [])
    let array = [
        {
            img: "/face1.webp",
            h5: "JOHN DEO",
            h6: "Techincal Support - Olker",
            img2: "/face2.webp",
            h52: "JOHN DEO",
            h62: "Techincal Support - Olker"
        },
        {
            img: "/face3.webp",
            h5: "JOHN DEO",
            h6: "Techincal Support - Olker",
            img2: "/face1.webp",
            h52: "JOHN DEO",
            h62: "Techincal Support - Olker"
        },
        {
            img: "/face2.webp",
            h5: "JOHN DEO",
            h6: "Techincal Support - Olker",
            img2: "/face3.webp",
            h52: "JOHN DEO",
            h62: "Techincal Support - Olker"
        },
    ]
    return (
        <div className='container-fluid p-0 mt-5 g-0'>
            <div className="Pfixedimg">
                <div className="Pfixedimg2">
                    <div className="container g-0">
                        <div className="row g-0">
                            <div className="col-12 p-2 col-lg-4" data-aos="fade-right" data-aos-duration="1500">
                                <div className="">
                                    <h6>Reviews</h6>
                                    <h1>Where Clients Say?</h1>
                                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium perspiciatis minima, repellat magnam hic quisquam cupiditate voluptas dicta ad consectetur blanditiis excepturi eius ipsam nesciunt fugiat, natus maxime quis odit!</p>
                                </div>
                            </div>
                            <div className="col-12 p-2 col-lg-8 " data-aos="fade-left" data-aos-duration="1500">
                                <Carousel >
                                    {
                                        array?.map((x, i) => {
                                            return <Carousel.Item className="Psec" interval={500} key={i}>
                                                <div className="row row-cols-1 row-cols-md-2 g-0 ">
                                                    <div className="col p-3 ">
                                                        <div className="border p-4 bg-white mb-5">
                                                            <p><a><BiSolidQuoteLeft className='fs-3 me-2' /></a>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus sunt, quam voluptatem eos exercitationem laudantium molestias quia harum distinctio quis?
                                                            </p>
                                                        </div>
                                                        <div className="">
                                                            <div className="d-flex  align-items-center">
                                                                <img
                                                                    src={x?.img}
                                                                    alt="First slide"
                                                                    width="80px"
                                                                    height="80px"
                                                                    className='rounded-circle me-3'
                                                                />
                                                                <div>
                                                                    <h5>{x?.h5}</h5>
                                                                    <h6>{x?.h6}</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col p-3 ">
                                                        <div className="border p-4 bg-white mb-5">
                                                            <p><a><BiSolidQuoteLeft className='fs-3 me-2' /></a>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus sunt, quam voluptatem eos exercitationem laudantium molestias quia harum distinctio quis?
                                                            </p>
                                                        </div>
                                                        <div className="">
                                                            <div className="d-flex  align-items-center">
                                                                <img
                                                                    src={x?.img2}
                                                                    alt="First slide"
                                                                    width="80px"
                                                                    height="80px"
                                                                    className='rounded-circle me-3'
                                                                />
                                                                <div>
                                                                    <h5>{x?.h52}</h5>
                                                                    <h6>{x?.h62}</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Carousel.Item>
                                        })
                                    }
                                </Carousel>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PFixedimgsec