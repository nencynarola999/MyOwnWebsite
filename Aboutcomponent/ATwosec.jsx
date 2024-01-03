import React, { useEffect } from 'react'
import Link from 'next/link'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import Aos from 'aos'


const ATwosec = () => {
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <div className='container-fluid g-0 p-0 mb-5'>
            <div className="container g-0 p-0">
                <div className="twosecmaindiv">
                    <div className="row row-cols-1 row-cols-lg-2 g-0">
                        <div className="col p-2" data-aos="fade-down-right" data-aos-duration="1500">
                            <div className="twosecfirstdiv">
                                <div></div>
                                <p className='m-0'></p>
                                <img src="/pink.png" alt="" />
                            </div>
                        </div>
                        <div className="col p-2" data-aos="fade-down-left" data-aos-duration="1500">
                            <div className="twosecseconddiv">
                                <h6 className='twosecseconddivh6'>Trendy Collection's</h6><br />
                                <h2 className='twosecseconddivh1'>HIGHEST QUALITY</h2>
                                <h3 className='twosecseconddivh2'>COLLECTION</h3><br />
                                <p className='twosecseconddivp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, facere. Lorem ipsum dolor sit.</p><br />
                                <h4 className='twosecseconddivh4'>Reviews</h4><br />
                                <div>
                                    <div>
                                        <Link href="https://www.facebook.com/" legacyBehavior><a className='me-3' target='_blank'><FaFacebookF /></a></Link>
                                        <Link href="https://www.instagram.com/" legacyBehavior><a className='me-3' target='_blank'><FaInstagram /></a></Link>
                                        <Link href="https://twitter.com/i/flow/login" legacyBehavior><a target='_blank'><FaTwitter /></a></Link>
                                    </div>
                                    <h6 className='mt-3 mb-3 mb-lg-0'>__________</h6>
                                    <span>

                                        <p className='me-3 twosecseconddiv50k'>50K</p>
                                        <p className='twosecseconddiv8k'>8K</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ATwosec