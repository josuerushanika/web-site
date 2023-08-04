import React from 'react'
import './Info.css'
import { studentIcon, videoIcon } from '../../assets'

function Info() {
  return (
    <section id='info' className='dark-gray'>
      <div className='wrapper'>
        <div className='content-container'>
           <div className='info-content'>
             <img src={studentIcon}/>
             <div className='amount'>23,000</div>
             <div className='type'>Student</div>
           </div>
        </div>
      </div>
    </section>
  )
}

export default Info