import React from 'react';
import { useNavigate } from 'react-router-dom';
import img1 from '../../assets/image/CheckCircle.png'
import { GoStack } from "react-icons/go";
import { GrLinkNext } from "react-icons/gr";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GoHome } from "react-icons/go";

const Success = () => {
    const navigate = useNavigate();

    const handlePlaceOrder = () => {
      navigate('/');
    };
    const Cart = () => {
      navigate('/cart');
    };
    const CheckOut = () => {
      navigate('/checkout');
    };
  return (
    <>
<div className="bg-[#F9FAFA] flex items-center gap-4 px-8 py-4 mt-4 mb-4">
  <span><GoHome /></span>
  <span onClick={handlePlaceOrder} className="cursor-pointer">Home</span>
  <span><MdOutlineNavigateNext /></span>
  <span onClick={Cart} className="cursor-pointer">CartPage</span>
  <span><MdOutlineNavigateNext /></span>
  <span onClick={CheckOut} className="cursor-pointer">Checkout</span>
  <span><MdOutlineNavigateNext /></span>
  <span className="text-[#69F0AE]">Success</span>
</div>

<div className="success-page flex justify-center items-center h-screen">
  <div className="success-container flex flex-col items-center space-y-5">
    <img src={img1} width={88} height={88} alt="Success" />
    <h1 className="text-2xl font-semibold">Your order has been placed successfully</h1>
    <p>Thank you for shopping with us!</p>
    <div className="success-actions flex space-x-4">
      <button className="success-buttons-1 flex items-center justify-center  border border-[#0C239E] text-[#0C239E] px-4 py-2 rounded-md hover:bg-green-700" onClick={handlePlaceOrder}>
        <span className="mr-2"><GoStack /></span>GO TO DASHBOARD
      </button>
      <button className="success-buttons-2 flex items-center justify-center bg-[#0C239E] text-white px-4 py-2 rounded-md hover:bg-green-700">
        <span className="mr-2"><GrLinkNext /></span>VIEW ORDER
      </button>
    </div>
  </div>
</div>
    </>
  );
};

export default Success;
