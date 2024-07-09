import React from 'react';
import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';
import LandingPage from './pages/Landingpage/LandingPage'
import ProductListing from './pages/Product Listing/ProductListing';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import CartPage from './pages/Cart and Checkout/CartPage'
import Checkout from './pages/Cart and Checkout/Checkout'
import Success from './pages/Cart and Checkout/Success'

function App() {

  return (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/productlisting" element={<ProductListing />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/success" element={<Success />} />
    </Routes>
    <Footer />
  </Router>
  )
}

export default App
