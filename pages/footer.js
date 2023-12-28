import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaVolleyballBall, FaWifi } from 'react-icons/fa'
import { GrMail } from 'react-icons/gr'
import { BiSolidMap } from 'react-icons/bi'
import { BsFillTelephoneFill } from 'react-icons/bs'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className='container-fluid p-0 mt-5'>
            <div className="footerdiv">
                <div className="container  p-0">
                    <div className="row g-3">
                        <div className="col-12 col-md-5 col-lg-3 pt-0 pt-md-5">
                            <div className=" p-4 p-md-2 p-lg-0 d-flex justify-content-center  flex-column h-100">
                                <h5>CONTACT US</h5>
                                <div className='d-flex'>
                                    <Link href="https://www.google.com/maps" legacyBehavior><a target='_blank'><BiSolidMap /></a></Link>
                                    <div className="linksetdiv">
                                        <h6><Link href="">NORAURE London Street</Link></h6>
                                        <h6><Link href="">012 United Kingdom.</Link></h6>
                                    </div>
                                </div>
                                <div className='d-flex'>
                                    <Link href="https://workspace.google.com/intl/en_in/lp/gmail-in/?utm_source=google&utm_medium=cpc&utm_campaign=1605214-Workspace-APAC-IN-en-BKWS-EXA-Gmail&utm_content=text-ad-none-none-DEV_c-CRE_608675944729-ADGP_Hybrid%20%7C%20BKWS%20-%20EXA%20%7C%20Txt_Gmail_SignIn-KWID_43700074554923851-aud-1589252136926:kwd-416397227487&userloc_9062197-network_g&utm_term=KW_sing%20in%20new%20gmail%20account&gad=1&gclid=Cj0KCQjw0bunBhD9ARIsAAZl0E03tv6mQUxsAPFjNAD9ppCUUK4B2giD5fKCNPUlc_TL7s11zhZ6YWMaAiQyEALw_wcB&gclsrc=aw.ds" legacyBehavior><a target='_blank'><GrMail /></a></Link>
                                    <div className="linksetdiv">
                                        <h6><Link href="">emailnoraure@gmail.com</Link></h6>
                                        <h6><Link href="">emailsupport@gmail.com</Link></h6>
                                    </div>
                                </div>
                                <div className='d-flex'>
                                    <Link href="https://www.instagram.com/" legacyBehavior><a target='_blank'><BsFillTelephoneFill /></a></Link>
                                    <div className="linksetdiv">
                                        <h6><Link href="">(+92) 3456 7890</Link></h6>
                                        <h6><Link href="">  (+92) 1234 5678 </Link></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 col-lg-2  pt-0 pt-md-5">
                            <div className=" p-4 p-md-2 p-lg-0  d-flex justify-content-center  flex-column h-100">
                                <div className="linksetdiv">
                                    <h5>INFORMATION</h5>
                                    <h6><Link href="">My account</Link></h6>
                                    <h6><Link href="">Order history</Link></h6>
                                    <h6><Link href="">Wish List</Link></h6>
                                    <h6><Link href="">Returns</Link></h6>
                                    <h6><Link href="">Privacy Policy</Link></h6>
                                    <h6><Link href="">Site Map</Link></h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 col-lg-2  pt-0 pt-md-5">
                            <div className=" p-4 p-md-2 p-lg-0 h-100  d-flex justify-content-center  flex-column">
                                <div className="linksetdiv">
                                    <h5>OUR OFFERS</h5>
                                    <h6><Link href="">New collection</Link></h6>
                                    <h6><Link href="">Best sellers</Link></h6>
                                    <h6><Link href="">Manufacturers</Link></h6>
                                    <h6><Link href="">New products</Link></h6>
                                    <h6><Link href="">Suppliers</Link></h6>
                                    <h6><Link href="">Delivery & returns</Link></h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 col-lg-2  pt-0 pt-md-5">
                            <div className="  p-4 p-md-2 p-lg-0 h-100  d-flex justify-content-center  flex-column">
                                <div className="linksetdiv">
                                    <h5>OUR POLICY</h5>
                                    <h6><Link href=""> Help & Contact</Link></h6>
                                    <h6><Link href=""> Shipping & taxes</Link></h6>
                                    <h6><Link href=""> Returns policy</Link></h6>
                                    <h6><Link href=""> Careens</Link></h6>
                                    <h6><Link href=""> Affiliates</Link></h6>
                                    <h6><Link href=""> Legal Notice</Link></h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-5 col-lg-3  pt-0 pt-md-5">
                            <div className="  p-4 p-md-2 p-lg-0 h-100">
                                <h5>GET NEWSLETTERS</h5>
                                <div className="inputset">
                                    <input type="text" placeholder='email' />
                                    <div>
                                        <input type="text" placeholder='sub' />
                                    </div>
                                </div>
                                <h5>CONNECT US</h5>
                                <div className="d-flex">
                                    <Link href="https://www.facebook.com/" legacyBehavior><a target='_blank'><FaFacebookF /></a></Link>
                                    <Link href="https://twitter.com/i/flow/login" legacyBehavior><a target='_blank'><FaTwitter /></a></Link>
                                    <Link href="https://www.instagram.com/" legacyBehavior><a target='_blank'><FaLinkedinIn /></a></Link>
                                    <Link href="https://www.instagram.com/" legacyBehavior><a target='_blank'><FaWifi /></a></Link>
                                    <Link href="https://www.instagram.com/" legacyBehavior><a target='_blank'><FaVolleyballBall /></a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footerdiv2">
                <div className="container p-0">
                    <div className="d-flex justify-content-between">
                        <div className='d-flex align-items-center'>
                            <p className='m-0'>Copyright © <span>HasThemes</span>. All Rights Reserved</p>
                        </div >
                        <div className='d-flex align-items-center'>
                            <Link href="https://www.paypal.com/signin" legacyBehavior><a target='_blank' className='me-2'><img src="/f1.webp" alt="" width="50px" /></a></Link>
                            <Link href="https://portal.discover.com/customersvcs/universalLogin/ac_main" legacyBehavior><a target='_blank' className='me-2'><img src="/f2.webp" alt="" width="50px" /></a></Link>
                            <Link href="https://en.wikipedia.org/w/index.php?title=Special:UserLogin&returnto=CIRUS+reactor" legacyBehavior><a target='_blank' className='me-2'><img src="/f3.webp" alt="" width="50px" /></a></Link>
                            <Link href="https://www.paypal.com/signin" legacyBehavior><a target='_blank' className='me-2'><img src="/f4.webp" alt="" width="50px" /></a></Link>
                         
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer