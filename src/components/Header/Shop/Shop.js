import React, { useState } from 'react';
import fakeData from '../../../fakeData';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    // eslint-disable-next-line no-unused-vars
    const [products, setProducts] = useState(first10)
    console.log(first10);
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(product => <Product product={product}></Product>)
                }
            </div>
            <div className="card-container">
                <h3>This is Card</h3>
            </div>
        </div>
    );
};

export default Shop;