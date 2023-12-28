import React from 'react'
import {  Nav,  Navbar } from 'react-bootstrap'
import Link from 'next/link'
const Navbar1 = () => {
    return (

        <>
            <div className='fixed-top shadow'>
                <div className=" container-fluid p-0">
                    <div className="headerdiv">
                        <div className="container">
                            <Navbar expand="lg" className="p-lg-0 text">
                                <img src="/logo.jpg" alt="" width="150px" height="100px" />
                                <Navbar.Toggle aria-controls="basic-navbar-nav" className=' shadow-none' />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav>
                                        <Link href="/" legacyBehavior className='p-0' ><a className="hvr-bounce-to-bottom"><li className="navlinkdiv">Home</li></a></Link>
                                        <Link href="/about" legacyBehavior className='p-0' ><a className="hvr-bounce-to-bottom"><li className="navlinkdiv">About</li></a></Link>
                                        <Link href="/project" legacyBehavior className='p-0' ><a className="hvr-bounce-to-bottom"><li className="navlinkdiv">Project</li></a></Link>
                                        <Link href="/service" legacyBehavior className='p-0' ><a className="hvr-bounce-to-bottom"><li className="navlinkdiv">Service</li></a></Link>
                                        <Link href="/blog" legacyBehavior className='p-0' ><a className="hvr-bounce-to-bottom"><li className="navlinkdiv">Blog</li></a></Link>
                                        <Link href="/contact" legacyBehavior className='p-0' ><a className="hvr-bounce-to-bottom"><li className="navlinkdiv">Contact Us</li></a></Link>
                                    </Nav>
                                 {/* round fare avu circle   <div class="circle"></div> */}
                                    <div className="mainnavlinkdiv2">
                                        <Link href="/login" legacyBehavior className='p-0 ms-5' ><a><li className="navlinkdiv2">Login</li></a></Link>
                                        <h1 className="navlinkdiv2">/</h1>
                                        <Link href="/register" legacyBehavior className='p-0 ms-5' ><a><li className="navlinkdiv2">Register</li></a></Link>
                                    </div>
                                </Navbar.Collapse>
                            </Navbar>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Navbar1