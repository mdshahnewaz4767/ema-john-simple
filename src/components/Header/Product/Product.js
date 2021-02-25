import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    // console.log(props);
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
                <button className="product-btn" onClick={props.handleAddProduct}>
                    <FontAwesomeIcon icon={faShoppingCart} /> 
                    add to cart
                </button>
            </div>
       </div>
    );
};

export default Product;