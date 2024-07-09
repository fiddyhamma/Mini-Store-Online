import React from 'react';
import './Checkout.css';
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
    <div className="navigate-line-2"><span><GoHome /></span><span onClick={home}>Home</span> <span><MdOutlineNavigateNext /></span> 
    <span onClick={cart}>CartPage</span> <span><MdOutlineNavigateNext /> </span><span style={{'color': '#69F0AE'}}>Checkout </span></div>
    <div className="checkout-page">
      <div className="checkout-container">
        <div className="billing-information">
          <h2>Billing Information</h2>
          <div className="billing-form">
            <div className="username-checkout">
            <input type="text" placeholder="First name"  className='username-text'/>
            <input type="text" placeholder="Last name" className='username-text' />
            </div>
            <div className="username-checkout">
            <input type="text" placeholder="Address" />
            </div>
            <div className="username-checkout">
            <input type="text" placeholder="Region/State" />
            <input type="text" placeholder="City" />
            <input type="text" placeholder="Zip Code" className='zip-code-text' />
            </div>
            <div className="username-checkout">
            <input type="email" placeholder="Email" className='email-text' />
            <input type="tel" placeholder="Phone Number"className='phone-number-text' />
            </div>
            <label>
              <input type="checkbox" />
              Ship into different address
            </label>
          </div>
        </div>
        <div className="payment-option">
          <h2>Payment Option</h2>
          <div className="payment-methods">
            <label className='payment-label'>
            <img src={img1} width={32} height={32}/>
             Cash on Delivery
              <input type="radio" name="payment" />
            </label>
            <label className='payment-label'>
            <img src={img2} width={32} height={32}/>
            Paypal
              <input type="radio" name="payment" />
            </label>
            <label className='payment-label'>
            <img src={img3} width={32} height={32}/>
            Amazon Pay
              <input type="radio" name="payment" />
            </label>
            <label className='payment-label'>
            <img src={img4} width={32} height={32}/>
            Debit/Credit Card
              <input type="radio" name="payment" />
            </label>
          </div>
          <div className="card-details">
            <input type="text" placeholder="Name on Card" />
            <input type="text" placeholder="Card Number" />
            <div className="cvc-expiry-date">
            <input type="text" placeholder="Expire Date" className='cvc-expiry-text' />
            <input type="text" placeholder="CVC"  className='cvc-expiry-text'/>
            </div>
          </div>
        </div>
        <div className="additional-information">
          <h2>Additional Information</h2>
          <label style={{'color': '#77878F'}}> <strong>Order Notes</strong> (Optional)</label>
          <textarea placeholder="Notes about your order, e.g., special notes for delivery"></textarea>
        </div>
        </div>
        <div className="order-summary">
          <h2>Order Summary</h2>
          <div className="order-item">
          <img src={img5} className='order-img' alt="Bandages for babies" />
          <div className="summary-text">
          <p>Bandages for babies</p>
          <p>1 x <span style={{'color': '#69F0AE'}}>#3000</span></p>
          </div>
          </div>
          <div className="order-item">
          <img src={img6} className='order-img' alt="Compression Bandages" />
          <div className="summary-text">
          <p>Compression Bandages </p>
          <p> 3 x <span style={{'color': '#69F0AE'}}>#4000</span></p>
          </div>
          </div>
          <div className="summary-text-2">
          <p>Sub-total: </p> <span> ₦9,500</span>
          </div>
          <div className="summary-text-2">
          <p>Shipping:</p> <span>Free</span>
          </div>
          <div className="summary-text-2">
          <p>Discount:</p> <span>₦24</span>
          </div>
          <div className="summary-text-3">
          <p>Tax:</p> <span>₦61.99</span>
          </div>
          <div className="summary-text-2">
          <span>Total:</span> <span> ₦12,000</span>
          </div>
          <button className='place-order-button' onClick={handlePlaceOrder}>PLACE ORDER <span className="place-order"><GrLinkNext /></span></button>
        </div>
    </div>
    </>
  );
};

export default Checkout;
