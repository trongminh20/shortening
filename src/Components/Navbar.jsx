import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { logo } from './SVG-images';
import { handleMouseLeave, handleHover, btnMouseLeave, btnHover } from './mouseEvents';

export default function Navbar() {
    const [showMenu, setShowMenu] = useState();
    const showNavMenu = e => {
        setShowMenu(!showMenu);
    }

    const handleResponsiveNav = () => {
        if (window.innerWidth < 800) {
            setShowMenu(false);
        }
        if (window.innerWidth >= 800) {
            setShowMenu(true);
        }
    }
    useEffect(() => {
        window.addEventListener("resize", function () {
            if (window.innerWidth >= 800) {
                setShowMenu(true);
            }
        })
    })
    useEffect(() => {
        window.addEventListener('resize', handleResponsiveNav());
        return () => {
            window.removeEventListener('resize', handleResponsiveNav());
        }
    }, [])

    return <nav className="navbar">
        <Link to="/">
            <div className="logo" >
                {logo}
            </div>
        </Link>
        {showMenu ? <div className="nav" id="nav">
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
                    <p className="login-btn" onMouseOver={handleHover} onMouseLeave={handleMouseLeave}>Login</p>
                </Link>
                <Link to="/signup">
                    <button className="btn signup-btn" onMouseOver={btnHover} onMouseLeave={btnMouseLeave}>Sign Up</button>
                </Link>
            </div>
        </div> : ""}
        <div onClick={() => showNavMenu()} className="responsive-btn">
            <i className="fas fa-bars"></i>
        </div>
    </nav>
}