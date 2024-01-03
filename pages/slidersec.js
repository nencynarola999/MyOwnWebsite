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
    let array = [
        {
            img: "/s1.webp"
        },
        {
            img: "/s2.webp"
        },
        {
            img: "/s3.webp"
        },
        {
            img: "/s4.webp"
        },
        {
            img: "/s5.webp"
        },
        {
            img: "/s7.webp"
        },
        {
            img: "/s8.webp"
        },
    ]
    return (
        <div className='container-fluid p-0 g-0' >
            <div className="slidermain">

                <div className="container px-3 px-md-0 g-0">
                    <div className="slidertextwritten">
                        <h2>All PRODUCTS</h2>
                        <p> ipsum, dolor sit amet consectetur adipisicing elit Libero accusantium cuipsum dolor maiores ex</p>
                    </div>
                    <Slider {...settings} className='w-100 '>
                        {
                            array?.map((x, i) => {
                                return <div className="immm" data-aos="flip-down" data-aos-duration="1500" key={i}>
                                    <div max-width="100%">
                                        <Link href="https://www.instagram.com/" legacyBehavior><a target='_blank'><FaInstagram /></a></Link>
                                    </div>
                                    <img src={x?.img} alt="" max-width="100%" />
                                </div>
                            })
                        }
                    </Slider>
                </div>
            </div>
        </div>
    )
}
export default Slidersec