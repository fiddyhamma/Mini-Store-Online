import React from 'react'
import logo from '../../assets/image/Banner image.png'
import band from '../../assets/image/Band aid.png'
import bandage from '../../assets/image/Bandage scissors.png'
import { useNavigate } from 'react-router-dom';

const Banner = () => {
  const navigate = useNavigate();

    const handleViewAllClick = () => {
        navigate('/productlisting');
    };

  return (
    <>
      <div className="flex flex-row justify-between w-full h-[585px] border-[0.2px] border-custom-gray m-0 pb-0 pl-6">
      <div className="absolute left-20 mt-2">
          <img src={band} alt="Band Aid" className="w-[60px] h-[60px]" />
        </div>
      <div className="w-[600px] flex flex-col justify-center">
        <div className="flex flex-col ml-12 mt-24 mb-16 gap-10">
          <h2 className="text-4xl font-bold">
            Get access to the best <br /> healthcare products <br /> with just a few clicks
          </h2>
          <button
            onClick={handleViewAllClick}
            className="w-[250px] h-[70px] rounded-2xl bg-my-gray text-white flex items-center justify-center shadow-md border-none"
          >
            <span className="text-3xl font-bold cursor-pointer">SHOP NOW</span>
          </button>
          <div className="ml-[70%]">
            <img src={bandage} alt="Bandage Scissors" className="w-[60px] h-[60px]" />
          </div>
        </div>
      </div>
      <div className="w-[600px]">
        <img src={logo} alt="Banner" className="w-full h-auto" />
      </div>
    </div>

    </>
  )
}

export default Banner
