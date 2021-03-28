import React, { useEffect, useState } from 'react';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import HappyImage from '../../images/giphy.gif';
import { useHistory } from 'react-router';


const Review = () => {

    const [cart, setCart] = useState([])
    //cart data
    useEffect(() => {
        const saveCart =  getDatabaseCart();
        const productKeys = Object.keys(saveCart);

        fetch("https://hidden-dusk-07005.herokuapp.com/productsByKeys", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productKeys)
        })
        .then(res => res.json())
        .then(data => {
            setCart(data);
        })
    }, [])

    //Order Placed
    const [orderPlaced, setOrderPlaced] = useState(false);
    const history = useHistory();

    const handleProceedCheckout = () => {
        history.push('/shipment');
        // setCart([]);
        // setOrderPlaced(true);
        // processOrder();
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
                    <button onClick={handleProceedCheckout} className="product-btn">Proceed Checkout</button>
               </Cart>
           </div>
        </div>
    );
};

export default Review;