import React from 'react'
import "./Blog.css"
import { blog1,blog2,blog3 } from '../../assets'

function Blog() {
  return (
    <section id="blog" className='pink'>
       <div className='wrapper'>
          <h2 className='light'>Latest Post</h2>
          <div className='content-container'>
              <div className='post'>
                <div className='tag'>DAW</div>
                <a href='#'>
                   <img src={blog1} alt="" />
                </a>

                <a href='#'>
                   <h3 className='post-title'>How to use Drum Machine in Logic Pro X</h3>
                </a>
              </div>

              <div className='post'>
                <div className='tag'>Mixing</div>
                <a href='#'>
                   <img src={blog2} alt="" />
                </a>

                <a href='#'>
                   <h3 className='post-title'>How to mix guitare Effectivelly</h3>
                </a>
              </div>

              <div className='post'>
                <div className='tag'>VOX</div>
                <a href='#'>
                   <img src={blog3} alt="" />
                </a>

                <a href='#'>
                   <h3 className='post-title'>How to use Drum Machine in Logic Pro X</h3>
                </a>
              </div>
          </div>
          <div className='btn-container'>
            <a href='#' className='all-posts-btn'> All Posts</a>
          </div>
       </div>
      </section>
  )
}

export default Blog