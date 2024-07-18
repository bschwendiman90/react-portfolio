import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    <header>
        <h1>
            Ben Schwendiman
        </h1>
        <nav>
            <NavLink to="/" activeClassName="active">About Me</NavLink>
            <NavLink to="/portfolio" activeClassName="active">Portfolio</NavLink>
            <NavLink to="/contact" activeClassName="active">Contact</NavLink>
            <a href='../assets/resume.pdf' download>Resume</a>
        </nav>
    </header>
};

    export default Header;