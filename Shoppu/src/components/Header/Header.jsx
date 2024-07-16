import React from 'react'
import logo from '../../assets/image/Shoppu.png'
import { CiSearch } from "react-icons/ci";
import { LuShoppingCart } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';



const Header = () => {
  const navigate = useNavigate();

  const cart = () => {
    navigate('/cart');
  };
  return (
    <>
    <div className="bg-white shadow-md">
      <div className="flex justify-between items-center h-24 px-4 md:px-10 lg:px-20">
        <div className="flex items-center">
          <img src={logo} alt="Shoppu" className="w-[60px] h-[60px]" />
          <h3 className="text-2xl lg:text-3xl font-bold text-my-gray ml-2 hidden sm:block">Shoppu</h3>
        </div>
        <div className="flex items-center border-0.3 border-custom-gray rounded-lg px-4 py-2 w-full max-w-md mx-4">
          <CiSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent border-none outline-none w-[453px] h-[40px] pl-2"
          />
        </div>
        <div className="flex items-center gap-6 text-2xl">
          <LuShoppingCart onClick={cart} className="cursor-pointer" />
          <FaRegHeart />
          <CgProfile />
        </div>
      </div>
    </div>
  </>
  )
}

export default Header


