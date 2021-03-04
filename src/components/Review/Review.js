import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import HappyImage from '../../images/giphy.gif';


const Review = () => {

    const [cart, setCart] = useState([])
    //cart data
    useEffect(() => {
        const saveCart =  getDatabaseCart();
        const productKeys = Object.keys(saveCart);

        const cartProducts= productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = saveCart[key];
            return product;
        })
        // console.log(cartProducts);
        setCart(cartProducts);
    }, [])

    //Order Placed
    const [orderPlaced, setOrderPlaced] = useState(false);
    const handlePlaceOrder = () => {
        setCart([]);
        setOrderPlaced(true);
        processOrder();
    }
    let thankYou;
    if(orderPlaced){
       thankYou = <img src={HappyImage} alt=""/>
    }

    //remove product 
    const removeProduct = (productKey) => {
        // console.log('Clicked', productKey);
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }
    return (
        <div className="twin-container">
           <div className="product-container">
                {
                    cart.map(pd => <ReviewItem product={pd} key={pd.key} removeProduct={removeProduct}></ReviewItem>)
                }
                {
                    thankYou
                }
           </div>
           <div className="cart-container">
               <Cart cart={cart}>
                    <button onClick={handlePlaceOrder} className="product-btn">Place Order</button>
               </Cart>
           </div>
        </div>
    );
};

export default Review;