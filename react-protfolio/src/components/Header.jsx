import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1>Ben Schwendiman</h1>
            <nav>
                <NavLink 
                    to="/" 
                    className={({ isActive }) => isActive ? "active" : ""}
                >
                    About Me
                </NavLink>
                <NavLink 
                    to="/portfolio" 
                    className={({ isActive }) => isActive ? "active" : ""}
                >
                    Portfolio
                </NavLink>
                <NavLink 
                    to="/contact" 
                    className={({ isActive }) => isActive ? "active" : ""}
                >
                    Contact
                </NavLink>
                <a href='../assets/resume.pdf' download>Resume</a>
            </nav>
        </header>
    );
};

export default Header;