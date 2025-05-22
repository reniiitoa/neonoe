import React from 'react';
import '../styles/Header.css';

const Header = ({ title }) => {
    return (
        <div className="header-container">
            <h1 className="header-title">{title}</h1>
        </div>
    );
};

export default Header;