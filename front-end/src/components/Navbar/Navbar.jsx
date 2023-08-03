import React from 'react'
import "./Navbar.css"

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
    </nav>
  )
}

export default Navbar