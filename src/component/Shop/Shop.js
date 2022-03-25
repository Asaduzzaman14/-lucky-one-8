import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(Response => Response.json())
            .then(data => setProducts(data))
    }, [])
    const handelAddCart = (product) => {
        const newProduct = [...cart, product]
        setCart(newProduct)
    }



    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handelAddCart={handelAddCart}
                    ></Product>)
                }
            </div>

            {/* send data to cart component */}
            <div className='cart-container'>
                <h2>order Summery</h2>
                {
                    cart.map(item => <Cart key={item.id} item={item}></Cart>)
                }
                <button className='cart-button'>Choose one</button>
                <button className='cart-button'>Choose Again</button>
            </div>
        </div>
    );
};

export default Shop;