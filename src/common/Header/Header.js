import React from 'react';
import './header.css';
import image from './git-icon.png';

function Header() {
    return (
        <header>
            <img src={image} />
            <h2>Search GitHub</h2>
        </header>
    );
}

export default Header;
