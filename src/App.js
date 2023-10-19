import React, { useState } from 'react';
import './App.css';
import Filter from './componant/filter';
import Cart from './componant/carts';
import ProductList from './componant/list';
import { ProductProvider } from './componant/products';
import { CartProvider } from './componant/CartContext'; 
function App() {
  const [selectedSize, setSelectedSize] = useState('');

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };
  return (
    <div className="App">
      <h1 className="title">BENL Sport</h1>
      <ProductProvider>
        <CartProvider> 
          <div className="main">
            <div className="Filter">
              <Filter onSizeClick={handleSizeClick} />
            </div>
            <div className="List">
              <ProductList selectedSize={selectedSize} />
            </div>
            <div className="Cart">
              <Cart />
            </div>
          </div>
        </CartProvider>
      </ProductProvider>
    </div>
  );
}
export default App;
