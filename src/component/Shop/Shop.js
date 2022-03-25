import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    console.log(cart.name);
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
            <div className='cart-container'>
                {
                    cart.map(item => <h2>{item.name}</h2>)
                }
            </div>
        </div>
    );
};

export default Shop;