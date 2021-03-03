import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    // console.log(cart);
    // const total = cart.reduce((total, prd)  => total + prd.price, 0);
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
        // console.log(total);
    }

    //ShippingCost
    let shipping = 0;
    if(total > 200){
        shipping = 0;
    }
    else if(total > 15){
        shipping = 4.99;
    }
    else if(total > 0){
        shipping = 12.99;
    }

    //Tax
    const tax = total /10;

    //Reduce floating value
    const grandTotal = (total + shipping + Number(tax)).toFixed(2);
    //another way
    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }

    return (
        <div>
            <h4>Order Summery</h4>
            <p>Items Ordered: ${cart.length}</p>
            <p>Product Price: ${formatNumber(total)}</p>
            <p>Shipping Cost: ${shipping}</p>
            <p>Tax + VAT: ${formatNumber(tax)}</p>
            <p>Total Price: ${grandTotal}</p>
            <button className="product-btn">Review Order</button>
        </div>
    );
};

export default Cart;