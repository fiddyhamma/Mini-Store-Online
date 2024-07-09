import React from 'react'
import './Header.css';
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
    <div className="navbar">
      <div className='heading'>
        <div className="logo"> 
          <img src={logo} width={60} height={60}/> <h3> Shoppu</h3>
        </div>
        <div className="input-container">
        <CiSearch  className='search-icon'/>
        <input type="text" placeholder="Search" className='search'  />
        </div>
        <div className="icons">
        <LuShoppingCart onClick={cart}  style={{'cursor': 'pointer'}}/>
        <FaRegHeart />
        <CgProfile />
        </div>
      </div>  
      </div>

  </>
  )
}

export default Header


