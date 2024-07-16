import React from 'react'

const Filters = () => {
    return (
        <>
        <aside className="w-72 p-5 border border-custom-gray rounded-lg bg-white">
         <h2 className="text-lg mb-5 text-gray-800">Category</h2>
        <ul className="list-none p-0 mb-5">
         <li className="mb-2">
         <input type="radio" name="category" className="mr-2" /> Bandages
         </li>
        <li className="mb-2">
        <input type="radio" name="category" className="mr-2" /> Alcohol wipes
        </li>
         <li className="mb-2">
        <input type="radio" name="category" className="mr-2" /> Sterile cotton balls
        </li>
        <li className="mb-2">
        <input type="radio" name="category" className="mr-2" /> Steri-Strips
        </li>
        <li className="mb-2">
        <input type="radio" name="category" className="mr-2" /> Medical Scissors
        </li>
        <li className="mb-2">
        <input type="radio" name="category" className="mr-2" /> Burn Creams
        </li>
        </ul>
        <h2 className="text-lg mb-5 text-gray-800">Price Range</h2>
        <div className="flex justify-around items-center mb-5">
        <input type="number" placeholder="Min price" className="w-2/5 p-2 border border-custom-gray outline-none rounded-md placeholder-gray-600" />
        <input type="number" placeholder="Max price" className="w-2/5 p-2 border border-custom-gray outline-none rounded-md placeholder-gray-600" />
        </div>
        <ul className="list-none p-0">
        <li className="mb-2">
        <input type="radio" name="price" className="mr-2" /> All Price
        </li>
        <li className="mb-2">
        <input type="radio" name="price" className="mr-2" /> Under #2000
        </li>
        <li className="mb-2">
        <input type="radio" name="price" className="mr-2" /> #2500 to #5000
        </li>
        <li className="mb-2">
        <input type="radio" name="price" className="mr-2" /> #5000 to #10,000
        </li>
        <li className="mb-2">
        <input type="radio" name="price" className="mr-2" /> #10,000 and above
        </li>
         </ul>
        </aside>
        </>
    );
};

export default Filters
