import React from 'react';
import logo from '../../../images/Logo.svg'
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <div className='imgDiv'>
            <img src={logo} alt="" />
            </div>
            <div className='navItems'>
                <a href="/order">Order</a>
                <a href="/order Review">Order Review</a>
                <a href="/Manage Invertory">Manage Invertory</a>
                <a href="/login">Login</a>
            </div>
        </div>
    );
};

export default Header;