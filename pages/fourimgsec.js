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
                    slidesToShow: 5,
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
        <div>
            <div className='container-fluid g-0'>
                <div className="fourimg">
                    <div className="container px-4">
                        <div className="fourtextwritten">
                            <h1>FEATURED PRODUCTS</h1>
                            <h6> ipsum, dolor sit amet consectetur adipisicing elit Libero accusantium cuipsum dolor maiores ex</h6>
                        </div>
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-5 mt-5">
                            <Slider {...settings} className='w-100 '>
                                <div className="col m-0 mb-4 mb-lg-0" data-aos="flip-left" data-aos-duration="1500">
                                    <div className=" h-100" width="100%">
                                        <div className="fourcheck" width="100%">
                                            <div>
                                                <div>
                                                    <img src="/4-1.webp" alt="" width="100%" height="100%" />
                                                </div>
                                                <div className="div2">
                                                    <h5>GLASSES</h5>
                                                    <h6>$170.00</h6>
                                                    <a>ADD TO CART</a>
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
                                <div className="col m-0 mb-4 mb-lg-0" data-aos="flip-left" data-aos-duration="1500">
                                    <div className=" h-100" width="100%">
                                        <div className="fourcheck" width="100%">
                                            <div >
                                                <div>
                                                    <img src="/4-2.webp" alt="" width="100%" height="100%" />
                                                </div>
                                                <div className="div2">
                                                    <h5>GLASSES</h5>
                                                    <h6>$170.00</h6>
                                                    <a>ADD TO CART</a>
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
                                <div className="col m-0 mb-4 mb-lg-0" data-aos="flip-left" data-aos-duration="1500">
                                    <div className=" h-100" width="100%">
                                        <div className="fourcheck" width="100%">
                                            <div >
                                                <div>
                                                    <img src="/4-3.webp" alt="" width="100%" height="100%" />
                                                </div>
                                                <div className="div2">
                                                    <h5>GLASSES</h5>
                                                    <h6>$170.00</h6>
                                                    <a>ADD TO CART</a>
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
                                <div className="col m-0 mb-4 mb-lg-0" data-aos="flip-left" data-aos-duration="1500">
                                    <div className=" h-100" width="100%">
                                        <div className="fourcheck" width="100%">
                                            <div >
                                                <div>
                                                    <img src="/4-4.webp" alt="" width="100%" height="100%" />
                                                </div>
                                                <div className="div2">
                                                    <h5>GLASSES</h5>
                                                    <h6>$170.00</h6>
                                                    <a>ADD TO CART</a>
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
                                <div className="col m-0 mb-4 mb-lg-0" data-aos="flip-left" data-aos-duration="1500">
                                    <div className=" h-100" width="100%">
                                        <div className="fourcheck" width="100%">
                                            <div >
                                                <div>
                                                    <img src="/4-5.webp" alt="" width="100%" height="100%" />
                                                </div>
                                                <div className="div2">
                                                    <h5>GLASSES</h5>
                                                    <h6>$170.00</h6>
                                                    <a>ADD TO CART</a>
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
                                <div className="col m-0 mb-4 mb-lg-0" data-aos="flip-left" data-aos-duration="1500">
                                    <div className=" h-100" width="100%">
                                        <div className="fourcheck" width="100%">
                                            <div >
                                                <div>
                                                    <img src="/4-7.webp" alt="" width="100%" height="100%" />
                                                </div>
                                                <div className="div2">
                                                    <h5>GLASSES</h5>
                                                    <h6>$170.00</h6>
                                                    <a>ADD TO CART</a>
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
                                <div className="col m-0 mb-4 mb-lg-0" data-aos="flip-left" data-aos-duration="1500">
                                    <div className=" h-100" width="100%">
                                        <div className="fourcheck" width="100%">
                                            <div >
                                                <div>
                                                    <img src="/4-6.webp" alt="" width="100%" height="100%" />
                                                </div>
                                                <div className="div2">
                                                    <h5>GLASSES</h5>
                                                    <h6>$170.00</h6>
                                                    <a>ADD TO CART</a>
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
                                <div className="col m-0 mb-4 mb-lg-0" data-aos="flip-left" data-aos-duration="1500">
                                    <div className=" h-100" width="100%">
                                        <div className="fourcheck" width="100%">
                                            <div >
                                                <div>
                                                    <img src="/4-4.webp" alt="" width="100%" height="100%" />
                                                </div>
                                                <div className="div2">
                                                    <h5>GLASSES</h5>
                                                    <h6>$170.00</h6>
                                                    <a>ADD TO CART</a>
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

                            </Slider>
                        </div>
                    </div>
                </div >
            </div >
        </div>
    )
}

export default Fourimgsec