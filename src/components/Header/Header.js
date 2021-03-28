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
                {loggedInUser.email && <span style={{color: 'rgb(245, 240, 77)'}}>Welcome, {loggedInUser.name}</span>}
                {loggedInUser.email ? <Link to="/shop" onClick={() => setLoggedInUser({})} style={{marginLeft: '1rem'}}>Sign out</Link>
                    : <Link to="/login">Sign in</Link>
                }
            </nav>
        </div>
    );
};

export default Header;