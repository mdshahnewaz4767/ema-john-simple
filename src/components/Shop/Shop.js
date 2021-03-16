import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import  { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import './Shop.css';
import { Link } from 'react-router-dom';

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    // eslint-disable-next-line no-unused-vars
    const [products, setProducts] = useState(first10);

    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const previousCart = productKeys.map(existingKey => {
            const product = fakeData.find(pd => pd.key === existingKey);
            product.quantity = savedCart[existingKey];
            return product;
        });
        // console.log(previousCart);
        setCart(previousCart)
    }, [])

    // order Summery
    const handleAddProduct = (pd) => {
        // console.log("added", pd);
        const toBeAddedKey = pd.key;
        const sameProduct = cart.find(product => product.key === toBeAddedKey);
        let count = 1;
        let newCart;
        if(sameProduct){
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count + 1;
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