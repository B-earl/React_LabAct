import React from 'react';
import ProductInformation from './ProductInformation';

const Product = ({ name, price, description, addToCart, isFirstRow }) => {
  return (
    <div>
      {isFirstRow && (
        <div className="shopTitle">
          <h1>Nike Shoe's Shop</h1>
        </div>
      )}
      <ProductInformation name={name} price={price} description={description} addToCart={() => addToCart(price)} />
    </div>
  );
}

export default Product;
