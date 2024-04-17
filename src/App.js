import React, { useState } from 'react';
import Product from './Component/Product';
import CartSummary from './Component/CartSummary';
import './App.css'; // Import CSS file for styling

function App() {
  const [cartTotal, setCartTotal] = useState({ totalProducts: 0, totalPrice: 0 });

  const addToCart = (price) => {
    setCartTotal({
      totalProducts: cartTotal.totalProducts + 1,
      totalPrice: cartTotal.totalPrice + price
    });
  };

  let products = [
    { id: 1, name: "Nike Air Force 1", price: 100, description: "Classic Sneakers" },
    { id: 2, name: "Nike Air Max 90", price: 120, description: "Iconic Running Shoes" },
    { id: 3, name: "Nike React Element 55", price: 130, description: "Modern Lifestyle Shoes" },
    { id: 4, name: "Nike Zoom Pegasus 37", price: 140, description: "Versatile Running Shoes" },
    { id: 5, name: "Nike Air Jordan 1", price: 170, description: "Legendary Basketball Shoes" },
    { id: 6, name: "Nike Blazer Mid", price: 110, description: "Classic Basketball Shoes" }
  ];

  return (
    <div className="App">
      <CartSummary totalProducts={cartTotal.totalProducts} totalPrice={cartTotal.totalPrice} />
      <div className="shopTitle">
        <h1>Nike Shoe's Shop</h1>
      </div>
      <div className="products-container">
        {products.map(product => (
          <Product
            key={product.id}
            name={product.name}
            price={product.price}
            description={product.description}
            addToCart={addToCart}
          />
        ))}
      </div>  
    </div>
  );
}

export default App;
