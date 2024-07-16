import React from 'react'
import Banner from './Banner'
import Categories from './Categories'
import Testimonials from './Testimonials'
import { BsBoxSeam } from "react-icons/bs";
import { CiCreditCard1 } from "react-icons/ci";
import { IoTrophyOutline } from "react-icons/io5";
import { FiHeadphones } from "react-icons/fi";
import { GrFormNextLink } from "react-icons/gr";

const LandingPage = () => {
  return (
    <>
    <Banner />
      <section className="flex justify-center">
        <div className="m-10 p-4 w-[1320px] h-[108px] flex items-center justify-between bg-[#1B6392]">
          <div className="flex items-center p-5 w-[250px] h-[76px] bg-white">
            <BsBoxSeam />
            <div className="ml-4 flex flex-col items-center w-[300px] h-[40px] gap-2">
              <span className="text-sm font-bold text-[#2c3438]">FAST DELIVERY</span>
              <span className="text-sm text-[#2c3438]">Delivery in 24/H</span>
            </div>
          </div>
          <div className="w-[2px] h-[56px] bg-[#E4E7E9]"></div>
          <div className="flex items-center p-5 w-[250px] h-[76px] bg-white">
            <IoTrophyOutline />
            <div className="ml-4 flex flex-col items-center w-[300px] h-[40px] gap-2">
              <span className="text-sm font-bold text-[#2c3438]">24 HOURS RETURN</span>
              <span className="text-sm text-[#2c3438]">100% money-back guarantee</span>
            </div>
          </div>
          <div className="w-[2px] h-[56px] bg-[#E4E7E9]"></div>
          <div className="flex items-center p-5 w-[250px] h-[76px] bg-white">
            <CiCreditCard1 />
            <div className="ml-4 flex flex-col items-center w-[300px] h-[40px] gap-2">
              <span className="text-sm font-bold text-[#2c3438]">SECURE PAYMENT</span>
              <span className="text-sm text-[#2c3438]">Your money is safe</span>
            </div>
          </div>
          <div className="w-[2px] h-[56px] bg-[#E4E7E9]"></div>
          <div className="flex items-center p-5 w-[250px] h-[76px] bg-white">
            <FiHeadphones />
            <div className="ml-4 flex flex-col items-center w-[300px] h-[40px] gap-2">
              <span className="text-sm font-bold text-[#2c3438]">SUPPORT 24/7</span>
              <span className="text-sm text-[#2c3438]">Live contact/message</span>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-[220px] bg-[#A4A4A4] text-white flex flex-col items-center justify-center gap-8">
        <p className="w-fit text-2xl font-bold">To Enjoy a Personalised Service and Experience</p>
        <button className="w-[343px] h-[70px] bg-[#0C239E] rounded-xl text-xl">Download Mobile App</button>
      </section>
      <Categories />
      <Testimonials />
      <div className="flex flex-col items-center justify-center text-white text-center p-6 w-full h-[324px] bg-[#1B6392]">
        <h2 className="text-2xl font-bold mb-4">Subscribe to our newsletter</h2>
        <p className="mb-4">Get the latest updates on restock and new products</p>
        <div className="flex flex-col items-center justify-around md:flex-row bg-white w-[624px] h-[72px]">
          <input type="email" placeholder="Email address" className="p-2 border text-black w-[50%] border-custom-gray outline-none mb-2 md:mb-0 md:mr-2" />
          <button className=" flex flex-row justify-center items-center p-2 bg-[#0C239E] text-white w-{160px] h-[48px]">Subscribe <GrFormNextLink /></button>
        </div>
      </div>
  </>
  )
}

export default LandingPage
