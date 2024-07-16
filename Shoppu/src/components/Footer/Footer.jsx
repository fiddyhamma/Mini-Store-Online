import React from 'react'
import logo from '../../assets/image/Shoppu on white.png'
import { BsGooglePlay } from "react-icons/bs";
import { IoLogoApple } from "react-icons/io5";
import { GrLinkNext } from "react-icons/gr";
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();
    const products = () => {
      navigate('/productlisting');
    };
  return (
    <>
    <div className="bg-my-gray text-white py-8 h-379" >
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Shoppu" className='w-20 h-20' />
            <span className="text-xl font-medium">Shoppu</span>
          </div>
          <div>
            <p>Customer Support:<br /> 234 800 0004 9999</p>
            <p>Address:<br /> Ikeja-Lagos, Nigeria</p>
            <p>Email:<br /> info@shoppu.com</p>
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="font-semibold text-lg">Top Category</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Bandages</a></li>
            <li><a href="#" className="hover:underline">Alcohol wipes</a></li>
            <div className="flex items-center space-x-2">
              <div className="w-[24px] h-px bg-light-green"></div>
              <span className='text-gray-400'>Accessories</span>
            </div>
            <li><a href="#" className="hover:underline">Surgical scissors</a></li>
            <li><a href="#" className="hover:underline">Gloves</a></li>
            <div className="w-fit flex items-center space-x-1 cursor-pointer text-light-green bg-custom-black" onClick={products}>
              <span>Browse All Products</span>
              <GrLinkNext />
            </div>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="font-semibold text-lg">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Shop Product</a></li>
            <li><a href="#" className="hover:underline">Shopping Cart</a></li>
            <li><a href="#" className="hover:underline">Wishlist</a></li>
            <li><a href="#" className="hover:underline">Compare</a></li>
            <li><a href="#" className="hover:underline">Track Order</a></li>
            <li><a href="#" className="hover:underline">Customer Help</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="font-semibold text-lg">Download App</h4>
          <div className='flex flex-col space-y-2'>
            <button className='flex items-center justify-center w-[176px] h-[69px] bg-gray hover:bg-blue-600 text-white py-2 px-4 rounded'>
              <BsGooglePlay className="mr-2" /> Get it Now<br /> Google Play
            </button>
            <button className='flex items-center justify-center w-[176px] h-[69px] bg-gray hover:bg-blue-600 text-white py-2 px-4 rounded'>
              <IoLogoApple className="mr-2" /> Get it Now<br /> App Store
            </button>
          </div>
        </div>
      </div>
      <footer className='text-center mt-8'>&copy; Shoppu 2024</footer>
    </div>
    </>
  )
}

export default Footer
