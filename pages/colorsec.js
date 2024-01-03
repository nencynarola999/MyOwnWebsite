import React from 'react'
import Navbar1 from './navbar';
import { Dropdown } from 'react-bootstrap';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { AiFillSetting } from 'react-icons/ai';
const Colorsec = () => {
  const color = (color1, color2, color3) => {
    document.documentElement.style.setProperty('--data-color-logo', color1);
    document.documentElement.style.setProperty('--data-color-lightcolor', color2);
    document.documentElement.style.setProperty('--data-color-darkcolor', color3);
  }
  return (
    <>
      <div className="colordiv">
        <Dropdown className="d-inline" autoClose={false}>
          <Dropdown.Toggle id="dropdown-autoclose-false">
            <Link href="" id="dropdown-autoclose-outside " legacyBehavior><a className='fs-2 d-flex justify-content-center align-items-center'><AiFillSetting className='coloricon' /></a></Link>
          </Dropdown.Toggle>
          <Dropdown.Menu className='p-2 mt-4'>
            <h2></h2>
            <p>Select Theme Color</p>
            <div className="colordiv2 m-0">
              <button onClick={() => color('#e97d4e', '#f9a37ea9', '#e97c4daa')} className='h2 m-0'></button>
              <button onClick={() => color('#ef527a', '#ef5279a1', '#f1567caa')} className='h3 m-0'></button>
              <button onClick={() => color('#9055A0', '#9055a08f', '#b22bd7aa')} className='h4 m-0'></button>
              <button onClick={() => color('#379292', '#4cbaba9b', '#3792929b')} className='h5 m-0'></button>
            </div>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </>
  )
}
export default Colorsec