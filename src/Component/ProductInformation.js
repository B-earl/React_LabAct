// ProductInformation.js
import React from 'react';


const ProductInformation = ({ name, price, description, addToCart }) => {
  return (
    <div className='shop'>
      <h2>{name}</h2>
      <p>${price}</p>
      <p>{description}</p>
      <button className="button"onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductInformation;
