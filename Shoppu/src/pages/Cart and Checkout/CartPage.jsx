import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ImCancelCircle } from "react-icons/im";
import img1 from '../../assets/image/baby bandage.png'
import img2 from '../../assets/image/compressive bandage.png'
import { IoArrowBackSharp } from "react-icons/io5";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GoHome } from "react-icons/go";


const CartPage = () => {
  const navigate = useNavigate();

  const handleProceedToCheckout = () => {
    navigate('/checkout');
  };
  const handleReturn = () => {
    navigate('/');
  };

  return (
    <>
    <div className="bg-[#F9FAFA] flex items-center gap-4 px-8 py-4 mt-4 mb-4">
        <span><GoHome /></span>
        <span onClick={handleReturn} className="cursor-pointer">Home</span>
        <span><MdOutlineNavigateNext /></span>
        <span className="text-light-green">Cart Page</span>
      </div>

      <div className="cart-page flex flex-col gap-4 lg:flex-row justify-around mb-4">
        <div className="cart-container flex flex-col gap-8 lg:w-2/3">
          <div className="border rounded-md border-custom-gray">
            <div className="p-2">
              <h1 className="text-lg font-semibold mb-4">Shopping Cart</h1>
              <div className="flex justify-between items-center bg-[#F2F4F5] px-4 py-2">
                <span className="font-semibold">PRODUCTS</span>
                <div className="flex gap-8 w-[450px] justify-around">
                  <p className="text-base">PRICE</p>
                  <p className="text-base">QUANTITY</p>
                  <p className="text-base">SUB-TOTAL</p>
                </div>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-around gap-4">
                <ImCancelCircle className="text-gray-600" />
                <div className="flex items-center gap-4">
                  <img src={img1} className="w-[72px] h-[72px]" alt="Bandages for babies" />
                  <span>Bandages for babies</span>
                </div>
                <div className="item-price">₦3000</div>
                <div className="item-quantity flex items-center justify-center gap-2 bg-white w-[150px] h-[40px] border border-custom-gray">
                  <button className="text-gray-600">-</button>
                  <input type="number" value="1" className="w-12 text-center" />
                  <button className="text-gray-900">+</button>
                </div>
                <div className="item-total">₦3000</div>
              </div>
              <div className="flex items-center justify-between">
                <ImCancelCircle className="text-red-500" />
                <div className="flex items-center gap-4">
                  <img src={img2} className="w-[72px] h-[72px]" alt="Compression Bandages" />
                  <span>Compression Bandages</span>
                </div>
                <div className="item-price">₦4000</div>
                <div className="item-quantity flex items-center justify-center gap-2 bg-white w-[150px] h-[40px] border border-custom-gray">
                  <button className="text-gray-600">-</button>
                  <input type="number" value="3" className="w-12 text-center outline-none" />
                  <button className="text-gray-900">+</button>
                </div>
                <div className="item-total">₦12000</div>
              </div>
            </div>
            <div className="flex justify-end items-center mt-4 h-[96px] pr-4 border border-t-1 border-b-0 border-r-0 border-l-0 border-custom-gray">
              <div className="flex items-center justify-center gap-2 text-green-500 cursor-pointer w-[203px] h-[48px] border border-light-green" onClick={handleReturn}>
                <IoArrowBackSharp />
                <span>RETURN TO SHOP</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/3 flex flex-col gap-8">
          <div className="bg-white border rounded-md border-custom-gray p-6">
            <h2 className="text-lg mb-4">Cart Totals</h2>
            <div className="flex justify-between items-center mb-2">
              <p>Sub-total:</p>
              <p className="font-bold">₦9,500</p>
            </div>
            <div className="flex justify-between items-center mb-2">
              <p>Shipping:</p>
              <p className="font-bold">Free</p>
            </div>
            <div className="flex justify-between items-center mb-2">
              <p>Discount:</p>
              <p className="font-bold">₦24</p>
            </div>
            <div className="flex justify-between items-center mb-2">
              <p>Tax:</p>
              <p className="font-bold">₦61.99</p>
            </div>
            <div className="flex justify-between items-center mt-4">
              <h3>Total:</h3>
              <h3 className="font-bold">₦12,000</h3>
            </div>
            <button onClick={handleProceedToCheckout} className="bg-[#0C239E] h-[56px] text-white px-4 py-2 mt-4 w-full">PROCEED TO CHECKOUT</button>
          </div>

          <div className="bg-white border rounded-md border-custom-gray p-6">
            <h2 className="text-lg mb-4">Coupon Code</h2>
            <input type="text" placeholder="Email address" className="border border-custom-gray px-4 py-2 mb-4 w-full outline-none" />
            <button className="bg-green-500 text-white px-4 py-2 w-[159px] h-[48px]">APPLY COUPON</button>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center text-white text-center p-6 w-full h-[324px] bg-[#1B6392]">
        <h2 className="text-2xl font-bold mb-4">Subscribe to our newsletter</h2>
        <p className="mb-4">Get the latest updates on restock and new products</p>
        <div className="flex flex-col items-center justify-around md:flex-row bg-white w-[624px] h-[72px]">
          <input type="email" placeholder="Email address" className="p-2 border text-black w-[50%] border-custom-gray outline-none mb-2 md:mb-0 md:mr-2" />
          <button className="flex flex-row justify-center items-center p-2 bg-[#0C239E] text-white w-{160px] h-[48px]">Subscribe</button>
        </div>
      </div>
    </>
  );
};

export default CartPage;
