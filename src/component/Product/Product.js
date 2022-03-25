import React from 'react';
import './Product.css'
const Product = ({ product }) => {
    const { img, name, price } = product
    return (
        <div className='card'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <h3>Price: ${price}</h3>
            <button className='cart-btn'>Add To Cart</button>
        </div>
    );
};

export default Product;