import React from 'react';
import './Product.css'
import { BsFillCartCheckFill } from 'react-icons/bs';


import './Product.css'
const Product = ({ product, handelAddCart }) => {
    const { img, name, price } = product
    return (
        <div className='card'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <h3>Price: ${price}</h3>
            <button onClick={() => { handelAddCart(product) }} className='cart-btn'>Add To Cart<BsFillCartCheckFill className='icon'></BsFillCartCheckFill></button>
        </div>
    );
};

export default Product;