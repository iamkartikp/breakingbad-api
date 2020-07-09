import React from 'react';
import logo from '../media/brba-logo.png';

const Header = () => {
    return (
        <div className="header container">
            <img className="responsive-img" src={logo} alt={logo} />
        </div>
    )
}

export default Header;
