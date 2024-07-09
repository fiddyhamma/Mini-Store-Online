import React from 'react'
import './Testimonials.css';
import CommentPic from '../../assets/image/Jnae.png'
import Pic from '../../assets/image/Adenne.png'

const Testimonials = () => {
  return (
    <>
    <div className="testimonials">
        <h3>Testimonials</h3>
        <div className="comments">
            <div className="jane">
            <img src={CommentPic} className='jane-pic'/>
                <span className='text-one'>Jane</span>
                <span className='text-two'>"Best shopping experience ever!"</span>
            </div>
            <div className="jane">
            <img src={Pic} className='jane-pic'/>
                <span className='text-one'>Adenne</span>
                <span className='text-two'>"East order, fast delivery"</span>
            </div>
            <div className="jane">
            <img src={CommentPic} className='jane-pic'/>
                <span className='text-one'>Jane</span>
                <span className='text-two'>"How can i rate this 100*"</span>
            </div>
        </div>
    </div>
    </>
  )
}

export default Testimonials
