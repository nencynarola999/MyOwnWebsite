import React, { useState } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import Link from 'next/link'
import { useRouter } from 'next/router'
const Navbar1 = () => {
    const router = useRouter();
    const [expanded, setExpanded] = useState(false);

    const handleNavItemClick = () => {
        setExpanded(false);
    };
    return (

        <>
            <div className=" container-fluid p-0 fixed-top shadow g-0">
                <div className="headerdiv">
                    <div className="container g-0">
                        <Navbar expand="lg" className="p-lg-0 text" expanded={expanded}>
                            <img src="/logo.jpg" alt="" width="150px" height="100px" />
                            <Navbar.Toggle aria-controls="basic-navbar-nav" className=' shadow-none' onClick={() => setExpanded(!expanded)} />
                            <Navbar.Collapse id="basic-navbar-nav" className='d-flex justify-content-center align-items-center' >
                                <Nav onSelect={() => setExpanded(false)}>
                                    <ul>
                                        <li>
                                            <Link href="/" className={`${router?.asPath == "/" ? "navlinkkk" : "navlinkdiv "}`}>
                                                Home
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/about" className={`${router?.asPath == "/about" ? "navlinkkk" : "navlinkdiv "}`} >
                                                About
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/project" className={`${router?.asPath == "/project" ? "navlinkkk" : "navlinkdiv "}`} >
                                                Project
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/service" className={`${router?.asPath == "/service" ? "navlinkkk" : "navlinkdiv "}`} >
                                                Service
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/blog" className={`${router?.asPath == "/blog" ? "navlinkkk" : "navlinkdiv "}`} >
                                                Blog
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/contact" className={`${router?.asPath == "/contact" ? "navlinkkk" : "navlinkdiv "}`} >
                                                Contact
                                            </Link>
                                        </li>
                                    </ul>
                                </Nav>
                                <div className="mainnavlinkdiv2">
                                    <Link href="/login" legacyBehavior className='p-0 ms-5' ><a><li className="navlinkdiv2">Login</li></a></Link>
                                    <p className="navlinkdiv2 mb-0">/</p>
                                    <Link href="/register" legacyBehavior className='p-0 ms-5' ><a><li className="navlinkdiv2">Register</li></a></Link>
                                </div>
                            </Navbar.Collapse>
                        </Navbar>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Navbar1