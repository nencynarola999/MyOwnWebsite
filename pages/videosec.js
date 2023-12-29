import React from 'react'
import { BsPlayFill } from 'react-icons/bs'

const Videosec = () => {
  return (
    <div className='container-fluid g-0 p-0'>
      <div className="videomaindiv">
        <div className="container">
          <div className="videosub1">
            <div>
              <img src="/videoimg.jpg" alt="" />
              <a href="https://youtu.be/16TgusFJwr4" target='_blank'> <BsPlayFill className="iconset" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Videosec