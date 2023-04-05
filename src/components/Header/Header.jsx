import React from 'react';
import logo from '../../../images/Logo.svg'
import './Header.css'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className='header'>
            <div className='imgDiv'>
            <img src={logo} alt="" />
            </div>
            <div className='navItems'>
                <Link to="/order">Order</Link>
                <Link to="/review">Order Review</Link>
                <Link to="/invertory">Manage Invertory</Link>
                <Link to="/login">Login</Link>
            </div>
        </div>
    );
};

export default Header;