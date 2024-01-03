import React, { useEffect } from 'react'
import { AiFillEye, AiFillHeart, AiOutlineRetweet } from 'react-icons/ai'
import Link from 'next/link'
import Slider from 'react-slick'
import Aos from 'aos'
const Fourimgsec = () => {
    useEffect(() => {
        Aos.init();
    }, [])
    var settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    infinite: true,
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    pauseOnHover: true
                }
            },
            {
                breakpoint: 1023,
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
                breakpoint: 767,
                settings: {
                    infinite: true,
                    slidesToShow: 2,
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
            img: "/4-1.webp",
            h5: "GLASSES",
            h6: "$170.00",
            a: "ADD TO CART"
        },
        {
            img: "/4-2.webp",
            h5: "GLASSES",
            h6: "$170.00",
            a: "ADD TO CART"
        },
        {
            img: "/4-3.webp",
            h5: "GLASSES",
            h6: "$170.00",
            a: "ADD TO CART"
        },
        {
            img: "/4-4.webp",
            h5: "GLASSES",
            h6: "$170.00",
            a: "ADD TO CART"
        },
        {
            img: "/4-5.webp",
            h5: "GLASSES",
            h6: "$170.00",
            a: "ADD TO CART"
        },
        {
            img: "/4-7.webp",
            h5: "GLASSES",
            h6: "$170.00",
            a: "ADD TO CART"
        },
        {
            img: "/4-6.webp",
            h5: "GLASSES",
            h6: "$170.00",
            a: "ADD TO CART"
        },
        {
            img: "/4-4.webp",
            h5: "GLASSES",
            h6: "$170.00",
            a: "ADD TO CART"
        },
    ]
    return (
        <div>
            <div className='container-fluid g-0'>
                <div className="fourimg pb-5">
                    <div className="container px-4 g-0">
                        <div className="fourtextwritten">
                            <h2>FEATURED PRODUCTS</h2>
                            <p> ipsum, dolor sit amet consectetur adipisicing elit Libero accusantium cuipsum dolor maiores ex</p>
                        </div>
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-0 mt-5">
                            <Slider {...settings} className='w-100 '>
                                {
                                    array?.map((x, i) => {
                                        return <div className="col m-0 mb-4 mb-lg-0" data-aos="flip-left" data-aos-duration="1500" key={i}>
                                            <div className=" h-100" width="100%">
                                                <div className="fourcheck" width="100%">
                                                    <div>
                                                        <div>
                                                            <img src={x?.img} alt="" width="100%" height="100%" />
                                                        </div>
                                                        <div className="div2">
                                                            <h5>{x?.h5}</h5>
                                                            <h6>{x?.h6}</h6>
                                                            <a>{x?.a}</a>
                                                        </div>
                                                    </div>
                                                    <span >
                                                        <div>
                                                            <Link href="" legacyBehavior><a><AiFillEye /></a></Link>
                                                        </div>
                                                        <div className="div2">
                                                            <Link href="" legacyBehavior><a><AiFillHeart /></a></Link>
                                                            <Link href="" legacyBehavior><a><AiOutlineRetweet /></a></Link>
                                                        </div>
                                                    </span>
                                                </div>

                                            </div>
                                        </div>
                                    })
                                }
                            </Slider>
                        </div>
                    </div>
                </div >
            </div >
        </div>
    )
}

export default Fourimgsec