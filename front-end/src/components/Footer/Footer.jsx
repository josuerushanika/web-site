import React from 'react'
import "./Footer.css"
import { instagramLogo, twitterLogo, facebookLogo } from '../../assets'


function Footer() {
  return (
    <footer className='black'>
      <div className='wrapper'>
        <div className='content-container'>
          <div className='links'>
            <a href='#' className='logo'>
              sound<span className='red'>DZign</span>
            </a>

            <div className='social-icons'>
              <a href='#'>
                <img src={facebookLogo} alt=''></img>
              </a>
              <a href='#'>
                <img src={twitterLogo} alt=''></img>
              </a>
              <a href='#'>
                <img src={instagramLogo} alt=''></img>
              </a>
            </div>

            <div className='copyright'>
              This Website is designed by GTCoding c 2023
            </div>
          </div>

          <div className='links'>
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
          <div className='links'>
            <h3>Contact Us</h3>
            <ul>
              <li>
                <a href="#">contact@email.com</a>
              </li>
              <li>
                <a href="#">+243977308096</a>
              </li>
            </ul>
          </div>

          <div className='copyright-mobile'>
            This Website is designed by GTCoding c 2023
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer