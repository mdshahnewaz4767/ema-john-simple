import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <h1>This is Header</h1>
            <img src={logo} alt="logo"/>
        </div>
    );
};

export default Header;