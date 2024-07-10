import React from 'react'
import logo from '../../assets/image/Banner image.png'
import band from '../../assets/image/Band aid.png'
import bandage from '../../assets/image/Bandage scissors.png'
import './Banner.css';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
  const navigate = useNavigate();

    const handleViewAllClick = () => {
        navigate('/productlisting');
    };

  return (
    <>
    <div className="banner">
        <div className="banner-text">
          <div className='band-aid'>
          <img src={band} className='band-image'/>
          </div>
          <div className="text-button">
          <h2>Get access to the best <br></br> healthcare products <br></br>with just a few clicks</h2>
          <button onClick={handleViewAllClick}><span className='button-shop'>SHOP NOW</span></button>
          <div className="bandage-scissors">
            <img src={bandage}  className='band-image'/>
          </div>
          </div>
        </div>
        <div className="banner-image">
       <img src={logo} className='image-in-band'/>
    </div>
    </div>
    </>
  )
}

export default Banner
