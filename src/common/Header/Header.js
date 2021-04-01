import React from 'react';
import './header.css';
import image from './git-icon.png';

const Header = () => {
    return (
        <header>
            <img src={image} alt="" />
            <h2>Search GitHub</h2>
        </header>
    );
};

export default Header;
