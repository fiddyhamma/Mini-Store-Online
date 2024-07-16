import React from 'react';
import { useNavigate } from 'react-router-dom';
import img1 from '../../assets/image/CreditCard.png'
import img2 from '../../assets/image/CurrencyDollar.png'
import img3 from '../../assets/image/amazon-icon-1 1.png'
import img4 from '../../assets/image/image 9.png'
import img5 from '../../assets/image/baby bandage.png'
import img6 from '../../assets/image/compressive bandage.png'
import { GrLinkNext } from "react-icons/gr";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GoHome } from "react-icons/go";



const Checkout = () => {
    const navigate = useNavigate();

  const handlePlaceOrder = () => {
    navigate('/success');
  };
  const cart = () => {
    navigate('/cart');
  };
  const home = () => {
    navigate('/');
  };

  return (
    <>
<div className="bg-[#F9FAFA] flex items-center gap-4 px-8 py-4 mt-4 mb-4">
    <span><GoHome /></span>
    <span onClick={home} class="cursor-pointer">Home</span>
    <span><MdOutlineNavigateNext /></span> 
    <span onClick={cart} class="cursor-pointer">CartPage</span>
    <span><MdOutlineNavigateNext /></span>
    <span class="text-[#69F0AE]">Checkout</span>
</div>

<div className="checkout-page flex justify-center p-5">
    <div className="checkout-container w-full flex flex-col space-y-10">
        <div class="billing-information w-full md:w-3/4 lg:w-690px space-y-5">
            <h2 class="text-lg font-semibold">Billing Information</h2>
            <div class="billing-form flex flex-col space-y-5">
                <div class="username-checkout flex flex-row gap-10">
                    <input type="text" placeholder="First name" class="border p-2 border-custom-gray w-full outline-none" />
                    <input type="text" placeholder="Last name" class="border p-2 border-custom-gray w-full outline-none" />
                </div>
                <div class="username-checkout">
                    <input type="text" placeholder="Address" class="w-full border border-custom-gray p-2 outline-none" />
                </div>
                <div class="username-checkout flex flex-row gap-10">
                    <input type="text" placeholder="Region/State" class="w-full border p-2 border-custom-gray outline-none" />
                    <input type="text" placeholder="City" class="w-full border p-2 border-custom-gray outline-none" />
                    <input type="text" placeholder="Zip Code" class="border p-2 border-custom-gray outline-none" />
                </div>
                <div class="username-checkout flex flex-row gap-10">
                    <input type="email" placeholder="Email" class="w-full border p-2 border-custom-gray outline-none" />
                    <input type="tel" placeholder="Phone Number" class="w-full border p-2 border-custom-gray outline-none" />
                </div>
                <label class="flex items-center space-x-2">
                    <input type="checkbox" class="border border-custom-gray outline-none" />
                    <span>Ship into different address</span>
                </label>
            </div>
        </div>

        <div class="payment-option w-full md:w-3/4 lg:w-690px space-y-5 p-5 border rounded-md border-custom-gray">
            <h2 class="text-lg font-semibold">Payment Option</h2>
            <div class="payment-methods flex flex-row justify-center gap-5 mb-5 border rounded-md border-custom-gray p-3">
                <label class="payment-label flex flex-col items-center space-y-2 w-40 h-30 shadow p-2">
                    <img src={img1} width={32} height={32}/>
                    <span>Cash on Delivery</span>
                    <input type="radio" name="payment" class="mt-1" />
                </label>
                <label class="payment-label flex flex-col items-center space-y-2 w-40 h-30 shadow p-2">
                    <img src={img2} width={32} height={32}/>
                    <span>Paypal</span>
                    <input type="radio" name="payment" class="mt-1" />
                </label>
                <label class="payment-label flex flex-col items-center space-y-2 w-40 h-30 shadow p-2">
                    <img src={img3} width={32} height={32}/>
                    <span>Amazon Pay</span>
                    <input type="radio" name="payment" class="mt-1" />
                </label>
                <label class="payment-label flex flex-col items-center space-y-2 w-40 h-30 shadow p-2">
                    <img src={img4} width={32} height={32}/>
                    <span>Debit/Credit Card</span>
                    <input type="radio" name="payment" class="mt-1" />
                </label>
            </div>
            <div class="card-details flex flex-col space-y-5">
                <input type="text" placeholder="Name on Card" class="border p-2 border-custom-gray outline-none" />
                <input type="text" placeholder="Card Number" class="border p-2 border-custom-gray outline-none" />
                <div class="cvc-expiry-date flex flex-row gap-5">
                    <input type="text" placeholder="Expire Date" class="border p-2 border-custom-gray w-full outline-none" />
                    <input type="text" placeholder="CVC" class="border p-2 border-custom-gray w-full outline-none" />
                </div>
            </div>
        </div>

        <div class="additional-information w-full md:w-3/4 lg:w-690px space-y-5">
            <h2 class="text-lg font-semibold">Additional Information</h2>
            <label class="text-gray-500 font-light">Order Notes (Optional)</label>
            <textarea placeholder="Notes about your order, e.g., special notes for delivery" class="w-full h-32 border p-2 rounded-md border-custom-gray outline-none"></textarea>
        </div>
    </div>

    <div class="order-summary w-[424px] h-[512px] p-5 border rounded-md border-custom-gray">
        <h2 class="text-lg font-semibold mb-2">Order Summary</h2>
        <div class="order-item flex flex-row gap-5  mb-2 file:items-center">
            <img src={img5} class="order-img w-16 h-16" alt="Bandages for babies" />
            <div class="summary-text flex flex-col space-y-1">
                <p className='text-sm'>Bandages for babies</p>
                <p className='text-sm'>1 x <span class="text-green-400">#3000</span></p>
            </div>
        </div>
        <div class="order-item flex flex-row gap-5 mb-2 items-center">
            <img src={img6} class="order-img w-16 h-16" alt="Compression Bandages" />
            <div class="summary-text flex flex-col space-y-1">
                <p className='text-sm'>Compression Bandages</p>
                <p className='text-sm'>3 x <span class="text-green-400">#4000</span></p>
            </div>
        </div>
        <div class="summary-text-2 flex justify-between items-center">
            <p className='text-sm'>Sub-total:</p>
            <span className='text-sm'>₦9,500</span>
        </div>
        <div class="summary-text-2 flex justify-between items-center ">
            <p className='text-sm'>Shipping:</p>
            <span className='text-sm'>Free</span>
        </div>
        <div class="summary-text-2 flex justify-between items-center ">
            <p className='text-sm'>Discount:</p>
            <span className='text-sm'>₦24</span>
        </div>
        <div class="summary-text-3 flex justify-between items-center ">
            <p>Tax:</p>
            <span>₦61.99</span>
        </div>
        <div class="summary-text-2 flex justify-between items-center text-sm font-bold">
            <span>Total:</span>
            <span>₦12,000</span>
        </div>
        <button class=" flex flex-row justify-center items-center gap-2 place-order-button mt-4 w-full h-14 bg-[#0C239E] text-white rounded-md cursor-pointer" onClick={handlePlaceOrder}>
            PLACE ORDER <span class="place-order"><GrLinkNext /></span>
        </button>
    </div>
</div>
    </>
  );
};

export default Checkout;
