import React from 'react';

const Cart = ({ item }) => {
    console.log(item);
    return (
        <div>
            <h2>{item.name}</h2>
        </div>
    );
};

export default Cart;