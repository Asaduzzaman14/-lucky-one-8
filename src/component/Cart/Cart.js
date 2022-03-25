import React from 'react';
import './Cart.css'
import { MdDelete } from 'react-icons/md';

const Cart = ({ item }) => {
    // console.log(item);
    return (
        <div className='cart-item'>
            <img src={item.img} alt="" />
            <h3>{item.name}</h3>
            <MdDelete className='icon'></MdDelete>

        </div>
    );
};

export default Cart;