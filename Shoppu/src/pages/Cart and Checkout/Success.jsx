import React from 'react';
import './Success.css';
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
        <div className="navigate-line-2"><span><GoHome /></span><span onClick={handlePlaceOrder}>Home</span> <span><MdOutlineNavigateNext /></span> 
        <span onClick={Cart}>CartPage</span> <span><MdOutlineNavigateNext /> </span> <span onClick={CheckOut}>Checkout</span> <span><MdOutlineNavigateNext />  </span><span style={{'color': '#69F0AE'}}>Success </span></div>
    <div className="success-page">
      <div className="success-container">
      <img src={img1} width={88} height={88}/>
        <h1>Your order has been placed successfully</h1>
        <p>Thank you for shopping with us!</p>
        <div className="success-actions">
          <button className='success-buttons-1' onClick={handlePlaceOrder}><span><GoStack /></span>GO TO DASHBOARD</button>
          <button className='success-buttons-2'> <span><GrLinkNext /></span>VIEW ORDER</button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Success;
