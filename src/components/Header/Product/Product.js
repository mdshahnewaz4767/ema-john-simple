import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props.product.name);
    const {img, name, seller, price, stock} = props.product;
    return (
       <div className="product">
           <div>
               <img src={img} alt=""/>
           </div>

           <div className="product-description">
                <h4>{name}</h4>
                <br/>
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <button>add to cart</button>
            </div>
       </div>
    );
};

export default Product;