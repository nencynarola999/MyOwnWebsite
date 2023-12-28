import React, { useEffect } from 'react'
import { Carousel } from 'react-bootstrap'
import Aos from 'aos'
import { BiSolidQuoteLeft } from 'react-icons/bi'


const PFixedimgsec = () => {
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <div className='container-fluid p-0 mt-5'>
            <div className="Pfixedimg">
                <div className="Pfixedimg2">
                    <div className="container">
                        <div className="row g-5">
                            <div className="col-12 col-lg-4"  data-aos="fade-right"   data-aos-duration="1500">
                                <div className="">
                                    <h6>Reviews</h6>
                                    <h1>Where Clients Say?</h1>
                                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium perspiciatis minima, repellat magnam hic quisquam cupiditate voluptas dicta ad consectetur blanditiis excepturi eius ipsam nesciunt fugiat, natus maxime quis odit!</p>
                                </div>
                            </div>
                            <div className="col-12 col-lg-8 "  data-aos="fade-left"  data-aos-duration="1500">
                                <Carousel >
                                    <Carousel.Item className="Psec" interval={500}>
                                        <div className="row row-cols-1 row-cols-md-2 g-5 ">
                                            <div className="col ">
                                                <div className="border p-4 bg-white mb-5">
                                                    <p><a><BiSolidQuoteLeft className='fs-3 me-2' /></a>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus sunt, quam voluptatem eos exercitationem laudantium molestias quia harum distinctio quis?
                                                    </p>
                                                </div>
                                                <div className="">
                                                    <div className="d-flex  align-items-center">
                                                        <img
                                                            src="/face1.webp"
                                                            alt="First slide"
                                                            width="80px"
                                                            height="80px"
                                                            className='rounded-circle me-3'
                                                        />
                                                        <div>
                                                            <h5>JOHN DEO</h5>
                                                            <h6>Techincal Support - Olker</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col ">
                                                <div className="border p-4 bg-white mb-5">
                                                    <p><a><BiSolidQuoteLeft className='fs-3 me-2' /></a>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus sunt, quam voluptatem eos exercitationem laudantium molestias quia harum distinctio quis?
                                                    </p>
                                                </div>
                                                <div className="">
                                                    <div className="d-flex  align-items-center">
                                                        <img
                                                            src="/face2.webp"
                                                            alt="First slide"
                                                            width="80px"
                                                            height="80px"
                                                            className='rounded-circle me-3'
                                                        />
                                                        <div>
                                                            <h5>JOHN DEO</h5>
                                                            <h6>Techincal Support - Olker</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Carousel.Item>
                                    <Carousel.Item className="Psec" interval={500}>
                                        <div className="row row-cols-1 row-cols-md-2 g-5 ">
                                            <div className="col ">
                                                <div className="border p-4 bg-white mb-5">
                                                    <p><a><BiSolidQuoteLeft className='fs-3 me-2' /></a>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus sunt, quam voluptatem eos exercitationem laudantium molestias quia harum distinctio quis?
                                                    </p>
                                                </div>
                                                <div className="">
                                                    <div className="d-flex align-items-center">
                                                        <img
                                                            src="/face3.webp"
                                                            alt="First slide"
                                                            width="80px"
                                                            height="80px"
                                                            className='rounded-circle me-3'
                                                        />
                                                        <div>
                                                            <h5>JOHN DEO</h5>
                                                            <h6>Techincal Support - Olker</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col ">
                                                <div className="border p-4 bg-white mb-5">
                                                    <p><a><BiSolidQuoteLeft className='fs-3 me-2' /></a>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus sunt, quam voluptatem eos exercitationem laudantium molestias quia harum distinctio quis?
                                                    </p>
                                                </div>
                                                <div className="">
                                                    <div className="d-flex  align-items-center">
                                                        <img
                                                            src="/face1.webp"
                                                            alt="First slide"
                                                            width="80px"
                                                            height="80px"
                                                            className='rounded-circle me-3'
                                                        />
                                                        <div>
                                                            <h5>JOHN DEO</h5>
                                                            <h6>Techincal Support - Olker</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Carousel.Item>
                                    <Carousel.Item className="Psec" interval={500}>
                                        <div className="row row-cols-1 row-cols-md-2 g-5 ">
                                            <div className="col ">
                                                <div className="border p-4 bg-white mb-5">
                                                    <p><a><BiSolidQuoteLeft className='fs-3 me-2' /></a>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus sunt, quam voluptatem eos exercitationem laudantium molestias quia harum distinctio quis?
                                                    </p>
                                                </div>
                                                <div className="">
                                                    <div className="d-flex  align-items-center">
                                                        <img
                                                            src="/face2.webp"
                                                            alt="First slide"
                                                            width="80px"
                                                            height="80px"
                                                            className='rounded-circle me-3'
                                                        />
                                                        <div>
                                                            <h5>JOHN DEO</h5>
                                                            <h6>Techincal Support - Olker</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col ">
                                                <div className="border p-4 bg-white mb-5">
                                                    <p><a><BiSolidQuoteLeft className='fs-3 me-2' /></a>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus sunt, quam voluptatem eos exercitationem laudantium molestias quia harum distinctio quis?
                                                    </p>
                                                </div>
                                                <div className="">
                                                    <div className="d-flex  align-items-center">
                                                        <img
                                                            src="/face3.webp"
                                                            alt="First slide"
                                                            width="80px"
                                                            height="80px"
                                                            className='rounded-circle me-3'
                                                        />
                                                        <div>
                                                            <h5>JOHN DEO</h5>
                                                            <h6>Techincal Support - Olker</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Carousel.Item>
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