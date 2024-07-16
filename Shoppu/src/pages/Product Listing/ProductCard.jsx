import React from 'react';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate('/cart'); 
  };

  return (
    <>
    <div className="relative w-58 h-80 p-2 rounded-sm cursor-pointer transition-shadow duration-100 ease-in hover:shadow-sm">
    <img src={product.imgSrc} className="block mx-auto w-50 h-40" alt={product.name} />
    <div className="flex flex-col gap-4 mt-1">
    <span>⭐⭐⭐⭐⭐ ({product.reviews})</span>
    <span>{product.name}</span>
    <span>{product.price}</span>
    </div>
    <div className="flex bg-[#0C239E] w-[150px] h-9 items-center justify-center">
      <button className=" text-white flex flex-row items-center justify-center gap-2 focus:outline-none" onClick={handleCartClick}>
        <FaShoppingCart className="text-lg text-gray-800 hover:text-blue-500 transition-colors duration-300" />
     Add to Cart </button>
    </div>
    <div className="flex group-hover:flex absolute top-3.5 left-3/4 bg-white w-8 h-8 rounded-full items-center justify-center">
      <FaHeart className="text-lg text-gray-800 hover:text-blue-500 transition-colors duration-300" />
    </div>
    </div>
    </>
  );
};

export default ProductCard;
