import React from 'react'
import CommentPic from '../../assets/image/Jnae.png'
import Pic from '../../assets/image/Adenne.png'

const Testimonials = () => {
  return (
    <>
    <div className="w-full h-[569px] flex flex-col items-center justify-center bg-[#A4A4A4] text-white">
      <h3 className="text-2xl font-bold md:text-3xl lg:text-4xl">Testimonials</h3>
      <div className="mt-4 w-[1200px] h-[350px] flex flex-row justify-around flex-wrap md:w-[90%] md:h-[400px] md:justify-center md:gap-5 lg:overflow-x-auto">
        <div className="w-[350px] h-[350px] flex flex-col justify-center text-left gap-6 md:w-[300px] md:h-[250px] lg:w-[200px] lg:h-[300px]">
          <img src={CommentPic} className="w-[300px] h-[250px] md:w-[250px] md:h-[200px] lg:w-[200px] lg:h-[150px]" />
          <span className="text-lg font-bold md:text-base lg:text-sm">Jane</span>
          <span className="text-base md:text-sm lg:text-xs">"Best shopping experience ever!"</span>
        </div>
        <div className=" ml-8 mr-8 w-[350px] h-[350px] flex flex-col justify-center text-left gap-6 md:w-[300px] md:h-[250px] lg:w-[200px] lg:h-[300px]">
          <img src={Pic} className="w-[300px] h-[250px] md:w-[250px] md:h-[200px] lg:w-[200px] lg:h-[150px]" />
          <span className="text-lg font-bold md:text-base lg:text-sm">Adenne</span>
          <span className="text-base md:text-sm lg:text-xs">"Easy order, fast delivery"</span>
        </div>
        <div className="w-[350px] h-[350px] flex flex-col justify-center text-left gap-6 md:w-[300px] md:h-[250px] lg:w-[200px] lg:h-[300px]">
          <img src={CommentPic} className="w-[300px] h-[250px] md:w-[250px] md:h-[200px] lg:w-[200px] lg:h-[150px]" />
          <span className="text-lg font-bold md:text-base lg:text-sm">Jane</span>
          <span className="text-base md:text-sm lg:text-xs">"How can I rate this 100*"</span>
        </div>
      </div>
    </div>
    </>
  )
}

export default Testimonials
