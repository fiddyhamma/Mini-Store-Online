import React from 'react';
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
    <>
      <div className="product-listing max-w-screen-xl p-10 ml-20 md:p-5 md:ml-5 sm:p-2 sm:ml-0">
      <div className="bg-[#F9FAFA] flex items-center gap-4 px-8 py-4 mt-4 mb-4">
        <span><GoHome /></span>
        <span onClick={home} className="text-light-green cursor-pointer">Home</span>
      </div>
      <br />
      <main className="flex flex-col md:flex-row gap-8">
        <Filters />
        <section className="product-grid text-sm grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full overflow-x-auto sm:grid-cols-2">
          {products.map((product, index) => (
            <div className="product-item border p-2 border-custom-gray flex flex-col items-center justify-center w-full h-full" key={index}>
              <ProductCard product={product} />
            </div>
          ))}
        </section>
      </main>
      <br />
    </div>
    <div className="flex flex-col items-center justify-center text-white text-center p-6 w-full h-[324px] bg-[#1B6392]">
        <h2 className="text-2xl font-bold mb-4">Subscribe to our newsletter</h2>
        <p className="mb-4">Get the latest updates on restock and new products</p>
        <div className="flex flex-col items-center justify-around md:flex-row bg-white w-[624px] h-[72px]">
          <input type="email" placeholder="Email address" className="p-2 border text-black w-[50%] border-custom-gray outline-none mb-2 md:mb-0 md:mr-2"  />
          <button className="flex flex-row justify-center items-center p-2 bg-[#0C239E] text-white w-{160px] h-[48px]">Subscribe</button>
        </div>
      </div>
    </>
  );
};

export default ProductListing;
