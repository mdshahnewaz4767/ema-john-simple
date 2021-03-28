import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import  { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import './Shop.css';
import { Link } from 'react-router-dom';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch("https://hidden-dusk-07005.herokuapp.com/products")
        .then(res => res.json())
        .then(data => {
            setProducts(data);
            // console.log(data);
        })
    }, [])

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productsKey = Object.keys(savedCart);
        //console.log(products);
        if(products.length){
            const previousCart = productsKey.map(existingKey => {
                const product = products.find(pd => pd.key === existingKey);
                product.quantity = savedCart[existingKey];
                return product;
            })
            setCart(previousCart);
        }
    }, [products])

    
    // order Summery
    const handleAddProduct = (pd) => {
        const toBeAddedKey = pd.key;
        const sameProduct = cart.find(product => product.key === toBeAddedKey);
        let count = 1;
        let newCart;
        if(sameProduct){
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(product => product.key !== toBeAddedKey);
            newCart = [...others, sameProduct];
        }
        else{
            pd.quantity = 1;
            newCart = [...cart, pd];
        }

        setCart(newCart);
        addToDatabaseCart(pd.key, count);
    }
    return (
        <div className="twin-container">
            <div className="product-container">
                {
                    products.map(product => <Product showAddToCart={true} 
                        handleAddProduct = {handleAddProduct}
                        product={product} key={product.key}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to="/review">
                        <button className="product-btn">Review Order</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;