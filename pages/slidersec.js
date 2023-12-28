import React, { useEffect } from 'react'
import Slider from 'react-slick'
import Aos from 'aos'
import { FaInstagram } from 'react-icons/fa'
import Link from 'next/link'
const Slidersec = () => {
    useEffect(() => {
        Aos.init();
    }, [])
    var settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    pauseOnHover: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    pauseOnHover: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    pauseOnHover: true
                }
            }
        ]
    }
    return (
        <div className='container-fluid p-0' >
            <div className="slidermain">

                <div className="container">
                    <div className="slidertextwritten">
                        <h1>All PRODUCTS</h1>
                        <h6> ipsum, dolor sit amet consectetur adipisicing elit Libero accusantium cuipsum dolor maiores ex</h6>
                    </div>
                    <Slider {...settings} className='w-100 '>
                        <div className="immm" data-aos="flip-down" data-aos-duration="1500">
                            <div max-width="100%">
                                <Link href="https://www.instagram.com/" legacyBehavior><a target='_blank'><FaInstagram /></a></Link>
                            </div>
                            <img src="/s1.webp" alt="" max-width="100%" />
                        </div>
                        <div className="immm" data-aos="flip-down" data-aos-duration="1500">
                            <div max-width="100%">
                                <Link href="https://www.instagram.com/" legacyBehavior><a target='_blank'><FaInstagram /></a></Link>

                            </div>
                            <img src="/s2.webp" alt="" max-width="100%" />
                        </div>
                        <div className="immm" data-aos="flip-down" data-aos-duration="1500">
                            <div max-width="100%">
                                <Link href="https://www.instagram.com/" legacyBehavior><a target='_blank'><FaInstagram /></a></Link>

                            </div>
                            <img src="/s3.webp" alt="" max-width="100%" />
                        </div>
                        <div className="immm" data-aos="flip-down" data-aos-duration="1500">
                            <div max-width="100%">
                                <Link href="https://www.instagram.com/" legacyBehavior><a target='_blank'><FaInstagram /></a></Link>

                            </div>
                            <img src="/s4.webp" alt="" max-width="100%" />
                        </div>
                        <div className="immm" data-aos="flip-down" data-aos-duration="1500">
                            <div max-width="100%">
                                <Link href="https://www.instagram.com/" legacyBehavior><a target='_blank'><FaInstagram /></a></Link>

                            </div>
                            <img src="/s5.webp" alt="" max-width="100%" />
                        </div>
                        <div className="immm" data-aos="flip-down" data-aos-duration="1500">
                            <div max-width="100%">
                                <Link href="https://www.instagram.com/" legacyBehavior><a target='_blank'><FaInstagram /></a></Link>

                            </div>
                            <img src="/s7.webp" alt="" max-width="100%" />
                        </div>
                        <div className="immm" data-aos="flip-down" data-aos-duration="1500">
                            <div max-width="100%">
                                <Link href="https://www.instagram.com/" legacyBehavior><a target='_blank'><FaInstagram /></a></Link>

                            </div>
                            <img src="/s8.webp" alt="" max-width="100%" />
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Slidersec