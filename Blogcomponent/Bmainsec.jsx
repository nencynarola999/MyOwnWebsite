import React, { useEffect } from 'react'
import { BsFillPersonFill } from 'react-icons/bs'
import { IoMdHome } from 'react-icons/io'
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md'
import Link from 'next/link'
import { FaGraduationCap } from 'react-icons/fa'
import Aos from 'aos'
const Bmainsec = () => {

    useEffect(() => {
        Aos.init();
    }, [])
  return (
    <div className='container-fluid p-0'>
    <div className="container p-0">
        <div className="Bmaindiv">
            <div className="row">
                <div className="col-12 col-lg-8"   data-aos="zoom-in"  data-aos-duration="1500">
                    <img src="/carimg1.webp" alt="" width="100%" height="20%" />
                    <h2>ARCHITECTING FOR RELIABLE SCALABILITY</h2>
                    <div className="d-flex">
                        <BsFillPersonFill />
                        <h6 className='ms-2 ms-md-3 me-2 me-md-4'>By CEO</h6>
                        <FaGraduationCap />
                        <h6 className='ms-2 ms-md-3 me-2 me-md-4'>Property</h6>
                        <IoMdHome />
                        <h6 className='ms-2 ms-md-3 me-0 me-md-4'>Residence</h6>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <Link href="">READ MORE</Link>
                    <img src="/carimg4.webp" alt="" width="100%" className='mt-5' height="20%"/>
                    <h2>SERVERLESS STREAM-BASED PROCESSING</h2>
                    <div className="d-flex">
                        <BsFillPersonFill />
                        <h6 className='ms-2 ms-md-3 me-2 me-md-4'>By Manager</h6>
                        <FaGraduationCap />
                        <h6 className='ms-2 ms-md-3 me-2 me-md-4'>Property</h6>
                        <IoMdHome />
                        <h6 className='ms-2 ms-md-3 me-0 me-md-4'>Residence</h6>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <Link href="">READ MORE</Link>
                    <img src="/carimg3.webp" alt="" width="100%" className='mt-5'height="20%" />
                    <h2>BUILDING A SCALABLE DOCUMENT</h2>
                    <div className="d-flex">
                        <BsFillPersonFill />
                        <h6 className='ms-2 ms-md-3 me-2 me-md-4'>By Bolod</h6>
                        <FaGraduationCap />
                        <h6 className='ms-2 ms-md-3 me-2 me-md-4'>Property</h6>
                        <IoMdHome />
                        <h6 className='ms-2 ms-md-3 me-0 me-md-4'>Residence</h6>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <Link href="">READ MORE</Link>
                </div>
                <div className="col-12 col-lg-4 px-5"   data-aos="zoom-in"  data-aos-duration="1500">
                  <div className="sidediv">
                  <h1>Categories</h1>
                    <div className="d-flex align-items-center py-2">
                        <MdOutlineKeyboardDoubleArrowRight className='fs-4' />
                        <Link href="" legacyBehavior className='p-0' ><a className='ms-4'><h5 className='m-0'>Design & Planning</h5></a></Link>
                    </div>
                    <div className="d-flex align-items-center py-2">
                        <MdOutlineKeyboardDoubleArrowRight className='fs-4' />
                        <Link href="" legacyBehavior className='p-0' ><a className='ms-4'><h5 className='m-0'>Custom Solutions</h5></a></Link>
                    </div>
                    <div className="d-flex align-items-center py-2">
                        <MdOutlineKeyboardDoubleArrowRight className='fs-4' />
                        <Link href="" legacyBehavior className='p-0' ><a className='ms-4'><h5 className='m-0'>Fancy & Western</h5></a></Link>
                    </div>
                    <div className="d-flex align-items-center py-2">
                        <MdOutlineKeyboardDoubleArrowRight className='fs-4' />
                        <Link href="" legacyBehavior className='p-0' ><a className='ms-4'><h5 className='m-0'>Dress Designer</h5></a></Link>
                    </div>
                    <div className="d-flex align-items-center py-2">
                        <MdOutlineKeyboardDoubleArrowRight className='fs-4' />
                        <Link href="" legacyBehavior className='p-0' ><a className='ms-4'><h5 className='m-0'>Western Designer</h5></a></Link>
                    </div>
                    <h1 className='pt-5'>Recent Posts</h1>
                    <div className="d-flex align-items-center py-2">
                        <MdOutlineKeyboardDoubleArrowRight className='fs-4' />
                        <Link href="" className='ms-4'><h5 className='m-0'>Safe For Kids</h5></Link>
                    </div>
                    <div className="d-flex align-items-center py-2">
                        <MdOutlineKeyboardDoubleArrowRight className='fs-4' />
                        <Link href="" className='ms-4'><h5 className='m-0'>Bathroom Oasis</h5></Link>
                    </div>
                    <div className="d-flex align-items-center py-2">
                        <MdOutlineKeyboardDoubleArrowRight className='fs-4' />
                        <Link href="" className='ms-4'><h5 className='m-0'>Homes to Inspire</h5></Link>
                    </div>
                    <div className="d-flex align-items-center py-2">
                        <MdOutlineKeyboardDoubleArrowRight className='fs-4' />
                        <Link href="" className='ms-4'><h5 className='m-0'>New Website Online</h5></Link>
                    </div>
                    <div className="d-flex align-items-center py-2">
                        <MdOutlineKeyboardDoubleArrowRight className='fs-4' />
                        <Link href="" className='ms-4'><h5 className='m-0'>New School Teachers</h5></Link>
                    </div>
                    <h1 className='pt-5'>Search</h1>
                    <input type="search" required /><br />
                    <button>SEARCH</button>
                  </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Bmainsec