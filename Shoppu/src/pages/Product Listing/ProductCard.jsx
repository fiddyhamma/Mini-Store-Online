import React from 'react';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate('/cart'); // Navigate to the cart page
  };

  return (
    <div className="product-card">
      <img src={product.imgSrc} className='product-img' alt={product.name} />
      <div className='product-all'>
      <span>⭐⭐⭐⭐⭐ ({product.reviews})</span>
      <span>{product.name}</span>
      <span>{product.price}</span>
      </div>
      <div className="product-icon" onClick={handleCartClick}>
        <FaShoppingCart className="icon cart-icon" />
      </div>
      <div className="product-icons">
        <FaHeart className="icon heart-icon" />
      </div>
    </div>
  );
};

export default ProductCard;
