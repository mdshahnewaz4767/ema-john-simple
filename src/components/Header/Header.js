import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);

    return (
        <div className="header">
            <img src={logo} alt="logo"/>
            <nav>
                <Link to="/shop">Shop</Link>
                <Link to="/review">Order Review</Link>
                <Link to="/inventory">Manage Inventory</Link>
                {loggedInUser.email ? <button onClick={() => setLoggedInUser({})}>Sign out</button>
                    : <Link to="login">Sign in</Link>
                }
            </nav>
        </div>
    );
};

export default Header;