import React from 'react'
import "./Navbar.css"
import { menuIcon } from '../../assets'

function Navbar() {
  return (
    <nav>
      <a href='#' className='logo'> sound<span className='red'>DZign</span></a>
      <ul>
        <li>
          <a href='#'>Course Details</a>
        </li>

        <li>
          <a href='#'>About</a>
        </li>

        <li>
          <a href='#'>Blog</a>
        </li>

        <li>
          <a href='#'>Testimonials</a>
        </li>
      </ul>

      <div className='menu-icon'>
        <img src={menuIcon} alt=''/>
      </div>
    </nav>
  )
}

export default Navbar