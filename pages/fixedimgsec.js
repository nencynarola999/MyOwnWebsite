import React from 'react'
import { Carousel } from 'react-bootstrap'

const Fixedimgsec = () => {
    return (
        <div className='container-fluid p-0'>
            <div className="fixedimg">
            <div className="fix2">
                <div className="container text-center">
                    <h2>WHAT'S CUSTOMER SAY?</h2>
                    <h4>--- o ---</h4>
                    <Carousel >
                    <Carousel.Item className="sec">
                            <p>"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus sunt, quam voluptatem eos exercitationem laudantium molestias quia harum distinctio quis?""
                            </p>
                            <div className="d-flex justify-content-center align-items-center">
                                <img
                                    src="/face1.webp"
                                    alt="First slide"
                                    width="80px"
                                    height="80px"
                                    className='rounded-circle'
                                />
                                <div>
                                    <h5>JOHN DEO</h5>
                                    <h6>Techincal Support - Olker</h6>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item className="sec">
                            <p>"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus sunt, quam voluptatem eos exercitationem laudantium molestias quia harum distinctio quis?""
                            </p>
                            <div className="d-flex justify-content-center align-items-center">
                                <img
                                    src="/face2.webp"
                                    alt="First slide"
                                    width="80px"
                                    height="80px"
                                    className='rounded-circle'
                                />
                                <div>
                                    <h5>JOHN DEO</h5>
                                    <h6>Techincal Support - Olker</h6>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item className="sec">
                            <p>"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus sunt, quam voluptatem eos exercitationem laudantium molestias quia harum distinctio quis?""
                            </p>
                            <div className="d-flex justify-content-center align-items-center">
                                <img
                                    src="/face3.webp"
                                    alt="First slide"
                                    width="80px"
                                    height="80px"
                                    className='rounded-circle'
                                />
                                <div>
                                    <h5>JOHN DEO</h5>
                                    <h6>Techincal Support - Olker</h6>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item className="sec">
                            <p>"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus sunt, quam voluptatem eos exercitationem laudantium molestias quia harum distinctio quis?""
                            </p>
                            <div className="d-flex justify-content-center align-items-center">
                                <img
                                    src="/face4.webp"
                                    alt="First slide"
                                    width="80px"
                                    height="80px"
                                    className='rounded-circle'
                                />
                                <div>
                                    <h5>JOHN DEO</h5>
                                    <h6>Techincal Support - Olker</h6>
                                </div>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Fixedimgsec