import React, { useState } from 'react';
import fakeData from '../../../fakeData';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    // eslint-disable-next-line no-unused-vars
    const [products, setProducts] = useState(first10)
    // console.log(first10);

    // order Summery
    const [card, setCard] = useState([]);

    const handleAddProduct = (product) => {
        // console.log("added", product);
        const newCard = [...card, product];
        setCard(newCard);
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(product => <Product 
                        handleAddProduct = {handleAddProduct}
                        product={product}></Product>)
                }
            </div>
            <div className="card-container">
                <h3>Order Summery</h3>
                <p>Items Ordered: {card.length}</p>
                <p>Product Price: </p>
                <p>Tax: </p>
                <p><small>Shipping: </small></p>
                <p>Total Price: </p>
                <button className="product-btn">Review Order</button>
            </div>
        </div>
    );
};

export default Shop;