import React, { useState } from 'react'
import "./Topics.css"
import { frequencies, daw, vocalsProcessing, mixing, mixingConsole, mastering,bgElement1 } from "../../assets"

function Topics() {
  const [currentImage, setCurrentImage] = useState(frequencies)

  return (
    <section id="topics" className='black'>
      <div className='Wrapper'>
        <h2>What will you learn ?</h2>
        <div className='content-container'>
          <ul>
            <li onMouseEnter={() => setCurrentImage(frequencies)}>What are frequencies</li>
            <li onMouseEnter={() => setCurrentImage(daw)}>Using the DAW</li>
            <li onMouseEnter={() => setCurrentImage(vocalsProcessing)}>Vocals the Processing</li>
            <li onMouseEnter={() => setCurrentImage(mixing)}>Mixing</li>
            <li onMouseEnter={() => setCurrentImage(mixingConsole)}>Mixing Console</li>
            <li onMouseEnter={() => setCurrentImage(mastering)}>Mastering</li>
          </ul>

         <div className='topic-image'>
          <img src={currentImage}></img>
         </div>
        </div>
        <img src={bgElement1}></img>
      </div>
    </section>
  )
}

export default Topics