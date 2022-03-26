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

    const handelAddCart = (selectedProduct) => {
        let newProduct = []
        const exists = cart.find(product => product.id === selectedProduct.id)
        if (!exists) {
            newProduct = [...cart, selectedProduct]
        } else {
            alert('alrady added')
            newProduct = [...cart]
        }
        // console.log(newProduct.length);
        setCart(newProduct)
    }


    // clear cart
    const ClearCart = () => {
        setCart([])
    }

    // get random product
    const RandonProduct = (cart) => {
        console.log(cart);
        let one = Math.floor(Math.random() * cart.length + 1)
        console.log(one, 'random');
        cart.map(cart => cart.id === one)


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
                <button onClick={() => { RandonProduct(cart) }} className='cart-button'>Choose one</button>


                <button onClick={ClearCart} className='cart-button'>Choose Again</button>
            </div>
        </div>
    );
};

export default Shop;