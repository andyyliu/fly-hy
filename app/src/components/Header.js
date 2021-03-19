import React from 'react';
import './Header.css';
import logo from './plane.png';

function Header(props) {
    return (
        <div className="header">
            <img id="logo" src={logo} alt="logo"></img>
            {props.title}
        </div>
    )
}

export default Header;