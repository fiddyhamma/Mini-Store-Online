import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Categories.css';
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
      <section className="categories-section">
        <div className="shop-categories">
          <h2>Shop with Categories</h2>
          <div className="category-items">
            <div className="category-item">
              <img src={img1} className='img-for-category' alt="Bandages" />
              <p>Bandages</p>
            </div>
            <div className="category-item">
              <img src={img2} className='img-for-category' alt="Alcohol wipes" />
              <p>Alcohol wipes</p>
            </div>
            <div className="category-item">
              <img src={img3} className='img-for-category' alt="Sterile cotton balls" />
              <p>Sterile cotton balls</p>
            </div>
            <div className="category-item">
              <img src={img4} className='img-for-category' alt="Steri-Strips" />
              <p>Steri-Strips</p>
            </div>
            <div className="category-item">
              <img src={img5} className='img-for-category' alt="Medical Scissors" />
              <p>Medical Scissors</p>
            </div>
            <div className="category-item">
              <img src={img6} className='img-for-category' alt="Burn Creams" />
              <p>Burn Creams</p>
            </div>
          </div>
        </div>
  
        <div className="bandages-section">
          <div className="bandages-header">
            <h2>Bandages</h2>
            <div className="bandage-row">
              <span style={{'fontWeight': 'bold' }} ><u>All Product </u></span>
              <span>Adhesive Bandages</span>
              <span>Gauze Bandages</span>
              <span>Elastic Bandages</span>
            </div>
            <button onClick={handleViewAllClick} className="browse-all">Products &rarr;</button>
          </div>
          <div className="bandage-items">
            <div className="bandage-item">
              <img src={img7} className='img-for-bandage-category'  alt="Adhesive Bandages" />
              <span className='star'>⭐⭐⭐⭐⭐ (505)</span>
              <p>Adhesive Bandages (Plasters)</p>
              <p>#500</p>
            </div>
            <div className="bandage-item">
              <img src={img8} className='img-for-bandage-category'  alt="Elastic Bandages" />
              <span className='star'>⭐⭐⭐⭐⭐ (505)</span>
              <p>Elastic Bandages (ACE Wraps)</p>
              <p>#2000</p>
            </div>
            <div className="bandage-item">
              <img src={img9} className='img-for-bandage-category'  alt="Transparent Film Dressings" />
              <span className='star'>⭐⭐⭐⭐⭐ (505)</span>
              <p>Transparent Film Dressings</p>
              <p>#3000</p>
            </div>
            <div className="bandage-item">
              <img src={img10} className='img-for-bandage-category'  alt="Compression Bandages" />
              <span className='star'>⭐⭐⭐⭐⭐ (505)</span>
              <p>Compression Bandages</p>
              <p>#5000</p>
            </div>
          </div>
          <div className="view-all">
            <button onClick={handleViewAllClick} className="view-all-button">View All &rarr;</button>
          </div>
        </div>
      </section>
    );
  };
  
  export default Categories;