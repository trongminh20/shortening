import React from 'react';
import { Link } from 'react-router-dom';
import { logo } from './SVG-images';
import { handleMouseLeave, handleHover, btnMouseLeave, btnHover } from './mouseEvents';
export default function Navbar() {

    return <nav className="navbar">
        <Link to="/">
            <div className="logo" >
                {logo}
            </div>
        </Link>
        <div className="nav-menu">
            <Link to="/features">
                <p onMouseOver={handleHover} onMouseLeave={handleMouseLeave}>Features</p>
            </Link>
            <Link to="/pricing">
                <p onMouseOver={handleHover} onMouseLeave={handleMouseLeave}>Pricing</p>
            </Link>
            <Link to="/resources">
                <p onMouseOver={handleHover} onMouseLeave={handleMouseLeave}>Resouces</p>
            </Link>
        </div>
        <div className="nav-btns">
            <Link to="/login">
                <button className="btn-login" onMouseOver={handleHover} onMouseLeave={handleMouseLeave}>Login</button>
            </Link>
            <Link to="/signup">
                <button className="btn-signup" onMouseOver={btnHover} onMouseLeave={btnMouseLeave}>Sign Up</button>
            </Link>
        </div>
    </nav>
}