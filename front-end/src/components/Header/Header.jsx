import React from 'react'
import './Header.css'

function Header() {
  return (
    <header>
        <div className='wrapper'>
           <p className='course-name'>Sound Design Masterclass</p>
           <h1>Learn the Art of Sound Design</h1>
           <a href='#' className='demo-btn'>
            Demo Lesson
           </a>
        </div>
    </header>
  )
}

export default Header