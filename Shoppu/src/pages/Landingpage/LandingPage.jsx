import React from 'react'
import Banner from './Banner'
import Categories from './Categories'
import Testimonials from './Testimonials'
import { BsBoxSeam } from "react-icons/bs";
import { CiCreditCard1 } from "react-icons/ci";
import { IoTrophyOutline } from "react-icons/io5";
import { FiHeadphones } from "react-icons/fi";
import './Landingpage.css'



const LandingPage = () => {
  return (
    <>
    <Banner />
    <section className='landing-page-body'>
    <div className="features">
      <div className="delivery-landing">
      <BsBoxSeam />
      <div className="landing-text">
      <span className='first'> FAST DELIVERY</span>
      <span className='second'>Delivery in 24/H</span>
      </div>
      </div>
      <div className="line-here"></div>
      <div className="delivery-landing">
      <IoTrophyOutline />
      <div className="landing-text">
      <span className='first'> 24 HOURS RETURN</span>
      <span className='second'>100% money-back guarantee</span>
      </div>
      </div>
      <div className="line-here"></div>
      <div className="delivery-landing">
      <CiCreditCard1 />
      <div className="landing-text">
      <span className='first'> SECURE PAYMENT</span>
      <span className='second'>Your money is safe</span>
      </div>
      </div>
      <div className="line-here"></div>
      <div className="delivery-landing">
      <FiHeadphones />
      <div className="landing-text">
      <span className='first'> SUPPORT 24/7</span>
      <span className='second'>Live contact/message</span>
      </div>
      </div>
    </div>
    </section>
    <section>
      <div className='download-banner'>
        <p className='banner-text-landing-page'>To Enjoy a Personalised Service and Experience</p>
        <button className='mobile-download'>Download Mobile App</button>
      </div>
    </section>
    <Categories />
    <Testimonials />
    <div className="subscribe">
        <h2>Subscribe to our newsletter</h2>
        <p>Get the latest updates on restock and new products</p>
        <div className="email-input">
        <input type="email" placeholder="Email address" />
        <button className='subscribe-button-here'>Subscribe</button>
        </div>
      </div>
  </>
  )
}

export default LandingPage
