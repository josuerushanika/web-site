import React from 'react'
import { testimonial1, testimonial2, testimonial3 } from '../../assets'

function Testimonials() {
  return (
    <section id="testimonials" className='dark-gray'>
      <div className='wrapper'>
        <h2>What is our student Say?</h2>
      </div>

      <div className='content-container'>
        <div className='testimonial'>
          <img src={testimonial1} alt="" />
          <div className='reviewer-details'>
            <div className='name'>Peter Adams</div>
            <div className='company-name'>Google</div>
            <div className='review'>This is a great course. I got to learn a lot</div>
          </div>
        </div>

        <div className='testimonial'>
          <img src={testimonial2} alt="" />
          <div className='reviewer-details'>
            <div className='name'>Peter Adams</div>
            <div className='company-name'>Google</div>
            <div className='review'>This is a great course. I got to learn a lot</div>
          </div>
        </div>


        <div className='testimonial'>
          <img src={testimonial3} alt="" />
          <div className='reviewer-details'>
            <div className='name'>Peter Adams</div>
            <div className='company-name'>Google</div>
            <div className='review'>This is a great course. I got to learn a lot</div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Testimonials