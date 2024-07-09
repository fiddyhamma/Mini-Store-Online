import React from 'react';
import './ProductListing.css';
import { useNavigate } from 'react-router-dom';
import Filters from './Filters';
import ProductCard from './ProductCard';
import img7 from '../../assets/image/Adhesive bandage.png';
import img8 from '../../assets/image/Elastic bandage.png';
import img9 from '../../assets/image/Transparent film.png';
import img10 from '../../assets/image/compressive bandage.png';
import img11 from '../../assets/image/baby bandage.png';
import img12 from '../../assets/image/bandage cotton wool.png';
import img13 from '../../assets/image/green bandage.png';
import { GoHome } from "react-icons/go";



const products = [
  { name: 'Adhesive Bandages (Plasters)', price: '₦500', rating: 5, reviews: 7381, imgSrc: img7 },
  { name: 'Green bandage and supplement', price: '₦4000', rating: 5, reviews: 538, imgSrc: img13 },
  { name: 'Transparent Film Dressings', price: '₦3000', rating: 5, reviews: 423, imgSrc: img9 },
  { name: 'Compression Bandages', price: '₦5000', rating: 4, reviews: 816, imgSrc: img10 },
  { name: 'Elastic Bandages with cotton wool', price: '₦6000', rating: 5, reviews: 877, imgSrc: img8 },
  { name: 'Bandages with cotton wool', price: '₦3000', rating: 5, reviews: 583, imgSrc: img12 },
  { name: 'Bandages for babies', price: '₦3800', rating: 4, reviews: 426, imgSrc: img11 },
  { name: 'Green bandage and supplement', price: '₦3000', rating: 5, reviews: 583, imgSrc: img13 },
];

const ProductListing = () => {
  const navigate = useNavigate();
  const home = () => {
    navigate('/');
  };

  return (
    <div className="product-listing">
      <div className="navigate-line"><span><GoHome /></span><span  onClick={home} style={{'color': '#69F0AE'}}>Home</span> </div>
      <br></br>
      <main>
        <Filters />
        <section className="product-grid">
          {products.map((product, index) => (
            <div className="product-item" key={index}>
              <ProductCard product={product} />
            </div>
          ))}
        </section>
      </main>
      <br></br>
      <div className="subscribe">
        <h2>Subscribe to our newsletter</h2>
        <p>Get the latest updates on restock and new products</p>
        <div className="email-input">
        <input type="email" placeholder="Email address" />
        <button className='subscribe-button-here'>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
