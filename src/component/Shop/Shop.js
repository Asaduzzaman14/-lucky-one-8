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
        if (newProduct.length > 4) {
            alert('not added')
        } else {
            setCart(newProduct)
        }

    }


    // clear cart
    const ClearCart = () => {
        setCart([])
    }

    // get random product
    const RandonProduct = (cart) => {
        // console.log(cart);
        let randomItem = cart[Math.floor(Math.random() * cart.length)]
        console.log(randomItem);
        for (let randomItemm in randomItem) {
            return alert(randomItem.name);
        }
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
                <h2>Order Summery</h2>
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