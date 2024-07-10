import React from 'react';
import './CartPage.css';
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
    <div className="navigate-line-2"><span><GoHome /></span><span  onClick={handleReturn}>Home</span> <span><MdOutlineNavigateNext /></span> <span style={{'color': '#69F0AE'}}>Cart Page </span></div>
    <div className="cart-page">
        <div className="cart-container">
          <div className="cart-header">
            <h1>Shopping Cart</h1>
            <div className="products-line">
            <div className='products-text'><span>PRODUCTS</span></div>
            <div className='products-line-2'>
            <p>PRICE</p>
            <p>QUANTITY</p>
            <p>SUB-TOTAL</p>
           </div>
           </div>
          <div className="cart-items">
          <div className="cart-item">
          <ImCancelCircle style={{'color': '#333'}}/>
          <div className="item-details">
          <img src={img1} className='img-details' alt="Bandages for babies" />
          <span>Bandages for babies</span>
          </div>
          <div className="item-price">₦3000</div>
          <div className="item-quantity">
          <button className='for-cart' style={{'color': '#929FA5'}}>-</button>
          <input type="number" value="1" />
          <button className='for-cart' style={{'color': '#191C1F'}}>+</button>
          </div>
          <div className="item-total">₦3000</div>
          </div>
          <div className="cart-item">
          <ImCancelCircle style={{'color': 'red'}} />
          <div className="item-details">
          <img src={img2} className='img-details' alt="Compression Bandages" />
          <span>Compression Bandages</span>
          </div>
          <div className="item-price">₦4000</div>
          <div className="item-quantity">
          <button className='for-cart' style={{'color': '#929FA5'}}>-</button>
          <input type="number" value="3" />
          <button className='for-cart' style={{'color': '#191C1F'}}>+</button>
          </div>
          <div className="item-total">₦12000</div>
          </div>
          <div className="return-to-shop">
          <div className="arrow">
          <IoArrowBackSharp style={{'color': '#69F0AE'}} />
          </div>
          <span onClick={handleReturn} className='return' style={{'color': '#69F0AE'}}>RETURN TO SHOP</span>
          </div>
        </div>
      </div>
      <div className="cart-coupon">
      <div className="cart-summary">
          <h2>Card Totals</h2>
          <div className="total-text">
          <p>Sub-total: </p>
          <p> <strong> ₦9,500 </strong> </p>
          </div>
          <div className="total-text">
          <p>Shipping: </p> 
          <p><strong> Free </strong> </p>
          </div>
          <div className="total-text">
          <p>Discount: </p>
          <p> <strong> ₦24 </strong> </p>
          </div>
          <div className="total-text-2">
          <p>Tax: </p> 
          <p><strong> ₦61.99 </strong> </p>
          </div>
          <div className="total-text-2">
          <h3>Total:</h3>
           <h3> <strong> ₦12,000 </strong> </h3>
          </div>

          <button onClick={handleProceedToCheckout} className='checkout-button'>PROCEED TO CHECKOUT</button>
        </div>

        <div className="coupon">
          <h2>Coupon Code</h2>
          <input type="text" placeholder="Email address" />
          <button className='for-coupon'>APPLY COUPON</button>
        </div>
      </div>
    </div>
    </div>
    <div className="subscribe">
        <h2>Subscribe to our newsletter</h2>
        <p>Get the latest updates on restock and new products</p>
        <div className="email-input">
        <input type="email" placeholder="Email address" />
        <button className='subscribe-button-here'>Subscribe</button>
        </div>
      </div>
    </>
  );
};

export default CartPage;
