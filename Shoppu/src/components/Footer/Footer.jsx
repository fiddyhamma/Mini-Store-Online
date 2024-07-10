import React from 'react'
import logo from '../../assets/image/Shoppu on white.png'
import { BsGooglePlay } from "react-icons/bs";
import { IoLogoApple } from "react-icons/io5";
import { GrLinkNext } from "react-icons/gr";
import './Footer.css';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();
    const products = () => {
      navigate('/productlisting');
    };
  return (
    <>
    <div className="footers">
        <div className="footer">
            <div className="contact-info">
                <div className="logo"> 
                    <img src={logo} className='shoppu-logo'/> Shoppu
                </div>
                 <div>
                    <p>Customer Support: <br></br> 234 800 0004 9999</p>
                    <p>Address:  <br></br> Ikeja-Lagos, Nigeria</p>
                    <p>Email: <br></br> info@shoppu.com</p>
                 </div>
            </div>
            <div className="category-links">
                <h4>Top Category</h4>
                <ul>
                    <li><a href="#">Bandages</a></li>
                    <li><a href="#">Alcohol wipes</a></li>
                    <div className="accessory">
                    <div className="line-accessory"></div>
                    <span className='accessory-text'> Accessories</span>
                    </div>
                    <li><a href="#">Surgical scissors</a></li>
                    <li><a href="#">Gloves</a></li>
                    <div className="products-category">
                    <span onClick={products} > Browse All Product <GrLinkNext /> </span>
                    </div>
                </ul>
            </div>
            <div className="quick-links">
                <h4>Quick Links</h4>
                <ul>
                    <li><a href="#">Shop Product</a></li>
                    <li><a href="#">Shopping Cart</a></li>
                    <li><a href="#">Wishlist</a></li>
                    <li><a href="#">Compare</a></li>
                    <li><a href="#">Track Order</a></li>
                    <li><a href="#">Customer Help</a></li>
                    <li><a href="#">About Us</a></li>
                </ul>
            </div>
        
        <div className="download-app">
            <h4>Download App</h4>
            <div className='download-buttons'>
                <button className='buttons-for-download'>
                <span> <BsGooglePlay /> Get it Now <br></br> Google Play</span></button>
                <br></br>
                <button className='buttons-for-download'>
                <span > <IoLogoApple /> Get it Now <br></br> App Store </span> </button>
            </div>
        </div>
    </div>
    <footer className='copy'>&copy; Shoppu 2024 </footer>
    </div>
    </>
  )
}

export default Footer
