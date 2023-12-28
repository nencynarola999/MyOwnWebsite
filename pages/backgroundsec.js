import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const Backgroundsec = () => {
    return (
        <>
            <div className='container-fluid g-0' >
                <div className="">
                    <Carousel>
                        <Carousel.Item interval={500}>
                            <img
                                className="carouselbg"
                                src="/bgi9.jpg"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={500}>
                            <img
                                src="/bgi8.jpg"
                                className="carouselbg"
                                alt="First slide"
                            />
                            <div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item interval={500}>
                            <img
                                className="carouselbg"
                                src="/bgi4.jpg"
                                alt="First slide"
                            />
                            <div>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </>
    )
}

export default Backgroundsec