import React from 'react'
import './Filter.css'

const Filters = () => {
    return (
        <aside className="filters">
            <h2>Category</h2>
            <ul>
                <li><input type="radio" name="category" /> Bandages</li>
                <li><input type="radio" name="category" /> Alcohol wipes</li>
                <li><input type="radio" name="category" /> Sterile cotton balls</li>
                <li><input type="radio" name="category" /> Steri-Strips</li>
                <li><input type="radio" name="category" /> Medical Scissors</li>
                <li><input type="radio" name="category" /> Burn Creams</li>
            </ul>
            <h2>Price Range</h2>
            <div className="price-range">
                <input type="number" placeholder="Min price" />
                <input type="number" placeholder="Max price" />
            </div>
            <ul>
                <li><input type="radio" name="price" /> All Price</li>
                <li><input type="radio" name="price" /> Under #2000</li>
                <li><input type="radio" name="price" /> #2500 to #5000</li>
                <li><input type="radio" name="price" /> #5000 to #10,000</li>
                <li><input type="radio" name="price" /> #10,000 and above</li>
            </ul>
        </aside>
    );
};

export default Filters
