import React from 'react'
import { useNavigate } from 'react-router-dom';
import img1 from '../../assets/image/Bandages.png'
import img2 from '../../assets/image/Alcohol wipe.png'
import img3 from '../../assets/image/cotton.png'
import img4 from '../../assets/image/strip.png'
import img5 from '../../assets/image/scissors.png'
import img6 from '../../assets/image/cream.png'
import img7 from '../../assets/image/Adhesive bandage.png'
import img8 from '../../assets/image/Elastic bandage.png'
import img9 from '../../assets/image/Transparent film.png'
import img10 from '../../assets/image/compressive bandage.png'

const Categories = () => {
    const navigate = useNavigate();
  
    const handleViewAllClick = () => {
      navigate('/productlisting');
    };
  
    return (
      <section className="py-5 bg-gray-100">
      <div className="mb-10 ">
        <h2 className="text-2xl mb-5 text-gray-800">Shop with Categories</h2>
        <div className="flex flex-wrap justify-around gap-4 overflow-x-auto">
          <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
            <img src={img1} className="w-36 h-36" alt="Bandages" />
            <p className="mt-2 text-gray-600">Bandages</p>
          </div>
          <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
            <img src={img2} className="w-36 h-36" alt="Alcohol wipes" />
            <p className="mt-2 text-gray-600">Alcohol wipes</p>
          </div>
          <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
            <img src={img3} className="w-36 h-36" alt="Sterile cotton balls" />
            <p className="mt-2 text-gray-600">Sterile cotton balls</p>
          </div>
          <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
            <img src={img4} className="w-36 h-36" alt="Steri-Strips" />
            <p className="mt-2 text-gray-600">Steri-Strips</p>
          </div>
          <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
            <img src={img5} className="w-36 h-36" alt="Medical Scissors" />
            <p className="mt-2 text-gray-600">Medical Scissors</p>
          </div>
          <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
            <img src={img6} className="w-36 h-36" alt="Burn Creams" />
            <p className="mt-2 text-gray-600">Burn Creams</p>
          </div>
        </div>
      </div>
    
      <div className="mb-10">
        <div className="flex justify-between items-center px-5 mb-5">
          <h2 className="text-2xl text-gray-800">Bandages</h2>
          <div className="flex gap-3 text-gray-600">
            <span className="font-bold underline">All Product</span>
            <span>Adhesive Bandages</span>
            <span>Gauze Bandages</span>
            <span>Elastic Bandages</span>
          </div>
          <button onClick={handleViewAllClick} className="text-blue-500 hover:underline">
            Products &rarr;
          </button>
        </div>
        <div className="flex flex-wrap gap-4 justify-around overflow-x-auto">
          <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
            <img src={img7} className="w-48 h-40" alt="Adhesive Bandages" />
            <span className="text-yellow-500">⭐⭐⭐⭐⭐ (505)</span>
            <p className="text-gray-600">Adhesive Bandages (Plasters)</p>
            <p className="text-gray-600">#500</p>
          </div>
          <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
            <img src={img8} className="w-48 h-40" alt="Elastic Bandages" />
            <span className="text-yellow-500">⭐⭐⭐⭐⭐ (505)</span>
            <p className="text-gray-600">Elastic Bandages (ACE Wraps)</p>
            <p className="text-gray-600">#2000</p>
          </div>
          <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
            <img src={img9} className="w-48 h-40" alt="Transparent Film Dressings" />
            <span className="text-yellow-500">⭐⭐⭐⭐⭐ (505)</span>
            <p className="text-gray-600">Transparent Film Dressings</p>
            <p className="text-gray-600">#3000</p>
          </div>
          <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
            <img src={img10} className="w-48 h-40" alt="Compression Bandages" />
            <span className="text-yellow-500">⭐⭐⭐⭐⭐ (505)</span>
            <p className="text-gray-600">Compression Bandages</p>
            <p className="text-gray-600">#5000</p>
          </div>
        </div>
        <div className="text-right mt-10 pr-5">
          <button onClick={handleViewAllClick} className="text-blue-500 hover:underline">
            View All &rarr;
          </button>
        </div>
      </div>
    </section>    
    );
  };
  
  export default Categories;