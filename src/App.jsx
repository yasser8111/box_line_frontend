import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Home from './pages/Home'
import Category from './pages/Category'
import WrappingService from './pages/WrappingService'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          {/* New Category routes */}
          <Route path="/category/:type" element={<Category />} />
          <Route path="/service/wrapping" element={<WrappingService />} />
        </Routes>
      </Router>
    </CartProvider>
  )
}

export default App
