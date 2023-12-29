import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const Backgroundsec = () => {
    let array = [
        {
            img: "/bgi9.jpg"
        },
        {
            img: "/bgi8.jpg"
        },
        {
            img: "/bgi4.jpg"
        },
    ]
    return (
        <>
            <div className="container-fluid g-0">
                <div className=" ">
                    <Carousel>
                        {
                            array?.map((x, i) => {
                                return <Carousel.Item interval={500} key={i} className=''>
                                        <img
                                            className="carouselbg"
                                            src={x?.img}
                                            alt="First slide"
                                        />
                                </Carousel.Item>
                            })
                        }
                    </Carousel>
                </div>
            </div>
        </>
    )
}

export default Backgroundsec